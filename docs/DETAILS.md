Digital transformation for global pharmaceutical companies:
Developed and deployed end-to-end AI solutions to create data-driven engagement plans
for medical representatives. This involved building explainable ML models and optimization modules to generate
effective call plans. The AI-driven strategy resulted in a 14% lift in engagement across two indications over a period
of 6 months for one client.

### **Situation**

The client, a pharmaceutical company, wanted to improve how their medical representatives (MRs) engaged with healthcare providers (HCPs). Traditionally, call plans were designed based on **experience and intuition**, leading to **inefficiencies, missed high-value prescribers, and suboptimal resource allocation**.

With increasing competition and the need for **data-driven decision-making**, the client wanted an **AI-powered solution** to optimize call plans and improve engagement.

### **Task**

- Develop an **end-to-end AI-driven engagement strategy** for medical representatives.
- Build **explainable machine learning models** to predict the best HCPs to target.
- Implement **an optimization module** to create call plans that consider real-world constraints.
- Ensure the model was **interpretable and actionable** for MRs and leadership.
- Measure success by tracking **engagement lift and market share improvements**.

### **Action**

1. **Feature Engineering & Model Building**
    - Collected and processed data on **patient count, prescriber network, past calls, disease-specific trends, and competitor market share**.
    - Built **tree-based models (XGBoost, LightGBM)** to predict **HCP engagement likelihood**.
    - Used **SHAP values** to make model outputs explainable and transparent for MRs.
2. **Optimization for Call Plan Generation**
    - Formulated a **mixed-integer programming (MIP) model** to generate call plans.
    - Considered constraints like **call frequency limits, MR availability, budget, and HCP priority segmentation**.
    - Created **scenario-based strategies** (aggressive growth, steady engagement, and resource-constrained approaches).
3. **Deployment & Adoption**
    - Developed an **interactive dashboard** for MRs to view and adjust AI-driven call plans.
    - Conducted **explainability sessions** to gain stakeholder trust and encourage adoption.
    - Worked with leadership to align the AI strategy with **business priorities and market expansion plans**.

✅ **14% lift in engagement** across two indications.

✅ **Successful adoption** by MRs due to transparent insights.

✅ Client **scaled the solution** to other regions.

✅ Transformed from **intuition-based** to **data-driven** engagement model.

---------------------------------

### Process optimization in biologics manufacturing

Process optimization in biologics manufacturing- Developed explainable AI models to identify and optimize process parameters impacting key quality attributes at a pharma client’s biologics manufacturing plant. Collaborated with stakeholders to implement changes based on model insights and achieved FDA-approved quality standards for drug approval.

### **Situation**

A **biopharma client** needed to ensure **FDA-approved quality standards** for a critical biologics manufacturing process. The challenge was that **key quality attributes (KQAs)** such as **protein yield and purity** were influenced by **complex process parameters** (e.g., cell culture density, pH, temperature, glucose levels).

Existing process optimization relied heavily on **domain expertise and manual experimentation**, making it **time-consuming, inconsistent, and difficult to scale**.

---

### **Task**

- **Develop explainable AI models** to identify which process parameters impact KQAs the most.
- **Optimize process conditions** to ensure stable and high-quality production.
- Provide **interpretable recommendations** so manufacturing teams could confidently implement changes.
- Handle **complex feature engineering challenges**, such as interpolating VCD (Viable Cell Density) at temperature shifts.

---

### **Action**

1. **Feature Engineering & Model Development**
    - **Aggregated and preprocessed manufacturing sensor data** (e.g., pH, temperature, glucose levels, VCD).
    - Addressed **feature engineering challenges**, such as extrapolating VCD at temperature shifts to create meaningful features.
    - Developed **tree-based models (XGBoost)** to predict the impact of process parameters on KQAs.
    - Used **SHAP values** to make model outputs interpretable and identify key drivers of quality.
2. **Optimization for Set Points**
    - Applied a **genetic algorithm** to determine optimal set points for critical parameters (e.g., VCD at temp shift, pH shift).
    - Designed an optimization framework that allowed for **trade-offs between different quality attributes** while ensuring feasibility for implementation.
    - Created **scenarios for different manufacturing conditions** to support decision-making.
3. **Stakeholder Collaboration & Implementation**
    - Worked closely with **process engineers, quality teams, and leadership** to align AI insights with domain expertise.
    - Conducted **explainability sessions** to build confidence in the model’s recommendations.
    - Supported implementation and monitoring of **optimized set points in live manufacturing runs**.

✅ **Identified key process parameters** impacting KQAs.

✅ **Provided optimized set points** for production.

✅ **Achieved FDA-approved quality standards** and improved efficiency.

✅ **Enabled data-driven optimization**, reducing manual experimentation.