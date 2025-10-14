---
title: "01 real time cdc pipeline"
date: 2025-10-05T17:18:08+05:30
draft: true
---

### real-time cdc pipeline: postgresql → debezium → kafka → spark/risingwave → iceberg → trino

#### what it is

a production-grade change data capture (cdc) pipeline that captures row-level changes from a transactional database (such as user transactions, trades, or payments) and streams them in real time into a lakehouse architecture for analytical consumption. this pipeline enables real-time data replication and analytics without dual writes.

#### what you’ll build

- a postgresql database emulating a fintech platform with tables for users, transactions, and wallets
- a debezium connector streaming incremental changes to kafka topics
- a spark structured streaming or risingwave consumer that processes, enriches, and writes updates to apache iceberg tables partitioned by event time
- a trino or duckdb query engine to perform analytical queries over the iceberg tables
- an optional dashboard (using metabase or superset) showing near real-time metrics like profit/loss or fraud detection alerts

#### approach

- use docker compose to orchestrate postgresql, kafka, zookeeper, spark, minio (s3-compatible), and trino services
- generate continuous synthetic events using a python script (~10k/hour) simulating real-world transactional loads
- handle schema evolution dynamically so that new fields added to source tables propagate downstream without pipeline breaks
- enforce data quality through pre-ingestion and post-write validation checks (e.g., non-null user_id, positive transaction amount)

#### tech stack

- source: postgresql
- cdc: debezium
- messaging: kafka
- processing: spark structured streaming or risingwave
- storage: minio (s3) + apache iceberg
- query: trino or duckdb
- orchestration: continuous streaming, no scheduler
- infrastructure: docker compose

#### learning outcomes

- understand how to design and implement real-time data ingestion systems without introducing dual-write inconsistencies
- learn about exactly-once semantics, idempotent writes, and reprocessing mechanisms
- gain hands-on experience with lakehouse architecture (iceberg as storage abstraction)
- develop fluency in event-driven systems used in fintech, defi, and logistics
- build a portfolio-grade project replicating enterprise-grade data pipelines
