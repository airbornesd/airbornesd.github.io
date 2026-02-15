---
title: "project 11: the ci/cd pipeline for data"
date: 2026-02-15T13:29:51+05:30
draft: false
---

#### project 11: the "ci/cd" pipeline for data

scenario: a junior engineer pushed bad code that broke production.
the mission: build a github action that runs lints and tests before merging.

- tech: github actions, sqlfluff, pytest.
- challenge: automating code quality.
- dev to prod:
  1. set up a `.github/workflows/data_ci.yml`.
  2. add a step to lint sql files using `sqlfluff`.
  3. prod requirement: block the pull request if the lint score is below 95%.
