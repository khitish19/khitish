const timelineElement = document.querySelector('#timeline');

const parseResume = (raw) => {
  const lines = raw.split('\n').map((line) => line.trim());
  const jobs = [];
  let currentJob = null;

  const headingPattern = /^([A-Z&,\s]+)\s\|\s(.+?)\s\|\s(.+?)\s\|\s(.+)$/;

  for (const line of lines) {
    const headingMatch = line.match(headingPattern);
    if (headingMatch && !line.includes('EDUCATION')) {
      if (currentJob) jobs.push(currentJob);

      const [_, company, role, location, range] = headingMatch;
      currentJob = {
        company: company.trim(),
        role: role.trim(),
        location: location.trim(),
        range: range.trim(),
        projects: []
      };
      continue;
    }

    if (line.startsWith('- ') && currentJob) {
      currentJob.projects.push({
        title: line.slice(2).split(' - ')[0].trim(),
        description: line.slice(2),
        technologies: extractTech(line)
      });
    }
  }

  if (currentJob) jobs.push(currentJob);
  return jobs;
};

const extractTech = (text) => {
  const match = text.match(/Techniques:\s(.+)$/i);
  if (!match) return [];
  return match[1]
    .split(/[,+]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, 6);
};

const parseDetails = (raw) => {
  const sections = raw
    .split(/\n-{5,}\n/g)
    .map((section) => section.trim())
    .filter(Boolean);

  return sections.map((section) => {
    const [headerLine, ...rest] = section.split('\n').filter(Boolean);
    return {
      key: headerLine.toLowerCase(),
      details: rest.join(' ').replace(/#{1,6}\s?/g, '').replace(/\*+/g, '').trim()
    };
  });
};

const groupByStartYear = (jobs) => {
  const groups = new Map();

  for (const job of jobs) {
    const startYearMatch = job.range.match(/(\d{4})/);
    const year = startYearMatch ? startYearMatch[1] : 'Unknown';

    if (!groups.has(year)) groups.set(year, []);
    groups.get(year).push(job);
  }

  return [...groups.entries()].sort((a, b) => Number(b[0]) - Number(a[0]));
};

const findDetailText = (projectTitle, detailSections) => {
  const normalizedTitle = projectTitle.toLowerCase();
  const hit = detailSections.find((section) => normalizedTitle.includes(section.key.split(':')[0]));
  return hit ? hit.details : 'Detailed drill-down for this project will be expanded as DETAILS.md evolves.';
};

const toggleOpen = (trigger, parentClass) => {
  trigger.addEventListener('click', () => {
    const parent = trigger.closest(parentClass);
    parent.classList.toggle('open');
  });
};

const renderTimeline = (jobs, detailSections) => {
  const grouped = groupByStartYear(jobs);
  const yearTemplate = document.querySelector('#year-template');
  const companyTemplate = document.querySelector('#company-template');
  const projectTemplate = document.querySelector('#project-template');

  for (const [year, companies] of grouped) {
    const yearNode = yearTemplate.content.firstElementChild.cloneNode(true);
    const yearTrigger = yearNode.querySelector('.year-trigger');
    const yearContent = yearNode.querySelector('.year-content');

    yearTrigger.innerHTML = `<span>${year}</span><span>${companies.length} company entries</span>`;
    toggleOpen(yearTrigger, '.timeline-year');

    for (const company of companies) {
      const companyNode = companyTemplate.content.firstElementChild.cloneNode(true);
      const companyTrigger = companyNode.querySelector('.company-trigger');
      const companyContent = companyNode.querySelector('.company-content');

      companyTrigger.innerHTML = `<span>${company.company}</span><span>${company.role} • ${company.range}</span>`;
      toggleOpen(companyTrigger, '.company-card');

      for (const project of company.projects) {
        const projectNode = projectTemplate.content.firstElementChild.cloneNode(true);
        const projectTrigger = projectNode.querySelector('.project-trigger');
        const projectContent = projectNode.querySelector('.project-content');

        projectTrigger.innerHTML = `<span>${project.title}</span><span>Project details</span>`;
        toggleOpen(projectTrigger, '.project-card');

        const techHtml = project.technologies.length
          ? `<div class="tech-tags">${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}</div>`
          : '';

        projectContent.innerHTML = `
          <p class="project-description">${project.description}</p>
          ${techHtml}
          <p class="project-details"><strong>Drill down:</strong> ${findDetailText(project.title, detailSections)}</p>
        `;

        companyContent.append(projectNode);
      }

      yearContent.append(companyNode);
    }

    timelineElement.append(yearNode);
  }

  const firstYear = timelineElement.querySelector('.timeline-year');
  if (firstYear) firstYear.classList.add('open');
};

const init = async () => {
  try {
    const [resumeResponse, detailsResponse] = await Promise.all([
      fetch('./RESUME.md'),
      fetch('./DETAILS.md')
    ]);

    const resume = await resumeResponse.text();
    const details = await detailsResponse.text();

    const jobs = parseResume(resume);
    const detailSections = parseDetails(details);
    renderTimeline(jobs, detailSections);
  } catch (error) {
    timelineElement.innerHTML = `<p>Unable to load timeline data: ${error.message}</p>`;
  }
};

init();
