---
title: "etl and orchestration"
draft: true
weight: 3
date: 2025-04-18T11:30:00+00:00
---

learn batch vs incremental loading, data quality, file formats, pandas/spark transformation, and workflow orchestration using airflow/luigi/dagster.

## key concepts

- etl vs elt
- airflow dag architecture
- data flow: source → raw → staging → curated
- schema validation and idempotency
- retries, backoff, monitoring

## explanation practice

- dag structure on whiteboard
- data lineage diagram
- incremental load visualization

## projects

### 1. weather pipeline

- api ingestion → s3 → clean parquet → postgres
- airflow orchestration + alerts

### 2. cdc pipeline

- postgres → debezium → kafka → spark → iceberg

### 3. data quality library

- python mini “great expectations”

### 4. data profiler tool

- summarize stats, nulls, unique counts
