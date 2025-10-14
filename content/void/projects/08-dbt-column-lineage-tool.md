---
title: "08 dbt column lineage tool"
date: 2025-10-05T17:18:08+05:30
draft: true
---

### dbt column lineage and impact analyzer (python cli tool)

#### what it is

a command-line tool that parses dbt manifest files to analyze column-level lineage, visualize dependencies, and predict downstream impacts from schema changes.

#### what you’ll build

- a python cli command `dbt-lineage --column fct_transactions.user_id`
- parser reading dbt manifest.json and mapping dependencies
- mermaid or json-based lineage graph visualization
- github integration that triggers impact analysis during pull requests

#### approach

- implement json parsing using standard python libraries or jinja2
- perform recursive traversal of upstream and downstream column dependencies
- output dependency trees in human-readable or visual graph format
- integrate github ci to comment lineage summary on pull requests

#### tech stack

- language: python
- data source: dbt manifest.json
- visualization: mermaid or graphviz
- ci/cd: github actions

#### learning outcomes

- gain experience in metadata analysis and lineage tracking
- understand data dependency management in analytics engineering
- build developer tools that improve reliability of dbt-based workflows
- demonstrate ability to create technical utilities solving real pain points
