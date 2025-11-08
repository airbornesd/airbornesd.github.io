---
title: "senior level resources"
date: 2025-11-01T10:39:53+05:30
draft: false
---

> these are the good to known essentials--perfect for diving into projects/reading/writing/researching

### 1. foundations

- data modeling (3nf, star, snowflake, data vault)
- distributed systems (cap, partitioning, eventual consistency)
- sql vs nosql trade-offs
- acid vs base
- mini project: model and query ecommerce dataset in postgres

---

### 2. core data platform

- batch etl → airflow, dbt, pyspark
- streaming → kafka, flink
- storage → s3/gcs, delta lake, iceberg, hudi
- serving → trino, bigquery, snowflake
- orchestration → kubernetes, terraform
- practice: build airflow + dbt dag, kafka → flink → delta pipeline

---

### 3. architecture patterns

- lambda → batch + stream
- kappa → stream-first
- medallion → bronze/silver/gold
- event sourcing + cqrs → audit systems
- exercise: redraw public data platform diagrams

---

### 4. design loop

- follow c4 model → context, containers, components, code
- write 1-page design docs with trade-offs
- scheduled prompts:

  - real-time analytics pipeline
  - legacy dw → lakehouse migration
  - multi-tenant saas analytics
  - pii masking & gdpr compliance

---

### 5. tools & automation

- infrastructure as code → terraform
- ci/cd → github actions + dbt
- observability → prometheus, grafana, opentelemetry
- cost monitoring → finops tagging

---

### 6. exposure & feedback

- contribute to open-source (airflow, iceberg, dbt)
- present internal design sessions
- study production post-mortems
- shadow senior data engineers

---

### 7. recommended resources

- **books** → ddia, data warehouse toolkit
- **courses** → udacity data engineering, google cloud data architecture
- **blogs** → dataeng weekly, seattle data guy
- **case studies** → netflix, uber, doordash architectures

---

### 8. plan

- 1 → foundations + airflow/dbt
- 2 → streaming + lakehouse
- 3 → design docs + terraform + review

---

### 9. readiness checklist

- draw complete pipeline in <15 min
- deploy one real pipeline (batch/stream)
- write 2+ design docs with sla & cost metrics
- explain 3 failure modes and mitigations
