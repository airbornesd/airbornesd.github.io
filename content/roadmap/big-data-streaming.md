---
title: "big data and streaming"
draft: false
weight: 5
date: 2025-04-18T11:30:00+00:00
---

cover hdfs, mapreduce, spark, kafka, flink, distributed consistency, and cap theorem.

## key concepts

- hdfs architecture (namenode, datanodes)
- spark rdd/dataframe, catalyst optimizer
- kafka partitions, brokers, offsets
- flink checkpointing and windowing
- cap theorem and distributed tradeoffs

## explanation practice

- spark dag diagram
- kafka partitioning and offset diagram
- flink windowing illustration

## projects

### 1. spark batch analytics

- process millions of records → parquet → trino queries

### 2. kafka streaming analytics

- trade stream → spark streaming → redis → grafana

### 3. flink fraud detector

- detect anomalies in payment streams

### 4. build kafka clone (lite)

- python socket/queue simulation

### 5. hdfs simulator

- directory replication in python
