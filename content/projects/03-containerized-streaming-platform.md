---
title: "03 Containerized Streaming Platform"
date: 2025-10-05T17:18:08+05:30
draft: false
---

### containerized streaming pipeline: kafka + spark + airflow + minio

#### what it is

a fully self-contained streaming system demonstrating reproducibility and modular deployment using docker compose. it emulates the setup used by teams requiring versioned, containerized data platforms for consistent testing and delivery.

#### what you’ll build

- a docker-compose.yml file launching kafka, zookeeper, spark (master and worker), airflow, minio, and postgresql
- a kafka producer (python) sending mock payment events continuously
- a spark structured streaming job aggregating data (e.g., payments per minute)
- an airflow dag coordinating backfills and quality checks
- parquet outputs stored in minio and available for querying

#### approach

- design for local reproducibility using docker networking and persistent volumes
- include makefile commands for running, stopping, and testing services
- define container health checks and centralized logging
- integrate airflow dag scheduling and recovery for robustness

#### tech stack

- streaming: kafka, spark structured streaming
- orchestration: airflow
- storage: minio
- infrastructure: docker compose, python
- monitoring: optional prometheus and grafana

#### learning outcomes

- learn reproducible system design through containers
- understand service networking and orchestration patterns
- manage resource and dependency isolation for complex multi-service setups
- prepare for real deployment environments with minimal complexity
- showcase infrastructure-as-code mindset through docker-based reproducibility
