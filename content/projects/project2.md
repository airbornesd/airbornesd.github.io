---
title: "project 2: the fraud detection sliding window"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 2: the "fraud detection" sliding window

scenario: "we lost $50k in a chargeback scam." you need to detect users who make >5 transactions in 10 seconds.
the mission: write a stateful stream processor.

- tech: faust (python streaming) or pyspark streaming, redis.
- challenge: implement a "sliding window" aggregation.
- dev to prod:
  1. read from the project 1 kafka topic.
  2. use redis to store a rolling window of transaction counts per `user_id`.
  3. trigger an alert (print to console/slack webhook) if threshold > 5.
  4. prod requirement: handle "out of order" events (events arriving late).
