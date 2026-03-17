import type { ResumeData } from '../types/resume';

const resumeData: ResumeData = {
  profile: {
    name: 'Khitish',
    title: 'Lead Data Scientist',
    linkedin: 'https://linkedin.com/in/khitish19',
    education: {
      institution: 'Indian Institute of Technology Bombay',
      degree: 'B. Tech, Aerospace Engineering',
      location: 'Mumbai, India',
      year: 2014,
    },
    bio: 'Data Scientist with ~10 years of experience building production AI/ML systems with measurable business impact. My work has spanned pharmaceutical, manufacturing, consumer electronics, aviation, and legal tech domain across US, Europe, and the Middle East region.\n\nI began my career working on Natural Language Processing (NLP) and information retrieval at a legal-tech startup, then moved to LG Electronics primarily working on demand forecasting and computer vision related problems. I spent nearly four years at McKinsey\'s QuantumBlack practice, leading data science workstreams for pharmaceutical and manufacturing clients focused on integrating explainable machine learning models with optimization modules to derive actionable and practical production solution.\n\nCurrently, I am part of Data & AI function at Contango, the AI arm of Abu Dhabi Developmental Holding Company serving multiple portfolio companies to develop their AI capabilities. I am particularly focused on the intersection of traditional ML with Generative AI, LLMs, and Agentic AI, integrating these into production systems to augment decision-making and drive automation at scale.',
    tags: ['Data Scientist', '~10 Years', 'AI/ML', 'Life Science', 'Manufacturing', 'Consumer Electronics', 'Legal Tech', 'Aviation'],
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
      summary:
        'Leading the data science work-stream across aviation clients, building AI-powered solutions end-to-end — from ML models to full-stack application development.',
      projects: [
        {
          title: 'AI Powered Inventory Management',
          description:
            '~100 Mn AED projected impact over 5 years — Built an AI-powered aviation spare parts inventory optimization platform combining ML forecasting models with aviation-specific domain knowledge. Developed the end-to-end system spanning ML models (tree + linear regression), Python backend, and JS frontend.',
          technologies: ['Tree + Linear Regression Models', 'Python Backend', 'JS Frontend'],
          details: null,
        },
      ],
    },
    {
      company: 'MCKINSEY & COMPANY',
      role: 'Junior Principal, Data Science (QuantumBlack, AI by Mckinsey)',
      location: 'Bangalore, India',
      dateRange: 'Nov 2021 – Sep 2025',
      startYear: 2021,
      endYear: 2025,
      summary:
        '~4 years at QuantumBlack working for pharmaceutical and manufacturing clients across US, Europe, and Middle East. Some of the hardest problems with huge practical ramifications.',
      projects: [
        {
          title: 'Anode Optimization Platform',
          description:
            '~20% reduction in anode rejection in 6 months — Designed an AI + GenAI operations optimization platform for a global aluminium producer, integrating data engineering pipelines, ML models, and LLM-based alerting for maintenance planners.',
          technologies: ['Tree-based Models', 'SHAP', 'OpenAI / GenAI', 'Databricks'],
          details: null,
        },
        {
          title: 'Digital Transformation – Pharma Engagement',
          description:
            '~15% improvement in physician engagement — Built explainable ML models and mixed-integer optimization to generate data-driven call plans for pharmaceutical sales teams, replacing intuition-based planning across three clients.',
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
            'Achieved FDA-approved quality standards — Developed explainable AI models to identify and optimize process parameters impacting key quality attributes at a biologics manufacturing plant, using tree-based models and genetic optimization.',
          technologies: ['Tree-based Models', 'SHAP', 'Genetic Optimization'],
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
            'Prototyped deep learning sequence models (RNN/LSTM) to map how healthcare providers progress through prescribing journeys, later incorporated into the firm\'s in-house AI platform for pharmaceutical analytics.',
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
      summary:
        'Built end-to-end ML systems at scale in a large enterprise. Three years of working cross-functionally, handling messy enterprise data, and building solutions that non-technical teams actually adopt.',
      projects: [
        {
          title: 'Demand Forecasting',
          description:
            '~30% improvement in SKU-level forecasting accuracy — Deployed an ensemble of LSTM and Amazon Forecast models across multiple consumer electronics product lines to support demand planning.',
          technologies: ['LSTM', 'Amazon Forecast API', 'Ensemble Methods'],
          details: null,
        },
        {
          title: 'Brand Shop Video Analytics',
          description:
            'Built an in-house computer vision pipeline from scratch to extract consumer behavior insights from brand store camera feeds, using YOLO for detection, DeepSort for tracking, and person re-identification for cross-camera analytics.',
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
            'Developed ML-based customer targeting models for multiple festival and product launch campaigns, combining XGBoost and Google AutoML with RFM segmentation rules.',
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
      summary:
        'Dived deep into NLP at a legal-tech startup — improving search quality and automating manual workflows using ML models integrated into a full-fledged Java application.',
      projects: [
        {
          title: 'Search Enhancement on Legal Documents',
          description:
            'Improved legal document search relevance by integrating SVD with Elasticsearch, increasing lawyer engagement metrics with the product.',
          technologies: ['SVD', 'Elasticsearch', 'NLP'],
          details: null,
        },
        {
          title: 'Legal Case Title Identifier',
          description:
            'Built a CRF-based entity recognition model to automatically identify case titles in legal documents, fully automating a previously manual tagging process.',
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
      summary: null,
      projects: [
        {
          title: 'Sentiment Analysis – US Presidential Election',
          description:
            'Analysed Twitter data for an NGO to assess sentiments for presidential candidates in the 2016 election — tracking popularity, support geographies, and media outlet sentiment.',
          technologies: ['Sentiment Analysis', 'Twitter API', 'NLP'],
          details: null,
        },
      ],
    },
  ],
};

export default resumeData;
