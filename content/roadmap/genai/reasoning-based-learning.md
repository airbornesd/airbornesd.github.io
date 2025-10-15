---
title: "reasoning based learning"
date: 2025-10-14T14:32:27+05:30
draft: false
---

1. **heap-based ranking system (data structure fundamentals)**

   - heap data structures and operations (insert, extract-min/max)
   - priority queues for ranking algorithms
   - time and space complexity analysis (o(log n) operations)
   - basic python implementation of heaps
   - **approach:** synthesize a min-heap via `heapq` with custom comparator for multi-criteria ranking; ingest a 10k-item dataset, heapify in o(n), then extract top-k with repeated pops, profiling sift-up/down latencies via `timeit`.

2. **in-memory key-value store (hashmap + persistence simulation)**

   - hash maps and collision resolution techniques
   - crud operations in memory
   - simulating persistence with file i/o
   - error handling for key collisions and serialization
   - **approach:** engineer a dict-backed hashmap with linear probing for collisions; layer pickle-based serialization for dump/restore, stress-testing with 1m ops via `concurrent.futures` for thread-safe mutations.

3. **tcp chat system (socket + concurrency + message delivery)**

   - socket programming and tcp protocol basics
   - threading or multiprocessing for concurrency
   - message queuing and reliable delivery
   - handling client-server communication errors
   - **approach:** bootstrap a non-blocking server with `socket` and `select` epoll for i/o multiplexing; enqueue msgs in `queue.queue`, spawn threads per client for echo/reply, injecting artificial packet loss to tune nack retries.

4. **python job scheduler (multiprocessing + process sync)**

   - multiprocessing module for parallel execution
   - synchronization primitives (locks, queues)
   - cron-like scheduling logic
   - resource management and deadlock avoidance
   - **approach:** harness `multiprocessing.pool` for fan-out jobs, gated by `rlock` for shared state; parse cron strings into `heapq`-scheduled events, simulating orchestration with poison pills for graceful shutdowns.

5. **normalization and er diagram case study (manual modeling)**

   - database normalization rules (1nf to bcnf)
   - entity-relationship (er) modeling
   - identifying keys, relationships, and dependencies
   - manual schema design for real-world cases
   - **approach:** deconstruct a e-commerce domain into crow's-foot erd via plantuml; iterate normalization passes on sample data, quantifying redundancy reduction (e.g., from 3nf violations) with ad-hoc sql diffs.

6. **simple query planner visualizer (sql cost estimation demo)**

   - sql query execution plans and cost models
   - basic optimizer logic (index usage, join orders)
   - visualization techniques (trees or graphs)
   - estimating i/o and cpu costs
   - **approach:** parse toy sql via antrl, mock a volcano-style optimizer with greedy join enumeration; render ast/explain tree in graphviz, back-of-envelope costing via selectivity histograms for 100-query benchmark.

7. **postgres analytics schema (star/snowflake model)**

   - star and snowflake schema design for analytics
   - dimensional modeling (facts, dimensions)
   - postgresql ddl for tables and constraints
   - query patterns for olap workloads
   - **approach:** craft a star schema for sales metrics with surrogate keys and bitmap indexes; denormalize to snowflake via fk cascades, load via `copy`, then olap-ify with window funcs on 1m rows for aggregation perf.

8. **nosql replication comparison (mongodb vs postgres)**

   - replication models (master-slave vs. multi-master)
   - consistency and availability trade-offs (cap theorem)
   - setup and testing mongodb vs. postgres replication
   - failure recovery scenarios
   - **approach:** spin up replica sets in docker compose (mongo oplog tailing vs. postgres streaming wal); inject chaos monkey kills, measure rpo/rto with linearizability probes, dissecting quorum configs under partition sims.

9. **mini db engine in python (sql parser + file i/o)**

   - sql parsing with libraries like sqlparse
   - basic query execution engine
   - file-based storage and indexing
   - transaction simulation (acid basics)
   - **approach:** tokenize sql via `sqlparse`, execute select/insert on lsm-tree stubs with b+-tree indexes in `shelve`; enforce wal for durability, replaying txns on crash to validate atomicity.

10. **query performance analyzer (indexing and joins)**

    - database indexing types (b-tree, hash)
    - join algorithms (nested loop, hash join)
    - explain plans and performance metrics
    - optimization techniques for slow queries
    - **approach:** instrument postgres with pg_stat_statements, force hash/nested joins on tpc-h subset; diff explain (analyze) outputs pre/post gin index, quantifying i/o via buffer hit ratios.

11. **weather pipeline (api → s3 → parquet → postgres)**

    - api ingestion with requests library
    - data serialization to parquet format
    - s3 bucket operations (upload/download)
    - etl loading into postgresql
    - **approach:** poll openweather api with `requests` + exponential backoff, schema-enforce via pandera, partition parquet writes to minio (s3 emu); bulk-load to postgres via `psycopg2` copy, idempotent via upsert.

12. **data quality framework (mini great-expectations clone)**

    - data validation rules (schema, range checks)
    - expectation suites and reporting
    - integration with pandas for testing
    - handling failures and alerts
    - **approach:** abstract validators as composable funcs (e.g., greatex-style suites in yaml), run on df slices with `pytest`; aggregate failures to slack via webhook, profiling assertion overhead on 500k-row batches.

13. **data profiler tool (statistics + nulls + schema validation)**

    - statistical profiling (mean, variance, distributions)
    - null and outlier detection
    - schema inference and validation
    - visualization of data profiles
    - **approach:** leverage `pandas-profiling` hooks for quintile bins and ks tests on numerics; infer schema via `pandera`, flag mahalanobis outliers, export html reports with seaborn distplots.

14. **incremental etl with airflow (scheduler + retries)**

    - airflow dags and operators
    - incremental loading logic (timestamps, watermarks)
    - retry mechanisms and error handling
    - scheduling and dependency management
    - **approach:** orchestrate dag with `postgresoperator` + `pythonoperator` for cdc via max(ts) watermark; config xcom for state, exponential retries on transient errs, backfill via `airflow backfill`.

15. **airflow dag monitoring dashboard (metrics extraction)**

    - airflow metadata extraction
    - metrics like run times and success rates
    - simple dashboard with flask or streamlit
    - logging and alerting basics
    - **approach:** query airflow's sqlite meta db via sqlalchemy, etl to influxdb; streamlit-ify with plotly gauges for sla breaches, trigger pagerduty on >5% failure rate.

16. **crypto price ingestion (websocket → kafka → postgres)**

    - websocket connections for real-time data
    - kafka producer/consumer basics
    - streaming to batch conversion
    - idempotent inserts into postgres
    - **approach:** sub to binance ws with `websocket-client`, serialize ticks as avro to kafka topic; consumer batches 1s windows, upsert to timescaledb via dedup on (symbol, ts).

17. **news/web scraper (fetch → parse → store → visualize)**

    - web scraping with beautifulsoup or scrapy
    - html parsing and data extraction
    - storage in a database or files
    - basic visualization (matplotlib charts)
    - **approach:** deploy scrapy spider with xpath selectors for rss feeds, rate-limit via `scrapy-twisted`; parse to jsonl, sink to clickhouse, matplotlib sentiment timelines via vader scores.

18. **ingestion framework (retry/backoff logic, monitoring)**

    - exponential backoff for retries
    - monitoring with logging libraries
    - configurable framework for multiple sources
    - fault tolerance patterns
    - **approach:** abstract `tenacity` decorators for circuit-breaker retries, log spans with `structlog`; yaml-config multi-source (api/db), prometheus-exported metrics for throughput/latency.

19. **websocket stream visualizer (flow diagram and stats)**

    - real-time data visualization
    - flow diagrams with libraries like graphviz
    - streaming stats (throughput, latency)
    - handling disconnections gracefully
    - **approach:** pipe ws feeds to dash app with websocket callbacks, graphviz for topology; kafka consumer for p99 latency histograms, auto-reconnect with heartbeat pings.

20. **airflow on ec2 with s3/rds backend**

    - ec2 instance setup and security groups
    - rds postgresql configuration
    - airflow deployment with celery executor
    - s3 integration for artifacts
    - **approach:** terraform ec2 t3.medium with ssm for airflow helm chart; rds multi-az, celeryflower for worker pool; s3 logs via `airflow.cfg`, iam roles for cross-account access.

21. **lambda-based etl automation**

    - aws lambda functions and triggers
    - serverless etl patterns
    - layer management for dependencies
    - cost and cold-start optimization
    - **approach:** author step functions orchestrator invoking lambda (python 3.12 runtime), s3 event triggers; bundle deps in layers, provisioned concurrency for <200ms cold starts, cloudwatch alarms on duration.

22. **spark job on emr reading parquet from s3**

    - emr cluster provisioning
    - spark sql for parquet processing
    - s3 as data lake source
    - job submission and monitoring
    - **approach:** launch emr 6.10 with spot fleet, `spark-submit` pyspark script for udf-enriched joins on 100gb parquet; ganglia metrics to s3, auto-terminate post-step via lifecycle.

23. **dockerized data pipeline with docker-compose**

    - dockerfile creation for services
    - docker compose for multi-container apps
    - volume mounting and networking
    - local testing of full pipelines
    - **approach:** multi-stage dockerfile for airflow + postgres, compose.yaml with bridge net and healthchecks; vol-mount /dags, `docker-compose up` for e2e smoke tests with pytest.

24. **github actions ci/cd for etl pipelines**

    - github actions workflows
    - ci/cd pipelines for testing/deploying
    - secrets management and artifacts
    - automated testing for data jobs
    - **approach:** yaml matrix for py3.9-3.11, tox for lint/test; deploy to ecs via oidc, cache pip in artifacts, slack notify on main merges.

25. **data lakehouse pipeline (kafka → iceberg → trino → superset)**

    - apache iceberg table formats
    - trino for federated querying
    - superset for bi dashboards
    - end-to-end lakehouse architecture
    - **approach:** kafka connect sink to iceberg via minio, trino catalog for schema-on-read; superset sql lab for cohort analysis, manifest audits for acid txns.

26. **warehouse benchmarking (redshift vs bigquery vs trino)**

    - query performance metrics (tpc-ds benchmarks)
    - cost analysis across services
    - scalability testing
    - migration considerations
    - **approach:** port tpc-ds sf100 to each (redshift wlm, bq slots, trino connectors); run 99th percentile qps with hammerdb, tco via cur queries, diff compression ratios.

27. **schema evolution demo (iceberg schema change handling)**

    - schema evolution in table formats
    - handling adds/drops/renames
    - time travel queries
    - compatibility testing
    - **approach:** evolve iceberg manifest with `spark.sql` alters, snapshot rollback via branch; compatibility matrix tests (add col → query ok), audit metadata in parquet footers.

28. **custom partitioning simulator (read-time comparison)**

    - partitioning strategies (hash, range)
    - read performance simulation
    - pruning logic
    - data skew handling
    - **approach:** simulate hive-style partitions in pandas on skewed synth data; benchmark predicate pushdown with `dask`, salt hash keys to mitigate hotspots, plot scan times via matplotlib.

29. **spark batch analytics (millions of rows to parquet)**

    - spark dataframes for large-scale processing
    - batch transformations and aggregations
    - parquet optimization (compression, partitioning)
    - handling out-of-memory errors
    - **approach:** rdd-to-df pipeline with broadcast hints, zstd-compress partitioned parquet; spill-to-disk on oom via `spark.sql.adaptive.enabled`, process 10m rows on local[*].

30. **kafka streaming analytics (trade data → spark stream → redis)**

    - spark structured streaming
    - kafka integration for input/output
    - redis for caching results
    - windowed aggregations
    - **approach:** checkpointed sss micro-batches from kafka json, tumbling windows for vwap; sink aggs to redis sorted sets, fault-tolerate with exactly-once semantics.

31. **flink fraud detector (windowed anomaly detection)**

    - apache flink for stream processing
    - windowing and event-time semantics
    - anomaly detection algorithms
    - stateful computations
    - **approach:** flink sql for session windows on tick data, z-score isolation forest udf; keyed state backend for per-user baselines, backpressure tuning via watermark alignment.

32. **hdfs simulator (namenode replication logic)**

    - hdfs architecture (namenode, datanodes)
    - block replication and fault tolerance
    - name resolution and metadata management
    - simulation of failures
    - **approach:** python fs sim with `threading` for datanode heartbeats, in-mem fsimage for nn; rack-aware replication (3x), inject dn failures to trigger under-replicated block scans.

33. **kafka-lite broker (python simulation of partitions and offsets)**

    - kafka partitioning and leader election
    - offset management and consumer groups
    - producer/consumer protocols
    - durability guarantees
    - **approach:** asyncio broker with pluggable partitioners (murmur2), zab-inspired leader via raft stubs; offset ledger in rocksdb, simulate isr for acks=all durability.

34. **spark tuning benchmark (shuffle vs broadcast join)**

    - spark shuffle optimizations
    - broadcast joins for small tables
    - benchmarking with different configs
    - partition tuning
    - **approach:** aqe-enabled joins on tpc-h, toggle `spark.sql.autobroadcastjointhreshold`; shuffle hash vs. sort-merge, profile spill via spark ui, repartition.coalesce for skew.

35. **query optimization analyzer (compare explain plans)**

    - explain analyze in sql engines
    - cost-based optimizers
    - plan comparison and rewriting
    - index recommendations
    - **approach:** hook postgres pg_hint_plan for forced rewrites, diff json explain trees; cbo stats vacuum-analyze, suggest covering indexes via pg_qualstats.

36. **vectorized dataframe benchmark (pandas vs polars vs spark)**

    - vectorized operations in dataframes
    - performance comparison across libraries
    - memory usage profiling
    - scalability for large datasets
    - **approach:** microbench groupby/apply on 1gb csv across engines, `memory_profiler` for peak rss; polars lazy eval vs. spark catalyst, extrapolate to tb-scale via extrapolation.

37. **kafka consumer lag visualizer (real-time lag chart)**

    - consumer lag metrics
    - real-time monitoring with kafka tools
    - charting with plotly or similar
    - alerting on high lag
    - **approach:** jmx-expose lag via kafka consumer group describe, streamlit + plotly candlesticks; threshold alerts via `kafkacat` cron, lag = committed - highwater.

38. **airflow monitoring dashboard (grafana + prometheus)**

    - prometheus metrics scraping
    - grafana dashboard creation
    - airflow exporter integration
    - custom queries and panels
    - **approach:** airflow prometheus exporter on /metrics, grafana promql for dag run quantiles; loki for logs, templated vars for dynamic dag selection.

39. **etl log ingestion to elk stack (elastic, logstash, kibana)**

    - logstash for parsing and filtering
    - elasticsearch indexing
    - kibana visualizations
    - log aggregation patterns
    - **approach:** logstash grok patterns for airflow json logs, ilm policy for rollover indices; kibana tsvb for error funnels, ingest via filebeat sidecar.

40. **prometheus alerting system with slack webhook**

    - alertmanager configuration
    - slack integration for notifications
    - rule definitions for thresholds
    - silencing and escalation
    - **approach:** promql rules for cpu >80% over 5m, alertmanager routing to slack via webhook; grouping/inhibit for storm suppression, pagerduty escalation tree.

41. **pipeline health checker (freshness and row count validation)**

    - data freshness monitoring
    - row count and schema checks
    - automated validation scripts
    - integration with schedulers
    - **approach:** airflow sensor for lag <1h, greatex for row/schema diffs; bash wrapper with `pg_dump` counts, fail-fast on drift.

42. **data catalog / schema registry demo (metadata management)**

    - metadata storage and querying
    - schema versioning
    - catalog tools like amundsen basics
    - lineage tracking
    - **approach:** postgres meta tables for schema evo, amundsen frontend for search; openlineage hooks in airflow, graph viz via neo4j.

43. **hybrid data architecture (api → kafka → spark stream → iceberg)**

    - hybrid batch/stream integration
    - event sourcing patterns
    - iceberg as unified sink
    - end-to-end latency measurement
    - **approach:** api gateway to kafka compacted topics, sss upsert to iceberg merge-on-read; trino for unified views, zipkin traces for e2e p95.

44. **fault tolerance simulator (kafka consumer crash → auto replay)**

    - consumer group rebalancing
    - offset commit strategies
    - crash recovery and replay
    - at-least-once semantics
    - **approach:** dockerized consumer with sigkill hooks, enable=auto.offset.reset=earliest; measure replay dupes via idempotency keys, tune session.timeout.ms.

45. **event-driven microservice system (notification + accounting)**

    - microservices with event buses
    - saga pattern for distributed transactions
    - notification and accounting logic
    - service orchestration
    - **approach:** fastapi services pub/sub via kafka, axon-inspired sagas for compensating txns; accounting double-entry via event replay, istio for circuit breaking.

46. **data mesh simulation (domain-based data ownership)**

    - domain-driven design for data
    - federated governance
    - self-service data products
    - inter-domain discovery
    - **approach:** ddd bounded contexts as iceberg domains, collibra-lite registry; self-serve via trino federation, enforce contracts with schema checks.

47. **feature pipeline (postgres → cleaning → feast feature store)**

    - feature engineering and cleaning
    - feast for online/offline stores
    - point-in-time joins
    - serving features to models
    - **approach:** dbt for cleaning transforms, feast registry for entity tables; pit-correct joins via ts_hash, redis/tiledb for low-lat serve.

48. **retraining dag (automated airflow-based ml retraining)**

    - ml model retraining workflows
    - airflow for ml ops
    - triggering on data changes
    - versioning models
    - **approach:** airflow dag with kubeflow ops, trigger on s3 delta; mlflow track params/metrics, a/b routing via canary.

49. **feature drift detection (distributional shift alerting)**

    - statistical tests for drift (ks test)
    - monitoring feature distributions
    - alerting on shifts
    - integration with pipelines
    - **approach:** evidently ai for psi/ks on online samples, airflow sensor for p-value <0.01; histogram drift viz, quarantine on alert.

50. **blazpay transaction analytics (hyperledger + kafka + spark + postgres)**

    - blockchain integration (hyperledger fabric)
    - transaction event streaming
    - spark analytics on ledger data
    - real-time p/l calculations
    - **approach:** fabric chaincode events to kafka via connector, spark streaming for rolling pnl; postgres matview for eod recon, z3 for anomaly proofs.

51. **bks mygold tokenized asset pipeline (solidity + iceberg analytics)**

    - solidity smart contracts for tokens
    - on-chain data extraction
    - iceberg for analytics tables
    - asset valuation queries
    - **approach:** hardhat-deploy erc-721, thegraph subgraph for events; iceberg upsert from subgraph sync, trino for nav calcs with oracle feeds.

52. **vault reconciliation system (ledger vs vault validation)**

    - reconciliation algorithms
    - ledger vs. vault matching
    - error detection and resolution
    - batch processing for audits
    - **approach:** fuzzywuzzy for tx matching on hashed payloads, spark for diff joins; alert on >0.1% variance, replay logs for root-cause.

53. **transaction intelligence (fraud/anomaly scoring)**

    - anomaly detection models
    - scoring rules and thresholds
    - integration with streaming data
    - explainable ai basics
    - **approach:** flink cep for rule-based + isolationforest, score via h2o; kafka stream enrich, shap for tx explainability.

54. **accounting microservice (double-entry with kafka replay)**

    - double-entry bookkeeping logic
    - event replay for consistency
    - microservice api design
    - audit trails
    - **approach:** grpc accountingservice with kafka compacted ledger, t-accounts via event sourcing; replay from offset 0 on bootstrap, immutable audit via append-only.

55. **rwa lakehouse (multi-asset data warehouse for on-chain data)**

    - real-world asset (rwa) data modeling
    - multi-asset partitioning
    - lakehouse queries for finance
    - compliance reporting
    - **approach:** iceberg partitioned by chain/asset, dbt for rwa dims; trino for sec-compliant queries, time-travel for audit trails.

56. **oracle connector (price feed + external event integration)**

    - chainlink-style oracles
    - external data feeds
    - event triggering on chains
    - secure data validation
    - **approach:** solidity oracle contract with chainlink vrf, pyth feeds via ws; threshold sigs for tamper-proof, fabric msp for access control.

57. **project documentation repo (markdown + mermaid diagrams)**

    - markdown for readmes and guides
    - mermaid for architecture diagrams
    - repo structure best practices
    - version control for docs
    - **approach:** mkdocs site gen from markdown, mermaid live editor embeds; github pages deploy, changelog via semantic-release.

58. **data contract generator (schema validation registry)**

    - data contracts and slas
    - schema generation and validation
    - registry implementation
    - consumer-provider agreements
    - **approach:** avro/protobuf schema from pydantic models, confluent schema reg; enforce at ingress via kafka interceptors, breach alerts.

59. **reproducible jupyter pipeline (papermill automation)**

    - jupyter notebooks for pipelines
    - papermill for parameterization
    - reproducibility with environments
    - automation in workflows
    - **approach:** papermill sweep params over nb, poetry for env pinning; airflow bashop exec, nbconvert to html artifacts.

60. **whiteboard interview exercises (architecture explanation practice)**
    - system design sketching
    - verbal explanation techniques
    - common de interview scenarios
    - feedback loops for improvement
    - **approach:** pramp mocks for "design uber's lakehouse," c4 model sketches; record loom vids, a/b peer feedback on clarity/conciseness.
