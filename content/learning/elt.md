---
title: "elt"
date: 2025-10-10T12:23:08+05:30
draft: false
---

### 🔹 definition

elt (extract, load, transform) is a **modern data integration process** where raw data is first loaded into a **central repository (like a data lake or warehouse)** and transformed **after loading**.

---

## 🔸 step 1: extract

similar to etl, raw data is **copied from multiple sources** (sql, nosql, crm, erp, json, xml, web pages, etc.) into a staging or landing zone.

---

## 🔸 step 2: load

unlike etl, data is **loaded before transformation** — into systems like **snowflake, bigquery, redshift, or databricks**.

this enables immediate access to raw data for analysts or engineers.

---

## 🔸 step 3: transform

transformations occur **inside the target system**, using its **compute power**.

**operations include:**

- filtering
- cleaning
- aggregating
- de-duplicating
- validating
- auditing
- encryption for compliance
- schema matching

---

## ✅ benefits

- separation of concerns (storage vs transformation)
- no dependency on separate transform servers
- cost-efficient and scalable
- supports near real-time processing
- flexible and continuously operable

---

## ⚠️ challenges with examples

| challenge                     | explanation                                                                  | real-world example                                                                     |
| ----------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **cost of compute**           | transformations use warehouse compute, which can be expensive at large scale | when using snowflake to process billions of records, compute credits can spike quickly |
| **complex schema management** | raw data may have inconsistent formats                                       | logs from multiple microservices often differ in json key structure                    |
| **data latency**              | transformations run post-load, which can delay downstream availability       | marketing dashboards may lag behind by a few minutes                                   |
| **governance & quality**      | raw data is stored as-is, increasing need for quality checks                 | corrupted api payloads or duplicates may persist until cleaned                         |
| **storage overhead**          | raw + transformed data both stored → high volume                             | keeping both raw and cleaned copies in s3 or gcs increases cost                        |
