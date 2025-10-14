---
title: "monitoring and governance"
draft: false
weight: 7
date: 2025-04-18T11:30:00+00:00
---

focus on metrics, logs, tracing, slas, data quality, observability, and governance.

## key concepts

- prometheus, grafana metrics
- elk stack: elasticsearch, logstash, kibana
- distributed tracing: jaeger/zipkin
- data cataloging, lineage, schema registry
- role-based access control

## explanation practice

- metrics dashboard diagram
- data lineage flowchart
- alerting example

## projects

### 1. airflow monitoring dashboard

- extract metadata → grafana metrics

### 2. etl logs ingestion to elk

- pipeline health monitoring

### 3. alerting system

- prometheus + slack webhook

### 4. custom pipeline health checker

- cron job validating data freshness
