---
title: "warehousing and lakehouse"
draft: false
weight: 6
date: 2025-04-18T11:30:00+00:00
---

learn olap cubes, star/snowflake schemas, data warehouses, lakehouse, partitioning, z-order, and query engines.

## key concepts

- lakehouse architecture: raw → bronze → silver → gold
- star vs snowflake schema
- query pushdown and partition pruning
- schema evolution and snapshots
- performance tradeoffs

## explanation practice

- lakehouse zone diagram
- partitioning strategy
- query pushdown example

## projects

### 1. data lakehouse pipeline

- kafka → iceberg → trino → superset viz

### 2. warehouse benchmarking

- redshift vs bigquery vs trino latency comparison

### 3. schema evolution demo

- dynamic column add/drop in iceberg

### 4. custom partitioning simulator

- show read-time differences
