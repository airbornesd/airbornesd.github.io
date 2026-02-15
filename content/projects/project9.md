---
title: "project 9: the idempotent backfill"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 9: the "idempotent" backfill

scenario: the pipeline broke for 3 days while you were on holiday. you need to re-run it without creating duplicates.
the mission: retrofit your project 4 pipeline to be fully idempotent.

- tech: airflow, sql (`merge` / `upsert`).
- challenge: ensuring `run 1` + `run 1` = `run 1` (not `2x data`).
- dev to prod:
  1. modify your sql logic to delete existing data for the `execution_date` before inserting.
  2. prod requirement: test this by running the same dag run 3 times. the row count in the db must remain constant.
