---
title: "09 multi cloud lakehouse"
date: 2025-10-05T17:18:08+05:30
draft: true
---

### multi-cloud lakehouse simulation: s3 + gcs + iceberg namespace routing

#### what it is

a simulation of an enterprise-grade multi-cloud lakehouse capable of reading and writing across aws and gcp using iceberg catalog routing.

#### what you’ll build

- local docker setup running minio and fake-gcs-server
- iceberg rest catalog with namespace-level routing (e.g., prod.aws.sales → s3, prod.gcp.marketing → gcs)
- trino queries seamlessly joining datasets from both clouds
- unified metadata store ensuring consistency across catalogs

#### approach

- configure multi-endpoint iceberg catalog
- test namespace routing by performing read/write operations on both storage backends
- validate cross-cloud analytical joins and performance impact
- document cost and latency implications for hybrid cloud analytics

#### tech stack

- storage: s3 and gcs (via minio + fake-gcs-server)
- catalog: apache iceberg rest catalog
- query: trino or duckdb
- orchestration: docker compose

#### learning outcomes

- understand hybrid cloud architectures and vendor abstraction
- learn multi-catalog management in lakehouse environments
- handle enterprise governance, replication, and compliance challenges
- build proof-of-concept for multi-region analytics infrastructure
