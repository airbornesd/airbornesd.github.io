---
title: "appendix"
date: 2025-10-17T20:56:19+05:30
unlisted: true
_build:
  list: false
  render: true
---

> for each: include "what i would change at scale".

1. sql window-functions practice

   - objective: compute running totals, moving averages, sessionization, churn, and retention from a transactions table.
   - tech: postgres or sqlite.
   - deliverable: 10 parameterized sql queries + sample dataset + expected results.
   - acceptance criteria: queries run on sample data and produce documented outputs; each query has o(n) explanation and complexity note.
   - metric: correctness vs expected rows (100%), and execution time for datasets of 10k / 100k rows.

2. etl idempotency and schema drift test

   - objective: implement an etl job that can safely re-run after upstream schema changes (column rename/add).
   - tech: python (pandas), postgres, docker-compose.
   - deliverable: etl script with schema-mapping layer, unit tests simulating drift, migration log.
   - acceptance criteria: etl handles 3 simulated schema changes without data loss; tests pass.
   - metric: percent of fields mapped automatically vs manually; test coverage >= 80%.

3. airflow failure-mode injection & testing

   - objective: create a dag and simulate 5 failure modes (downstream db outage, network timeout, partial data, task crash, retry storm) and add tests/guards.
   - tech: apache airflow docker, pytest, local postgres.
   - deliverable: dag, test harness, failure injection scripts, documented mitigations.
   - acceptance criteria: dag recovers or fails safely for each mode; alerts are triggered for non-recoverable states.
   - metric: mean time to detection (mtd) for failures; % automatic recoveries.

4. kafka partitioning and consumer-lag experiment

   - objective: create topic with multiple partition strategies and measure consumer lag vs producer throughput.
   - tech: kafka (docker), python producers/consumers.
   - deliverable: experiment scripts, charts of throughput vs lag, recommended partition strategy.
   - acceptance criteria: reproducible benchmark showing behavior for 1k, 10k, 100k msg/sec.
   - metric: average lag, tail-latency (95th, 99th), throughput.

5. realtime sliding-window aggregation

   - objective: implement a streaming job that computes per-user sliding-window metrics (1m, 5m, 1h) with late data handling.
   - tech: spark structured streaming or flink, kafka.
   - deliverable: streaming job, synthetic event generator, tests for late/duplicate events.
   - acceptance criteria: window correctness under 2-minute event delay; deduplication works.
   - metric: accuracy (%) vs ground truth, processing latency median/p95.

6. cdc-to-lakehouse pipeline (mini)

   - objective: capture inserts/updates/deletes from postgres and apply to iceberg/delta table with correct upserts.
   - tech: debezium, kafka, consumer app (spark/pyspark) writing iceberg on localfs or s3mock.
   - deliverable: configs, consumer app, verification script comparing source vs analytic view.
   - acceptance criteria: analytic table matches source after random sequence of ops including deletes.
   - metric: data consistency rate, replication lag.

7. dbt modular package & contract tests

   - objective: write a dbt package for a domain with models + contract tests enforcing column types, nullability, uniqueness.
   - tech: dbt core, postgres.
   - deliverable: dbt project, contract tests, ci yaml for dbt run/test.
   - acceptance criteria: all tests pass in ci; schema contract violation produces clear failure.
   - metric: number of contract violations detected during simulated upstream changes.

8. data quality pipeline using great-expectations

   - objective: integrate great-expectations into an etl pipeline and automate expectation validation & reporting.
   - tech: python, great-expectations, cloud or local storage.
   - deliverable: pipeline with expectations, failing dataset example, html reports.
   - acceptance criteria: pipeline rejects data that violates >1 expectation and logs clear error.
   - metric: false positive/negative rates on synthetic anomalies.

9. partitioning & compaction strategy for parquet datasets

   - objective: design and benchmark partitioning scheme (by date/user/hash) and compaction frequency for parquet on s3/local.
   - tech: python, parquet, pyarrow, localfs/s3mock.
   - deliverable: benchmarking script, recommended strategy with cost/latency trade-offs.
   - acceptance criteria: benchmark shows query time improvement and acceptable write overhead.
   - metric: average query time, storage overhead, number of small files.

10. schema evolution test suite

    - objective: simulate upstream schema changes (field add/remove/type change) and demonstrate downstream handling (compatibility modes).
    - tech: avro/parquet schemas, small consumer app, pytest.
    - deliverable: test scenarios, migration scripts, rollback plan.
    - acceptance criteria: downstream consumer can handle 3 schema versions; no silent data corruption.
    - metric: number of breaking changes detected, recovery time.

11. data lineage proof-of-concept

    - objective: implement lightweight lineage capture (task-level) and visualize lineage for a simple pipeline.
    - tech: airflow/xcom or custom metadata emitter, neo4j or sqlite+simple ui.
    - deliverable: lineage graph, query interface, examples linking raw -> transformed -> mart.
    - acceptance criteria: lineage shows upstream fields for any mart column.
    - metric: percent of assets with lineage coverage.

12. cost-optimization experiment for cloud storage

    - objective: compare storage/costs for different data retention policies and storage classes (hot/warm/cold).
    - tech: cost calculator spreadsheet, or simulated costs with sample sizes.
    - deliverable: cost model, recommendations, scripts to lifecycle transition sample data.
    - acceptance criteria: demonstrate >=30% cost savings with acceptable access latency trade-off.
    - metric: estimated monthly cost, access latency increase.

13. lightweight data catalog with search

    - objective: build a searchable catalog storing dataset metadata, owners, schema, freshness.
    - tech: fastapi, sqlite/postgres, simple frontend or curl API.
    - deliverable: api, sample dataset metadata, search examples.
    - acceptance criteria: search returns results for 90% of common queries (name/owner/field).
    - metric: search precision/recall on seed queries.

14. privacy-preserving aggregation

    - objective: design and implement differential privacy or noise injection for aggregated metrics.
    - tech: python, numpy, dp libraries (or simple gaussian noise).
    - deliverable: aggregation functions with privacy budget explanation and tests showing noise vs utility.
    - acceptance criteria: aggregated metrics maintain utility while satisfying chosen epsilon-level.
    - metric: mean absolute error introduced vs privacy parameter.

15. ml feature-store mini (offline-online parity)

    - objective: implement feature computation offline and online lookup with consistency checks.
    - tech: spark/pandas for batch, redis/fastapi for online store.
    - deliverable: feature registry, batch job, online api, reconciliation script.
    - acceptance criteria: offline vs online feature mismatch rate < 1% on validation set.
    - metric: mismatch rate, online lookup latency.

16. model monitoring for data drift

    - objective: deploy a simple model and collect distributional metrics to detect drift; trigger retrain pipeline.
    - tech: fastapi, prometheus metrics, python retrain job stub.
    - deliverable: monitor dashboard snapshots, alerting rules, retrain trigger.
    - acceptance criteria: drift detection triggers when feature ks-test p-value < 0.01.
    - metric: detection latency, false positive rate.

17. end-to-end encrypted pipeline proof

    - objective: implement encryption-at-rest and in-transit for data moving between services and verify keys handling.
    - tech: ssl for transports, local kms mock, encrypted parquet.
    - deliverable: encrypted data flow, key rotation demo, verification scripts.
    - acceptance criteria: data remains readable only with correct key; rotation works without data loss.
    - metric: encryption/decryption throughput, key rotation downtime.

18. observability & alerting baseline for pipelines

    - objective: instrument a pipeline with metrics (throughput, error rate, latency) and create alerting thresholds.
    - tech: prometheus client, grafana dashboards, alertmanager stub.
    - deliverable: dashboards, alert rules, runbook for alerts.
    - acceptance criteria: alerts fire on injected anomalies and runbook resolves them.
    - metric: alert precision, mean time to acknowledge (mtta) in simulated test.

19. data-contract enforcement via automated tests

    - objective: create tests that enforce upstream contracts (field presence, types, semantics) before allowing dbt runs.
    - tech: pytest, dbt, lightweight contract definitions (json/yaml).
    - deliverable: contract test suite, sample failing/succeeding runs.
    - acceptance criteria: pipeline blocks merges that violate contracts in ci.
    - metric: number of contract violations prevented.

20. multi-tenant dataset access controls

    - objective: simulate multi-tenant data isolation with row-level security and audit logs.
    - tech: postgres row-level security, simple auth layer.
    - deliverable: rls policies, audit log viewer, test cases.
    - acceptance criteria: tenant cannot query other tenant rows; audits record accesses.
    - metric: policy enforcement correctness.

21. streaming exactly-once semantics experiment

    - objective: implement and demonstrate exactly-once processing (idempotent sinks or transactions).
    - tech: kafka, spark structured streaming with checkpointing, transactional sink if available.
    - deliverable: experiment demonstrating no duplicates after retries/failures.
    - acceptance criteria: result set equals ground truth after repeated failures.
    - metric: duplicate rate = 0 under test scenarios.

22. backlog replay & catch-up strategy

    - objective: design and test a catch-up plan for a lagging consumer to replay backlog without overwhelming sinks.
    - tech: kafka, throttling consumer, batch sink.
    - deliverable: replay script with ramping strategy, sink protection mechanism.
    - acceptance criteria: catch-up finishes without exceeding sink capacity / alert thresholds.
    - metric: peak sink load during replay vs safe capacity.

23. terraform infra drift detection demo

    - objective: provision simple infra (db, bucket) with terraform, make manual change, detect drift and auto-restore or notify.
    - tech: terraform, scripts, state checks.
    - deliverable: drift detection script, remediation plan.
    - acceptance criteria: drift detected within defined interval and remediation invoked or ticket created.
    - metric: detection time, remediation success rate.

24. data-mesh contract test between domains

    - objective: simulate two domains publishing datasets with contract tests and cross-domain consumption test.
    - tech: dbt packages per domain, contract tests, mock consumer.
    - deliverable: domain contracts, consumer tests verifying contract adherence.
    - acceptance criteria: consumer tests fail when publisher breaks contract; ci blocks merge.
    - metric: contract violation detection rate.

25. reproducible research notebook + ci

    - objective: convert an analysis notebook into reproducible pipeline with parameterized runs and ci validation.
    - tech: papermill or nbconvert, github actions, docker.
    - deliverable: parameterized notebook, ci workflow, sample report.
    - acceptance criteria: notebook executes in ci and outputs expected artifacts.
    - metric: ci run time, reproducibility across environments.

26. cold-start design for feature computation

    - objective: design and implement strategies for computing features for new users with no history (imputation, defaults, cold-start models).
    - tech: python, simple model, redis for feature cache.
    - deliverable: fallback strategy code, evaluation on synthetic cold-start cohort.
    - acceptance criteria: cold-start predictive performance within defined delta of warm-start baseline.
    - metric: performance delta (e.g., auc difference).

27. api throttling & backpressure in ingestion layer

    - objective: implement client-side throttling and server backpressure handling to protect downstream systems.
    - tech: fastapi, rate-limiter, kafka or queuing layer.
    - deliverable: throttling policies, load test showing protection.
    - acceptance criteria: downstream error rate remains low under burst; graceful degradation.
    - metric: error rate, request rejection rate, time-to-recover.

28. small-scale data-warehouse benchmarking

    - objective: benchmark simple analytic queries across two storage formats (parquet vs iceberg/delta) and two engines (trino vs presto or duckdb).
    - tech: duckdb/trino, parquet/iceberg local.
    - deliverable: benchmark scripts, latency/cost table, recommendation.
    - acceptance criteria: documented trade-offs with reproducible numbers.
    - metric: query latency, scan bytes, cpu time.

29. drift-tolerant feature computation (windowing & watermark design)

    - objective: design feature computation tolerant to late-arriving events using watermarks and retention strategies.
    - tech: spark structured streaming, kafka.
    - deliverable: streaming feature job, tests injecting late events, documentation of watermark choices.
    - acceptance criteria: feature values converge within window after allowed lateness; late events handled correctly.
    - metric: percentage of late events absorbed, final feature stability.

30. small-scale governance & access audit playbook

    - objective: create a documented playbook covering dataset onboarding, ownership, sensitivity classification, and access audit process.
    - tech: markdown + yaml templates, sample audit queries.
    - deliverable: playbook, sample onboarding PR template, audit checklist.
    - acceptance criteria: playbook covers 100% of common cases; mock audit passes.
    - metric: time to onboard a dataset (simulated), completeness score from checklist.
