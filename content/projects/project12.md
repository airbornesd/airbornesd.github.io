---
title: "project 12: the feature store redis ml"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 12: the "feature store" (redis + ml)

scenario: the data science team needs "user average spend" for their model, with <10ms latency.
the mission: build a feature serving layer.

- tech: redis, python api (fastapi).
- challenge: bridging offline (analytical) data to online (operational) apps.
- dev to prod:
  1. calculate "avg spend" in pyspark (project 4).
  2. push the result to redis: key=`user:123`, value=`500.20`.
  3. prod requirement: build a tiny fastapi endpoint `/get_feature/{user_id}` that hits redis.
