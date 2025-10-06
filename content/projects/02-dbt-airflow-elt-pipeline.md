---
title: "02 dbt airflow elt pipeline"
date: 2025-10-05T17:18:08+05:30
draft: false
---

### end-to-end elt pipeline with dbt, airflow, and soda (on duckdb or snowflake)

#### what it is

a modern extract-load-transform (elt) data workflow that moves raw data into a warehouse, applies modular dbt transformations, enforces data quality, and generates documentation and dashboards. this setup mirrors analytics engineering standards used in production teams.

#### what you’ll build

- ingestion of mock fintech datasets (users, kyc, transactions) into local or s3 storage
- airflow dags to orchestrate workflows from raw → staging → marts
- dbt models implementing transformations with a star schema (e.g., dim_user, fct_transaction)
- soda checks ensuring data validity (e.g., transaction amount > 0)
- dbt docs with lineage tracking and metabase dashboard for kpi visualization (revenue, daily active users, credit risk)

#### approach

- use duckdb as a lightweight analytical warehouse for simplicity and speed
- configure airflow locally to trigger dbt transformations and soda checks in sequence
- automate ci/cd testing of transformations using github actions
- document transformation logic, lineage, and business rules through dbt yaml configs

#### tech stack

- orchestration: airflow
- transformation: dbt core
- data quality: soda core
- warehouse: duckdb or snowflake
- storage: local filesystem or minio
- ci/cd: github actions
- bi: metabase or superset

#### learning outcomes

- learn modular, testable, and documented elt design practices
- understand analytical data modeling (fact/dimension schemas, conformed dimensions)
- implement data reliability and validation at scale
- practice automation and observability principles
- create an auditable, production-ready analytics layer suitable for enterprise settings
