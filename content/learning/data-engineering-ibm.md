---
title: "data engineering - ibm overview"
date: 2025-10-10T11:55:38+05:30
draft: false
---

**source:** [ibm data engineering](https://www.ibm.com/think/topics/data-engineering)

---

### 🔹 what data engineers do

- create and deploy algorithms, pipelines, and workflows that convert **raw data → ready-to-use datasets**
- enable **analysis and application** of data regardless of source or format
- follow **data mesh** principles — a decentralized architecture where data is organized by business domains (marketing, sales, services, etc.)

---

### 🔹 key use cases

- data collection, storage, and management
- real-time data analysis
- machine learning integration

---

### 🔹 de and core datasets

- data engineers build systems that turn **massive raw data** into **core, usable datasets**
- focus on **data as a product (daap)** — different from **data as a service (daas)**
- real-world examples:
  - retail and e-commerce data standardization
  - fraud detection pipelines
  - manufacturing analytics pipelines

---

## ⚙️ how data engineering works

> data engineering designs and builds data pipelines that convert unstructured raw data into unified, high-quality datasets.

### steps:

1. **data ingestion** – movement of data from multiple sources into a single ecosystem
2. **data transformation** – cleaning, correcting, normalizing data to ensure consistency and integrity

---

## 🧩 data normalization (detailed concept)

**definition:**  
data normalization means organizing and transforming data to make it **consistent, structured, and comparable**.  
it removes **redundancy (duplicates)** and ensures **data integrity (accurate relationships between entities)**.

---

### 🔹 simple analogy

like cleaning and organizing your messy room:

- books on shelves (grouped)
- clothes in the cupboard
- shoes on the rack  
  → not deleting anything, just organizing logically for easier retrieval.

---

### 🔹 in data context

in databases (like sql):

- normalization = splitting large tables into smaller ones and defining **relationships (foreign keys)**
- it follows **normal forms** (1nf, 2nf, 3nf, etc.) — each removing specific redundancy or dependency type.

---

### 🔹 real-world example

**before normalization:**

| student_id | student_name | course  | teacher  | teacher_phone |
| ---------- | ------------ | ------- | -------- | ------------- |
| 1          | alex         | math    | mr. raj  | 9999991111    |
| 2          | mia          | science | ms. neha | 9999992222    |
| 3          | sam          | math    | mr. raj  | 9999991111    |

redundancy: teacher info repeats for each student.

---

**after normalization:**

**students table**
| student_id | student_name | course_id |
| ----------- | ------------- | ---------- |
| 1 | alex | 101 |
| 2 | mia | 102 |
| 3 | sam | 101 |

**courses table**
| course_id | course_name | teacher_id |
| ---------- | ------------ | ----------- |
| 101 | math | t1 |
| 102 | science | t2 |

**teachers table**
| teacher_id | teacher_name | teacher_phone |
| ----------- | -------------- | --------------- |
| t1 | mr. raj | 9999991111 |
| t2 | ms. neha | 9999992222 |

→ cleaner, consistent, efficient for updates and queries.

---

## 🧠 da vs ds vs de

| role                    | focus                    | purpose                                     |
| ----------------------- | ------------------------ | ------------------------------------------- |
| **da (data analyst)**   | analyze large datasets   | extract insights for present-day decisions  |
| **ds (data scientist)** | build ml models          | predict future outcomes                     |
| **de (data engineer)**  | design pipelines & infra | deliver reliable, structured data for da/ds |

---

## 🧰 tools & pipeline formats

data engineers primarily use:

- **etl** → extract → transform → load ([see `/learning/etl`](/learning/etl))
- **elt** → extract → load → transform ([see `/learning/elt`](/learning/elt))

---

## 💾 data storage solutions

- cloud computing services
- relational databases
- nosql databases
- data warehouses
- data lakes
- data lakehouses

---

## 🔄 other data integration methods

- **change data capture (cdc):** tracks and streams only changes (inserts, updates, deletes) from databases in real time.
- **data replication:** creates exact copies of data across systems to ensure consistency and availability.
- **data visualization:** converts datasets into graphical insights for easy pattern and trend detection.
- **stream data integration (sdi):** continuously processes and merges live data streams from multiple real-time sources.

---

## 💻 core programming languages

- sql → querying and data modeling
- python → scripting, orchestration, and analytics
- scala → big data and spark pipelines
- go → building concurrent, high-performance data services
- node.js → managing real-time, event-driven data integrations
- java → enterprise-scale data processing
