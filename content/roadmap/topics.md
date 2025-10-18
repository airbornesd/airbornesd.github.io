---
title: "topics"
date: 2025-10-17T21:06:55+05:30
weight: 2
draft: false
---

> build iteratively: start with mini-projects to connect foundational skills, then layer in scalability and observability. adapt to your ideas—quantity builds momentum, quality emerges from iteration. aim for 10+ projects; document trade-offs and metrics in readmes for portfolio depth.

- core programming & algorithms

  **skills:** python, data structures, algorithms, problem solving, leetcode patterns

  **purpose:** build efficient code for data manipulation and scalable solutions.

  **target:** solve 80+ problems covering arrays, trees, graphs, and dynamic programming; optimize a python script for o(n) time.

- foundational

  **skills:** sql, linux, git, data modelling, unix shells

  **purpose:** core tooling & thinking needed to manipulate, store, and query data.

  **target:** implement 5 normalized schemas, write 20 sql queries, and automate tasks with shell scripts.

- cloud platforms

  **skills:** aws/gcp/azure, s3/bigquery, iam, serverless (lambda/cloud functions)

  **purpose:** leverage cloud services for scalable storage and compute without vendor lock-in.

  **target:** deploy an etl pipeline to one cloud using free tier and query 1tb dataset under 10s.

- ingestion & storage

  **skills:** apis, batch jobs, s3, object storage, parquet, partitioning

  **purpose:** reliably bring data into persistent storage with cost- and query-efficient layout.

  **target:** implement an idempotent api → s3 ingestion and demonstrate partition pruning on queries.

- orchestration & automation

  **skills:** airflow, dagster, cron, kubernetes jobs, ci/cd

  **purpose:** schedule, monitor, and recover data workflows reproducibly.

  **target:** build a dag that retries, backfills, and exposes basic metrics; ci run succeeds.

- transformation & modeling

  **skills:** dbt, sql modeling, dimension tables, slowly changing dimensions

  **purpose:** convert raw data into tested, documented analytics models.

  **target:** author dbt models with tests and pass dbt test in ci for a sample mart.

- big data processing

  **skills:** spark (batch/pyspark), hadoop basics, distributed computing

  **purpose:** handle large-scale batch transformations efficiently.

  **target:** process a 1gb dataset with spark sql joins and aggregations, optimizing for shuffle reduction.

- streaming & realtime

  **skills:** kafka, spark structured streaming, flink, stream joins, windowing

  **purpose:** process event streams with bounded latency and correct window semantics.

  **target:** implement a sliding-window aggregation with late-data handling and measure p95 latency.

- warehousing & lakehouse

  **skills:** redshift/bigquery/snowflake, iceberg/delta, trino/presto

  **purpose:** provide fast analytical queries over large datasets with acid/partitioning guarantees.

  **target:** benchmark a representative query and report latency and scanned bytes.

- observability & data quality

  **skills:** prometheus, grafana, great expectations, data contracts, lineage

  **purpose:** detect, alert, and explain data issues; ensure contractual guarantees.

  **target:** add 5 expectations/tests and a dashboard that alerts on failures.

- data governance & security

  **skills:** rbac/iam, encryption, compliance (gdpr), data cataloging, ethics

  **purpose:** manage access, privacy, and ethical use of data at scale.

  **target:** implement role-based access for a pipeline and audit lineage for a dataset.

- infra & scale

  **skills:** terraform, docker, k8s, cost optimisation, resource management

  **purpose:** provision reproducible infra and control access/costs at scale.

  **target:** codify infra for one pipeline with terraform + a cost estimate and iam policy.

- system design

  **skills:** architecture patterns, scalability, trade-offs, diagramming

  **purpose:** design robust, end-to-end data systems for real-world scenarios.

  **target:** diagram and document 10 designs (e.g., data lake, realtime pipeline) with bottlenecks addressed.

- ml & feature engineering

  **skills:** feast, mlflow, offline-online parity, model monitoring

  **purpose:** produce stable features and serve models with consistency between training and serving.

  **target:** build a simple feature pipeline + online store and show offline-online parity checks.
