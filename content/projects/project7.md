---
title: "project 7: the data quality firewall"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 7: the "data quality" firewall

scenario: the ceo's dashboard showed "nan" for total revenue. panic ensues.
the mission: implement a "circuit breaker" that stops bad data before it hits the dashboard.

- tech: great expectations (gx) or soda core.
- challenge: defining strict rules for data quality.
- dev to prod:
  1. create a gx checkpoint: `expect_column_values_to_not_be_null("revenue")`.
  2. integrate this into your pyspark script from project 4.
  3. prod requirement: if validation fails, send a slack alert and fail the airflow task immediately.
