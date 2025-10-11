---
title: "data ingestion"
date: 2025-10-11T11:31:21+05:30
draft: false
---

data ingestion means **collecting data from different sources and bringing it into one place** (like a database, data warehouse, or data lake) so it can be used for analysis, machine learning, or reporting.

---

### 🔹 simple definition

data ingestion = **getting the data from where it is generated → to where it is stored and processed**

---

### 🔹 real world example

imagine a food delivery app like swiggy or zomato.
they get data from many sources every second:

- customer orders (from mobile app)
- restaurant menu updates (from partner api)
- delivery location updates (from gps)
- payment status (from payment gateway api)

to make sense of everything — like showing real-time analytics or predicting delivery time — they need all this data in one central place.

so they **ingest** this data into their data warehouse (like snowflake or bigquery).

---

### 🔹 step-by-step example

1. **sources:**

   - mysql database (orders)
   - rest api (payments)
   - csv logs from gps devices

2. **ingestion process:**

   - a python script or airflow dag fetches data from these sources
   - converts it into a common format (like json or parquet)
   - pushes it into cloud storage (s3, gcs, or hdfs)

3. **destination:**

   - later, data analysts or ml models read it from the data lake or warehouse
