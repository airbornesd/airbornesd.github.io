---
title: "system design and architecture"
draft: true
weight: 11
date: 2025-04-18T11:30:00+00:00
---

focus on batch vs stream, event-driven systems, lambda/kappa architecture, checkpointing, backpressure, and data mesh principles.

## key concepts

- lambda vs kappa architecture
- event-driven microservice design
- checkpointing and replay
- fault tolerance and recovery
- data mesh and domain ownership

## explanation practice

- lambda/kappa diagram
- microservice event flow
- checkpointing visualization

## projects

### 1. hybrid architecture project

- api → kafka → spark stream → iceberg → trino
- batch + stream unified output

### 2. fault tolerance simulator

- kafka consumer crash → auto recovery

### 3. data mesh simulation

- multiple domains communicating via kafka
