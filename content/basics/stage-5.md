---
title: "stage 5"
date: 2026-02-18T12:01:32+05:30
draft: false
weight: 5
icon: "⚙️"
summary: "data engineering core projects"
---

## data engineering core projects

goal: pipeline thinking.

### very easy — pipeline awareness

- [ ] csv cleaner with logging
- [ ] daily aggregation script
- [ ] json to csv transformer
- [ ] log parser
- [ ] data quality checker

focus: validation mindset.

### easy — structured pipelines

- [ ] simple etl (csv → transform → sqlite)
- [ ] scheduled ingestion (process new files only)
- [ ] api ingestion with retry
- [ ] bronze/silver/gold folder structure
- [ ] streaming simulator (rolling summary)

focus: repeatability.

### intermediate — reliability thinking

- [ ] incremental load with watermark
- [ ] change data capture simulation
- [ ] parquet-based mini lakehouse
- [ ] anomaly detection pipeline
- [ ] airflow dag with dependencies

focus: state + orchestration.

### moderate hard — production mindset

- [ ] event-driven pipeline (producer → queue → consumer)
- [ ] schema evolution handling
- [ ] idempotent batch job
- [ ] analytics api serving layer
- [ ] full mini platform (ingest → transform → store → serve → log)

focus: robustness.
