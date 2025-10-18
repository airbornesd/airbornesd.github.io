---
title: "performance and scalability"
draft: true
weight: 9
date: 2025-04-18T11:30:00+00:00
---

focus on partitioning, bucketing, caching, spark tuning, vectorized computation, and distributed join optimization.

## key concepts

- partitioning and bucketing
- caching strategies
- spark shuffle, broadcast join
- vectorized computation (arrow, polars)
- cap theorem tradeoffs

## explanation practice

- partition vs bucket diagram
- spark shuffle visualization
- vectorized vs row-wise computation

## projects

### 1. spark tuning benchmark

- test join strategies and shuffle performance

### 2. query optimization analyzer

- explain plan comparison

### 3. vectorized dataframe benchmark

- pandas vs polars vs spark

### 4. kafka consumer lag visualizer

- monitor backpressure
