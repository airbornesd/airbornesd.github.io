---
title: "project 13: the finops cost dashboard"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 13: the "finops" cost dashboard

scenario: the aws bill spiked by $5,000. you need to find out why.
the mission: ingest aws cost & usage reports (simulated csv) and visualize the "leak."

- tech: tableau (public) or streamlit, sql.
- challenge: visualizing complex hierarchical data.
- dev to prod:
  1. load a dummy "cloud cost" csv into your db.
  2. write a query to find the "top 5 most expensive services per day."
  3. prod requirement: build a dashboard that alerts if daily spend > $50.
