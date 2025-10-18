---
title: "projects"
date: 2025-10-17T20:55:48+05:30
weight: 1
draft: false
---

> it’s better to modify the project in terms of connectivity. as you proceed further, connections will start to establish and the dots will join together. it’s better to build on your own ideas rather than strictly following this roadmap. try to build as many projects as possible — have faith, it will work out in the end. sometimes having quantity is better than having quality.

### level 0 — beginner mini-projects (ties to: core programming & algorithms, foundational)

**skills reinforced:** sql, python/pandas, git, basic data modelling, unix shells.

1. dataset cleaning & etl notebook (mini)

   - **objective:** ingest messy csv, clean/validate, load to relational table with tests—practice dsa for efficient parsing.
   - **tech stack:** python (pandas/numpy), postgresql (docker), pytest, github.
   - **steps:** eda → cleaning functions (handle duplicates via hashing) → unit tests → load to postgres → 5 sql validations.
   - **deliverables:** ipynb, tests, docker-compose, readme, sql queries.
   - **acceptance:** single-script run; tests pass; query row counts match expectations.
   - **blog idea:** "pandas for reproducible cleaning: from csv chaos to tested tables".
   - **examples:**
     - github commits csv: parse timestamps, dedup merges—sql: commits/day, top repos.
     - retail sales: normalize currency, impute ids—check referential integrity.

2. api-to-db pipeline (mini)

   - **objective:** fetch public api, persist normalized schema daily—add shell script for cron.
   - **tech stack:** requests, cron/docker, postgres.
   - **steps:** fetch → idempotency key (hash) → upsert → log errors.
   - **deliverables:** script, docker-compose, sample data, readme.
   - **acceptance:** idempotent; no duplicates on re-run.
   - **blog idea:** "idempotent api ingestion: shell + python basics".
   - **examples:**
     - weather api: city/date key—upsert temps.
     - transport api: normalize stops/arrivals—integrity checks.

### level 1 — intermediate projects (ties to: cloud platforms, ingestion & storage, orchestration & automation, transformation & modeling)

**skills reinforced:** airflow, s3/bigquery, dbt, basic aws/gcp, parquet partitioning.

1. data lake zones + dbt transformations

   - **objective:** raw → staging → curated on s3/bigquery; dbt for models/tests—partition for cost efficiency.
   - **tech stack:** s3/bigquery (free tier), dbt core, python, aws cli/gcp sdk.
   - **steps:** zone layout → ingest to raw → dbt staging/marts → tests for nulls/uniques.
   - **deliverables:** dbt project, parquet samples, readme (partitioning notes), cost estimate.
   - **acceptance:** dbt run/tests pass; pruned query scans <50% full dataset.
   - **blog idea:** "medallion architecture: dbt safety on cloud lakes".
   - **examples:**
     - ecommerce orders: raw csv → parquet/date-partitioned staging → fact_orders + dim_customers.
     - iot sensors: json flatten → hourly metrics; nested handling.

2. airflow dag for nightly orchestrations

   - **objective:** ingest/transform/test nightly—add ci/cd stub, xcom for data passing.
   - **tech stack:** airflow (docker), python operators, postgres, basic alerting (logs/slack).
   - **steps:** dag design → tasks (ingest/transform/test) → retries/backfill → scheduler run.
   - **deliverables:** dags, docker-compose, sample data, readme.
   - **acceptance:** e2e success; failure alerts; backfill consistent.
   - **blog idea:** "airflow for etl: orchestration with retries".
   - **examples:**
     - stock prices: fetch → raw store → quality test → notify.
     - monthly aggregates: branch for daily/monthly.

### level 2 — advanced projects (ties to: big data processing, streaming & realtime, warehousing & lakehouse, observability & data quality)

**skills reinforced:** kafka, spark/flink, cdc (debezium), iceberg/trino, great expectations, grafana.

1. realtime payments simulator + fraud detection (streaming)

   - **objective:** simulate events → kafka → spark/flink processing → alerts to db/s3; add quality checks.
   - **tech stack:** kafka (docker), pyspark/flink, timescaledb, grafana.
   - **steps:** simulator → producer → window agg/joins → sink + dashboard; inject/test fraud.
   - **deliverables:** docker-compose, job code, test harness, readme (latency metrics).
   - **acceptance:** 1000 eps sustained; alerts for 90%+ fraud detection.
   - **blog idea:** "streaming fraud: windows, latency, and observability".
   - **examples:**
     - rule-based: velocity/z-score—threshold alerts.
     - ml anomaly: isolation forest—feature importance.

2. cdc pipeline: postgresql → debezium → kafka → iceberg/trino

   - **objective:** row-level sync to analytical table; handle scd, schema evolution.
   - **tech stack:** postgres, debezium, kafka, iceberg (s3), trino.
   - **steps:** logical replication → connector → consumer to iceberg → trino queries.
   - **deliverables:** diagram, configs, data flows, readme (scd handling).
   - **acceptance:** inserts/updates/deletes reflected; history queries correct.
   - **blog idea:** "cdc to lakehouse: debezium + iceberg for sync".
   - **examples:**
     - users scd type-2: new versions on update.
     - inventory: schema evolution test—no downtime.

### level 3 — expert / production parity (ties to: data governance & security, infra & scale, system design, ml & feature engineering)

**skills reinforced:** k8s/terraform, feast/mlflow, data mesh/contracts, cost opt, rbac.

1. feature store + realtime scoring (production parity)

   - **objective:** batch/stream features → store/serve for scoring; ensure parity, monitor drift.
   - **tech stack:** feast/spark, kafka, fastapi, mlflow, docker/k8s.
   - **steps:** feature design → batch/stream pipelines → registry/train → api inference → drift dashboard.
   - **deliverables:** registry, mlflow artifacts, api, monitoring.
   - **acceptance:** <200ms latency; offline/online parity <1% diff.
   - **blog idea:** "feature parity: batch-stream consistency in mlops".
   - **examples:**
     - user-risk: windowed aggs/decay—backtest auc.
     - homemade kv: redis online + postgres offline.

2. data mesh demo: multi-domain pipelines + governance

   - **objective:** 3 domains with pipelines/catalog/contracts; cross-analytics with security.
   - **tech stack:** kafka/domains, terraform/iam, dbt packages, postgres catalog.
   - **steps:** domain schemas/contracts → ingest/transforms → publish → cross joins.
   - **deliverables:** packages, contracts, checklist, readme (trade-offs/costs).
   - **acceptance:** cross-query correct; contract tests block breaks.
   - **blog idea:** "data mesh starter: domains, contracts, and value".
   - **examples:**
     - payments/users/marketing → ltv view; freshness guarantees.
     - schema break sim: test failure on change.

### additional cross-cutting projects (ties to: observability, infra, system design)

- **open-source contribution (airflow/dbt/spark)**

  - examples: doc fix with example; plugin unit tests—readme on codebase nav.

- **log analytics (elk alt)**

  - examples: nginx → kafka → flink parse → elasticsearch/kibana; p95/error dashboards.

- **distributed data quality framework**

  - examples: ge in airflow—post-ingestion expectations to prometheus; dbt+ge lineage/stats.

- **multi-cloud cost optimization**

  - examples: billing align → dbt cost models; spike anomaly with decompose/threshold.

- **realtime/crypto trading pipeline**

  - examples: api → kafka → spark ma crossover → timescaledb; pnl backtest.

- **system design capstone**
  - **objective:** end-to-end scalable pipeline (e.g., customer 360)—integrate 5+ topics.
  - **tech stack:** terraform/k8s, airflow/kafka/spark/dbt/iceberg, grafana/mlflow.
  - **steps:** design (diagrams/trade-offs) → build mini-prod → benchmark/secure.
  - **deliverables:** excalidraw, code/deploy, metrics report.
  - **acceptance:** handles 10x load; costs < threshold; rbac enforced.
  - **blog idea:** "full-stack de system: from design to deploy".
