---
title: "experience"
date: 2025-10-04T12:08:58+05:30
unlisted: true
_build:
  list: false
  render: true
---

## professional summary

- i am a data engineer with 3 years of experience in fintech.
- my focus has been on creating reliable aws-based data platforms that help with important financial tasks like tracking profits and losses, managing subscriptions, handling risks, processing payments, and managing digital wallets.
- at two startups, i was the first person to set up these systems, which meant i had to design everything myself.
- i used tools like kafka for real-time data, spark for processing, airflow for scheduling jobs, and tableau for visualizations.
- my work has helped companies make better decisions, detect fraud, and improve efficiency, leading to real business benefits like faster operations and more revenue.

---

## senior data engineer, july 2024 – present

### (founding data engineer) at blazpay ai

**company overview**

- blazpay ai is an ai-driven fintech platform that helps with portfolio management, payments, and cross-border financial services.
- it uses smart tools for analytics, alerts, and integrations to make finance easier and more secure.

**key responsibilities and projects**

- as the founding data engineer, i was responsible for building the entire data system from nothing.
- this included collecting data, processing it, storing it, and making it useful for the business.

**project 1: building the aws data platform from scratch**

- **what i did**:

  - i set up the system to collect events (like user actions or transactions) from sources like dynamodb (a fast database) and sftp (a secure file transfer).
  - i used tools like kinesis, firehose, and kafka to bring in the data quickly.
  - every day, the system handles over 1 million events.

- **technical details**:

  - i processed this data using spark on glue jobs.
  - this allowed for quick transformations, like analyzing trading sessions, checking for fraud, and executing trades, all with very low delay (less than 150 milliseconds).
  - this made dashboards update almost instantly.

- **impact**:

  - this enabled real-time analytics for trades and helped detect fraud early, which is crucial in fintech to prevent losses.

- **challenges**:

  - starting from zero meant deciding on the best tools without any existing setup.
  - i had to ensure it could scale as the user base grew to 50,000 daily active users (dau).

- **what i learned**:
  - i gained experience in designing systems that handle high volumes of data in real time.
  - it taught me the importance of low-latency processing in financial apps where seconds matter.

**project 2: automating etl pipelines**

- **what i did**:

  - i used airflow and glue to automate the data workflows.
  - this included checks for data quality, monitoring for issues, automatic retries if something failed, and reconciliation (matching data from different sources).

- **technical details**:

  - these automations reduced support tickets by 65%, meaning fewer manual fixes were needed.

- **impact**:

  - it improved features like subscriptions (recurring payments) and chat-and-pay (ai-based payment tools), making the platform more user-friendly and boosting engagement.

- **challenges**:

  - integrating with gamification features (like daily tasks to encourage users) required careful planning to keep data flowing smoothly.

- **what i learned**:
  - automation is key to efficiency.
  - i learned how to build reliable pipelines that run without constant oversight, saving time for the team.

**project 3: storage and serving layer design**

- **what i did**:

  - i organized data storage in s3 buckets with zones for raw, processed, and curated data.
  - for queries, i used redshift and athena.
  - i also created tableau dashboards for investors to see key metrics.

- **technical details**:

  - this supported monitoring kpis like profit/loss, delinquent accounts (late payments), bankruptcy risks, and dormant accounts (inactive users).

- **impact**:

  - these dashboards helped during investor meetings by showing clear financial health.

- **challenges**:

  - ensuring data was secure and compliant with fintech regulations.

- **what i learned**:
  - proper data organization makes analysis faster and more accurate.
  - i understood how zoning data helps in managing large datasets without confusion.

**project 4: ci/cd tooling development**

- **what i did**:

  - i built custom tools in python for continuous integration and deployment (ci/cd) of the data pipelines.

- **technical details**:

  - this reduced deployment time by 40%, meaning updates could go live faster.

- **impact**:

  - it aligned the technical work with business goals, like revenue growth, and helped in seed funding by proving the system's scalability.

- **challenges**:

  - coordinating with the ceo and other teams to prioritize features.

- **what i learned**:
  - leadership in decision-making and how technical choices directly affect business outcomes, like funding rounds.

**overall lessons from blazpay ai**

- working here strengthened my skills in ai-integrated fintech.
- i learned to balance speed and reliability in data systems, especially for real-time features.
- being the first engineer built my ownership mindset and taught me cross-team collaboration.

---

## data engineer, december 2022 – june 2024

### (software engineer – data) at bks mygold

**company overview**

- bks mygold is a fintech platform for gold leasing and investments.
- it offers secure management of digital and physical gold assets with guaranteed growth, stored in regulated vaults.
- it connects traditional finance with modern digital tools.

**key responsibilities and projects**

- as the first and only data engineer, i modernized their old systems into a more efficient etl and analytics setup.
- i handled everything from data collection to reporting.

**project 1: modernizing the etl stack**

- **what i did**:

  - i built batch etl pipelines using python, sql, aws glue, and lambda.
  - data came from rds databases (transactional records), payment gateway logs, and customer onboarding forms.

- **technical details**:

  - i optimized these jobs to cut processing time by 40%, handling tasks like tracking price history, subscription flows, gold investment plans (gip), and finance dashboards.

- **impact**:

  - this made daily operations smoother and more accurate for financial reporting.

- **challenges**:

  - dealing with varied data sources that weren't standardized.

- **what i learned**:
  - optimization techniques, like tuning queries and jobs, to handle batch processing efficiently.

**project 2: implementing real-time streaming**

- **what i did**:

  - i added kafka and firehose for real-time monitoring of transactions.

- **technical details**:

  - this powered machine learning models for fraud detection with sub-minute delays.
  - i integrated streams and cdc (change data capture) with dynamodb and s3 to manage delinquent payments, dormant accounts, and overall risks.

- **impact**:

  - it provided quick insights into notifications, authentication, wallet integrations, and marketplace events (like bids and buys).

- **challenges**:

  - ensuring low latency while maintaining data accuracy in a secure environment.

- **what i learned**:
  - the value of streaming data in fintech for immediate risk management, like spotting fraud before it escalates.

**project 3: data warehousing migration**

- **what i did**:

  - i moved reporting to aws redshift and designed star-schema models for data on transactions, customers, and wallets.

- **technical details**:

  - this improved query speeds by about 50%, making it easier to analyze large datasets.

- **impact**:

  - analysts could run reports faster without slowdowns.

- **challenges**:

  - migrating without disrupting ongoing operations.

- **what i learned**:
  - data modeling basics, like star schemas, which organize data for better performance in analytics.

**project 4: building dashboards and analytics**

- **what i did**:

  - i created tableau dashboards for things like kyc (know your customer) funnels, revenue insights, and gold redemption trends.

- **technical details**:

  - these provided near real-time access for non-technical teams in product and finance.

- **impact**:

  - it helped teams make data-driven decisions quickly.

- **challenges**:

  - making complex data simple and visual for everyone.

- **what i learned**:
  - visualization tools bridge the gap between tech and business, improving communication.

**project 5: automating ci/cd**

- **what i did**:

  - i set up ci/cd using git and jenkins for deploying pipelines.

- **technical details**:

  - this reduced manual work and sped up releases, supporting secure features like scan-and-pay and subscription renewals.

- **impact**:

  - created a stable foundation for ml analytics and investor reports that still runs today.

- **challenges**:

  - owning the entire system as the only engineer.

- **what i learned**:
  - end-to-end ownership builds resilience and deep understanding of systems.

**overall lessons from bks mygold**

- this role was my entry into fintech data engineering.
- i learned to modernize legacy systems and the importance of security in asset management.
- it taught me self-reliance and how data drives financial decisions.

---

## skills overview

- technical: building etl pipelines, real-time streaming with kafka, data processing with spark, orchestration with airflow, storage in s3/redshift, and visualizations in tableau.
- also: ci/cd with python, git, and jenkins.
- fintech domains: handling profit/loss, subscriptions, risk (fraud, delinquent accounts), wallets, payments, kpis, and real-time analytics.
- programming: proficient in python and sql.
- architectures: event-driven systems, star-schema modeling, and ml pipelines.

---

## conclusion

- my experience as a data engineer has been about creating value through data in fintech.
- from building systems that detect fraud in real time to dashboards that guide business decisions, i've learned that good data engineering combines technical skills with business understanding.
- these roles have prepared me for larger challenges in mncs, where scalability and impact are key.
- i'm excited to bring this expertise to new opportunities.
