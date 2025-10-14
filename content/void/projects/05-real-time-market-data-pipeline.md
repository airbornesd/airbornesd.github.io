---
title: "05 real time market data pipeline"
date: 2025-10-05T17:18:08+05:30
draft: true
---

### real-time market data pipeline: finnhub/binance → kafka → spark → anomaly detection

#### what it is

a low-latency financial market data pipeline that processes live trading events, computes market features, and applies statistical anomaly detection to flag unusual behavior like spoofing or extreme volatility.

#### what you’ll build

- websocket-based data ingestion from finnhub or binance public feeds
- kafka message broker handling live tick events
- spark streaming jobs performing aggregation and feature extraction
- cassandra or timescaledb for storing processed metrics
- grafana dashboard for latency and anomaly visualization

#### approach

- define event schema for trade, bid/ask updates, and timestamps
- compute rolling metrics (vwap, spread, imbalance, volatility)
- apply statistical anomaly detection (z-score thresholds, rolling mean deviation)
- ensure latency under 100ms for ingestion and under 1s for aggregation

#### tech stack

- data source: finnhub websocket or binance api
- messaging: kafka
- processing: spark structured streaming
- storage: cassandra or timescaledb
- ml: scikit-learn
- visualization: grafana and prometheus

#### learning outcomes

- learn to handle high-frequency financial data streams
- implement feature engineering for quantitative finance applications
- study latency reduction and throughput optimization techniques
- develop experience relevant for quantitative and hft systems
