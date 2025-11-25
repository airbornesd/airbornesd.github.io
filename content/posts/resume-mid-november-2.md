---
title: "resume mid november 2"
date: 2025-11-24T11:05:53+05:30
draft: false
---

## summary

founding data engineer with expertise in building **real-time financial data platforms** and **lakehouse architectures** from scratch. proven track record at **blazpay labs (funded)** and **bks my gold**, delivering low-latency (<150ms) pipelines that power **ml training** and fraud detection systems. skilled in **python, sql, apache airflow, kafka, and tableau** for high-throughput fintech environments.

## experience

**blazpay labs** | founding data engineer | _jul 2024 – present_
_a venture-backed crypto-fintech building ai-driven perpetual trading and cross-chain payment rails._

- **architected the "blazai" real-time data engine:** built a streaming pipeline using **kafka and spark structured streaming** to ingest price feeds from 3 cexs (binance, coinbase) and 2 dexs. reduced latency from 2s to **150ms**, enabling the ai model to execute arbitrage trades profitably.
- **ml data pipeline & feature engineering:** developed automated workflows to clean, tokenize, and vectorise historical chat and transaction data. created a "feature store" in s3 that reduced **model training time** (vertex ai) by 40% and improved intent recognition accuracy for the crypto-bot.
- **built the cross-chain settlement warehouse:** designed a **star-schema** in **aws redshift** to consolidate transaction data from ethereum, bsc, and polygon chains. enabled the finance team to reconcile **$1.2m+ in presale assets** with 100% accuracy.
- **automated investor reporting (ci/cd):** replaced manual sql scripts with **apache airflow** dags to generate daily p&l and user acquisition dashboards. reduced reporting turnaround time by **65%**.

**bks my gold** | data engineer (formerly software engineer - data) | _dec 2022 – jun 2024_
_india's first physical/digital gold leasing platform._

- **developed fraud detection pipelines:** engineered a **change data capture (cdc)** pipeline using **debezium and kafka** to monitor wallet transactions. fed real-time behavioral data into ml models that flagged suspicious "leasing-to-redemption" patterns, reducing potential fraud by **25%**.
- **modernized the legacy etl stack:** migrated fragile cron-based sql jobs to modular **python (pandas/boto3)** scripts orchestrated on aws lambda. improved data availability sla from 85% to **99.9%**.
- **enterprise bi & analytics (tableau):** designed and deployed interactive **tableau dashboards** for the executive and risk teams. created visualizations for "daily active users" and "gold redemption trends," enabling stakeholders to make data-driven decisions without running sql queries.
- **customer 360 data modeling:** built a unified customer view in **postgresql** by integrating kyc data and payment logs. empowered the marketing team to launch targeted "gold yield" campaigns.

## skills

- **languages:** python (pandas, pyspark, polars), sql (advanced window functions, ctes), bash.
- **core engineering:** data modeling (kimball/star schema), etl/elt design, distributed systems.
- **tools & infrastructure:** apache airflow, apache kafka, spark, aws (redshift, glue, s3, lambda), tableau, docker.
- **domain knowledge:** fintech (ledgers, double-entry), crypto (defi, chains), real-time analytics.
