import type { ResumeData } from '../types/resume';

const resumeData: ResumeData = {
  profile: {
    name: 'Khitish',
    title: 'Lead Data Scientist',
    email: 'khitish19@gmail.com',
    phone: '+971-585990461',
    linkedin: 'https://linkedin.com/in/khitish19',
    education: {
      institution: 'Indian Institute of Technology Bombay',
      degree: 'B. Tech, Aerospace Engineering',
      location: 'Mumbai, India',
      year: 2014,
    },
    bio: 'Lead Data Scientist with experience across aviation, pharma, consumer durables, and legal tech. Building practical AI systems that move from modeling to business impact.',
    tags: ['Data Science', 'AI', 'Optimization', 'Machine Learning', 'Deep Learning'],
  },

  skills: {
    languages: ['Python', 'C++', 'SQL', 'MongoDB', 'PySpark', 'PyTorch'],
    cloud: ['AWS', 'GCP'],
    interests: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Statistical Modeling',
      'Natural Language Processing (NLP)',
    ],
  },

  experience: [
    {
      company: 'CONTANGO',
      role: 'Lead Data Scientist',
      location: 'Abu Dhabi, UAE',
      dateRange: 'Sep 2025 – Current',
      startYear: 2025,
      endYear: null,
      projects: [
        {
          title: 'AI Powered Inventory Management',
          description:
            'Developed AI models to optimize the procurement of spare parts in aviation industry. Developed an end-to-end web application to manage and procure inventory in high cost aviation industry. The solution has an estimated impact of ~200 Mn AED over the next 5 years.',
          technologies: ['Tree + Linear Regression Models', 'Python Backend', 'JS Frontend'],
          details: null,
        },
      ],
    },
    {
      company: 'MCKINSEY & COMPANY',
      role: 'Sr. Data Scientist, QuantumBlack',
      location: 'Bangalore, India',
      dateRange: 'Nov 2021 – Sep 2025',
      startYear: 2021,
      endYear: 2025,
      projects: [
        {
          title: 'Anode Optimization Platform',
          description:
            'Designed and deployed an AI-powered anode optimization platform for a leading global aluminium producer, integrating data engineering, data science, and GenAI pipelines to identify critical kiln baking parameters and proactively alert maintenance planners, driving an estimated 20% reduction in anode rejection over 6 months.',
          technologies: ['Tree-based Models', 'SHAP', 'OpenAI / GenAI', 'Databricks'],
          details: null,
        },
        {
          title: 'Digital Transformation – Pharma Engagement',
          description:
            'Developed and deployed end-to-end AI solutions to create data-driven engagement plans for medical representatives. Built explainable ML models and optimization modules to generate effective call plans. The AI-driven strategy resulted in a 14% lift in engagement across two indications over 6 months.',
          technologies: ['Tree-based Models', 'SHAP', 'Mixed Integer Optimization'],
          details: `### Situation
The client, a pharmaceutical company, wanted to improve how their medical representatives (MRs) engaged with healthcare providers (HCPs). Traditionally, call plans were designed based on experience and intuition, leading to inefficiencies, missed high-value prescribers, and suboptimal resource allocation.

### Task
- Develop an end-to-end AI-driven engagement strategy for medical representatives.
- Build explainable machine learning models to predict the best HCPs to target.
- Implement an optimization module to create call plans that consider real-world constraints.
- Ensure the model was interpretable and actionable for MRs and leadership.

### Action
1. **Feature Engineering & Model Building** — Collected and processed data on patient count, prescriber network, past calls, disease-specific trends, and competitor market share. Built tree-based models (XGBoost, LightGBM) to predict HCP engagement likelihood. Used SHAP values for explainability.
2. **Optimization for Call Plan Generation** — Formulated a mixed-integer programming (MIP) model with constraints like call frequency limits, MR availability, budget, and HCP priority segmentation. Created scenario-based strategies.
3. **Deployment & Adoption** — Developed an interactive dashboard for MRs. Conducted explainability sessions to gain stakeholder trust.

### Results
✅ 14% lift in engagement across two indications
✅ Successful adoption by MRs due to transparent insights
✅ Client scaled the solution to other regions
✅ Transformed from intuition-based to data-driven engagement model`,
        },
        {
          title: 'Process Optimization – Biologics Manufacturing',
          description:
            "Developed explainable AI models to identify and optimize process parameters impacting key quality attributes at a pharma client's biologics manufacturing plant. Collaborated with stakeholders to implement changes based on model insights and achieved FDA-approved quality standards for drug approval.",
          technologies: ['Deep Learning', 'Tree-based Models', 'SHAP', 'Genetic Optimization'],
          details: `### Situation
A biopharma client needed to ensure FDA-approved quality standards for a critical biologics manufacturing process. Key quality attributes (KQAs) such as protein yield and purity were influenced by complex process parameters. Existing optimization relied heavily on domain expertise and manual experimentation.

### Task
- Develop explainable AI models to identify which process parameters impact KQAs the most.
- Optimize process conditions to ensure stable and high-quality production.
- Handle complex feature engineering challenges, such as interpolating VCD at temperature shifts.

### Action
1. **Feature Engineering & Model Development** — Aggregated and preprocessed manufacturing sensor data. Addressed feature engineering challenges such as extrapolating VCD at temperature shifts. Developed tree-based models (XGBoost) with SHAP values for interpretability.
2. **Optimization for Set Points** — Applied a genetic algorithm to determine optimal set points for critical parameters. Designed an optimization framework allowing trade-offs between different quality attributes.
3. **Stakeholder Collaboration & Implementation** — Worked closely with process engineers, quality teams, and leadership. Conducted explainability sessions.

### Results
✅ Identified key process parameters impacting KQAs
✅ Provided optimized set points for production
✅ Achieved FDA-approved quality standards and improved efficiency
✅ Enabled data-driven optimization, reducing manual experimentation`,
        },
        {
          title: 'Healthcare Provider Journey Prototype',
          description:
            "Conceptualized and developed the first prototype to understand health care providers' journey across different stages for prescribing a drug. The solution involved modeling a sequence of events using deep learning methodologies.",
          technologies: ['Deep Learning', 'RNN', 'LSTM'],
          details: null,
        },
      ],
    },
    {
      company: 'LG ELECTRONICS',
      role: 'Deputy Manager, Business Analytics & Big Data',
      location: 'Delhi, India',
      dateRange: 'Dec 2018 – Oct 2021',
      startYear: 2018,
      endYear: 2021,
      projects: [
        {
          title: 'Demand Forecasting',
          description:
            'Developed SKU level forecasting to support demand planning for multiple consumer durables. Model was an ensemble of Deep Learning based LSTM and automated modules developed on the Amazon Forecast API. The final model improved forecasting accuracy by an average of 30%.',
          technologies: ['LSTM', 'Amazon Forecast API', 'Ensemble Methods'],
          details: null,
        },
        {
          title: 'Brand Shop Video Analytics',
          description:
            'Developed in-house end-to-end prototype to generate shop-level consumer insights based on camera feeds. Utilized multiple cutting edge computer vision algorithms including Custom Object Detection (YOLO), Person Tracking and Re-Identification (Deep-Sort, AlignedReID), and Amazon Rekognition API.',
          technologies: [
            'YOLO',
            'Deep-Sort',
            'AlignedReID',
            'Amazon Rekognition',
            'Computer Vision',
          ],
          details: null,
        },
        {
          title: 'Campaign Target Planning',
          description:
            'Developed customer targeting modules to support campaigns around Indian festivals, special offers, and new product introduction. The module consists of Machine Learning based targeting (XGBoost/Google AutoML) and rules based on RFM segments.',
          technologies: ['XGBoost', 'Google AutoML', 'RFM Segmentation'],
          details: null,
        },
      ],
    },
    {
      company: 'CASEMINE, GAUGE DATA SOLUTIONS',
      role: 'Data Scientist',
      location: 'Delhi, India',
      dateRange: 'Jan 2017 – Nov 2018',
      startYear: 2017,
      endYear: 2018,
      projects: [
        {
          title: 'Search Enhancement on Legal Documents',
          description:
            "Integrated Singular Value Decomposition (SVD) with baseline Elasticsearch to improve quality of search results. The implementation significantly improved lawyers' engagement metrics with the product.",
          technologies: ['SVD', 'Elasticsearch', 'NLP'],
          details: null,
        },
        {
          title: 'Legal Case Title Identifier',
          description:
            'Implemented a Conditional Random Field (CRF) model to identify case titles (Entity Recognition) cited in legal documents which completely automated the process of manual tagging of case references.',
          technologies: ['CRF', 'Entity Recognition', 'NLP'],
          details: null,
        },
      ],
    },
    {
      company: 'IPRIMEDATA',
      role: 'Data Scientist',
      location: 'Delhi, India',
      dateRange: 'May 2016 – Dec 2016',
      startYear: 2016,
      endYear: 2016,
      projects: [
        {
          title: 'Sentiment Analysis – US Presidential Election',
          description:
            'Supported an NGO to analyse data from Twitter to assess sentiments for all the presidential candidates in 2016 election. The analysis informed them on popularity of candidates, their support geographies, and sentiments carried out by major media outlets.',
          technologies: ['Sentiment Analysis', 'Twitter API', 'NLP'],
          details: null,
        },
      ],
    },
  ],
};

export default resumeData;
