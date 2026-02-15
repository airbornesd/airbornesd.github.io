---
title: "project 10: the slow query assassin"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 10: the "slow query" assassin

scenario: a dashboard query is timing out (running > 15 mins).
the mission: debug and optimize a complex sql query using distribution and sort keys.

- tech: postgres (local) or redshift (free trial).
- challenge: understanding `explain analyze`.
- dev to prod:
  1. create two tables and join them inefficiently (cartesian product or wrong join keys).
  2. run `explain` to see the cost.
  3. add indexes (postgres) or sort keys (redshift).
  4. prod requirement: reduce query cost by 90%. document the "before" vs "after" plan.
