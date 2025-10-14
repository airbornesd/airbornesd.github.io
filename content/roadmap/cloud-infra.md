---
title: "cloud infrastructure"
draft: false
weight: 4
date: 2025-04-18T11:30:00+00:00
---

cover aws, gcp, azure services, docker, kubernetes, infra as code, ci/cd pipelines.

## key concepts

- s3, ec2, lambda, glue, emr
- bigquery, dataflow, data factory
- docker container layers, k8s pods/services
- ci/cd pipelines and automation
- iam, role-based access control

## explanation practice

- cloud diagram for airflow pipeline
- docker image layering
- k8s pod lifecycle

## projects

### 1. airflow on aws ec2

- s3 + rds backend orchestration

### 2. lambda-based etl

- small batch load automation

### 3. spark job on emr

- read parquet from s3, process

### 4. github actions ci/cd

- trigger airflow or etl jobs

### 5. dockerize pipelines

- docker-compose or kubernetes deployment
