---
title: "ml pipelines preparation"
draft: true
weight: 8
date: 2025-04-18T11:30:00+00:00
---

focus on feature engineering, feature stores, offline/online sync, model training and serving, and drift detection.

## key concepts

- feature engineering and feature store (feast)
- offline/online sync for ml pipelines
- retraining workflow
- drift detection and monitoring
- data validation for ml features

## explanation practice

- feature store flow diagram
- retraining dag diagram
- drift detection illustration

## projects

### 1. feature pipeline

- extract from postgres → clean → feast store

### 2. retraining dag in airflow

- automated scheduled model retrain

### 3. feature drift detection tool

- compare distributions and flag anomalies
