---
title: "project 6: the gdpr deletion system"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 6: the "gdpr" deletion system

scenario: a user exercises their "right to be forgotten." you must delete their data from all parquet files in the lake.
the mission: efficiently find and delete a specific key from a petabyte-scale (simulated) lake.

- tech: pyspark, delta lake `vacuum`.
- challenge: doing this without rewriting the entire dataset.
- dev to prod:
  1. use delta lake's `delete` command: `deltatable.forpath(...).delete("userid = '123'")`.
  2. run `vacuum` to physically remove the old files.
  3. prod requirement: log an audit trail of exactly what was deleted and when.
