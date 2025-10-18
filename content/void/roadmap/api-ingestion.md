---
title: "api and data ingestion"
draft: true
weight: 10
date: 2025-04-18T11:30:00+00:00
---

focus on rest, websocket, graphql, rate-limiting, retries, web scraping, authentication, and ingestion pipelines.

## key concepts

- ingestion flow: api → kafka → db
- websocket stream architecture
- scraping pipeline: fetch → parse → validate → store
- api auth: oauth, jwt

## explanation practice

- websocket flow diagram
- retry/backoff illustration
- api authentication flowchart

## projects

### 1. crypto price ingestion

- api/websocket → kafka → postgres

### 2. news/web scraper

- scrape → clean → elasticsearch

### 3. data ingestion framework

- retry/backoff logic and monitoring
