---
title: "04 Defi Onchain Analytics"
date: 2025-10-05T17:18:08+05:30
draft: false
---

### defi on-chain analytics engine: ethereum rpc → kafka → spark → wallet labeling

#### what it is

a blockchain analytics pipeline ingesting ethereum blockchain data to classify wallet types, detect anomalies, and produce risk metrics, inspired by systems used in compliance and crypto intelligence companies.

#### what you’ll build

- connection to ethereum rpc via infura or alchemy
- kafka producer streaming parsed transactions and token transfers
- spark processing for behavioral clustering and anomaly detection
- iceberg-based storage for on-chain analytical datasets
- flask or fastapi endpoint to expose wallet-level risk assessments

#### approach

- extract block data from ethereum in near real time and standardize schema (transaction hash, sender, receiver, value, gas, etc.)
- use spark or graphframes for entity linkage and community detection
- classify wallets by transactional frequency, counterparty diversity, and defi protocol interaction
- store labeled outputs in iceberg format for efficient querying through trino

#### tech stack

- data source: ethereum rpc (infura/alchemy)
- streaming: kafka
- processing: spark
- storage: apache iceberg + minio
- graph analytics: graphframes or networkx
- api: fastapi or flask

#### learning outcomes

- understand immutable, append-only public data systems
- learn on-chain behavioral analysis and wallet attribution methods
- explore data lineage and transformation under decentralization constraints
- develop understanding of defi ecosystem analytics and compliance-grade data engineering
