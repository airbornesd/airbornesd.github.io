---
title: "project 3: the change data capture pipeline"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 3: the "change data capture" (cdc) pipeline

scenario: the analytics team needs access to user data, but querying the prod db is slowing down the app.
the mission: replicate a postgres database to a data lake in real-time without querying it.

- tech: debezium (or write a custom python cdc poller), postgres, kafka connect.
- challenge: capture `insert`, `update`, and `delete` operations accurately.
- dev to prod:
  1. set up a local postgres db with a "users" table.
  2. configure debezium (via docker) to listen to the postgres write-ahead log (wal).
  3. stream changes to a kafka topic `postgres.public.users`.
  4. prod requirement: ensure no data loss when the debezium container crashes.
