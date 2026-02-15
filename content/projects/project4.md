---
title: "project 4: the billion row optimization"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 4: the "billion row" optimization

scenario: a nightly reporting job is taking 6 hours to run. you need to cut it to 20 minutes.
the mission: process a massive dataset (generate 1gb of dummy csv data) and optimize the write speed.

- tech: pyspark, parquet, snappy compression.
- challenge: understanding "skew" and "shuffling."
- dev to prod:
  1. generate a massive csv with random sales data.
  2. write a naive pyspark job to `group by` city and `sum` sales. time it.
  3. prod requirement: optimize it using `partitionby('city')`, `repartition()`, and converting to parquet. prove the speedup (e.g., "reduced time by 80%").
