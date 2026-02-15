---
title: "project 8: the dynamic dag factory"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 8: the "dynamic dag" factory

scenario: you have 50 different api endpoints to ingest. creating 50 python files is unmaintainable.
the mission: write one python script that generates 50 airflow dags dynamically.

- tech: apache airflow.
- challenge: understanding python metaprogramming and airflow parsing.
- dev to prod:
  1. create a configuration file (yaml) listing 5 apis (e.g., weather, crypto, stocks).
  2. write a `dag_generator.py` that loops through the yaml and creates a dag for each.
  3. prod requirement: ensure the airflow scheduler doesn't crash due to parsing load.
