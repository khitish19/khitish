export interface Education {
  institution: string;
  degree: string;
  location: string;
  year: number;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  education: Education;
  bio: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  details: string | null;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  dateRange: string;
  startYear: number;
  endYear: number | null;
  projects: Project[];
}

export interface Skills {
  languages: string[];
  cloud: string[];
  interests: string[];
}

export interface ResumeData {
  profile: Profile;
  skills: Skills;
  experience: Experience[];
}
