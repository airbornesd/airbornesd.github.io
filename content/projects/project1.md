---
title: "project1"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 1: the "order book" aggregator

scenario: a crypto exchange (like the one you worked on at blazpay) is crashing because the frontend is polling the database for prices.
the mission: build a real-time websocket ingestion engine that normalizes order book data from binance & coinbase into a unified kafka stream.

- tech: python (asyncio), kafka, docker.
- challenge: handle connection drops and ensure strict ordering of updates.
- dev to prod:
  1. create a python `aiohttp` script to connect to binance websocket.
  2. push raw json events to a kafka topic `raw_orders`.
  3. prod requirement: dockerize the producer with a `restart: always` policy. implement "dead letter queue" logic (if kafka is down, save to a local csv buffer).
