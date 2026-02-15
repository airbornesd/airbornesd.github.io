---
title: "project 5: the schema evolution handler"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 5: the "schema evolution" handler

scenario: the upstream dev team added a new column "discount_code" without telling you. your pipeline crashed.
the mission: build a pipeline that handles "schema drift" automatically.

- tech: delta lake (on local disk) or apache iceberg.
- challenge: merging new schema into old schema without downtime.
- dev to prod:
  1. ingest project 1 data into a delta table.
  2. simulate a source change (add a column).
  3. write a script using `mergeschema` options to handle the update gracefully.
  4. prod requirement: implement a "quarantine" table for rows that completely fail validation.
