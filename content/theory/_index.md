---
title: "theory"
date: 2026-02-15T16:02:40+05:30
draft: false
---

### **1. sql (zero to advanced)**

_highest priority._

**a. foundation (the "select" statement)**

- [ ] **basic syntax:** `select`, `from`, `where`, `distinct`.
- [ ] **filtering:** operators (`=`, `<>`, `>`, `<`), `between`, `in`, `like` (wildcards `%`, `_`).
- [ ] **null handling:** understanding `is null`, `is not null`, and using `coalesce()` to handle missing values.
- [ ] **sorting:** `order by` (asc/desc), multi-column sorting.
- [ ] **limiting:** `limit`, `offset` (used for pagination).

**b. aggregation & grouping**

- [ ] **aggregate functions:** `count()`, `sum()`, `avg()`, `min()`, `max()`.
- [ ] **grouping:** `group by` clause (grouping by one or multiple columns).
- [ ] **filtering groups:** `having` vs `where` (crucial interview question: `where` filters rows, `having` filters groups).

**c. joins (the "venn diagram" logic)**

- [ ] **inner join:** matching rows only.
- [ ] **left/right join:** retaining rows from one side even if no match exists.
- [ ] **full outer join:** retaining all rows from both sides.
- [ ] **cross join:** cartesian product (every row matches every row).
- [ ] **self join:** joining a table to itself (e.g., "find employees who earn more than their managers").

**d. advanced & analytical (the "senior" skills)**

- [ ] **window functions:**
- `row_number()` vs `rank()` vs `dense_rank()`.
- `lead()` and `lag()` (accessing previous/next rows without joining).
- running totals: `sum(salary) over (order by date)`.

- [ ] **set operations:** `union` vs `union all` (removes duplicates vs keeps duplicates), `intersect`, `except`.
- [ ] **ctes (common table expressions):** using `with` clauses to clean up complex subqueries.
- [ ] **date/string manipulation:** `date_trunc`, `datediff`, `concat`, `substring`, `trim`.

---

### **2. data structures & algorithms (python)**

_focus on practical data manipulation, not academic theory. stick to "easy" and "medium" problems._

**a. core structures**

- [ ] **arrays (lists):** slicing, indexing, iteration.
- [ ] **hashmaps (dictionaries):** the most important structure. key-value lookups, counting frequencies.
- [ ] **sets:** removing duplicates, set operations (union/intersection).
- [ ] **strings:** reversing, splitting, parsing (crucial for data cleaning).

**b. key algorithms**

- [ ] **two pointers:** moving indices from both ends (e.g., palindrome check).
- [ ] **sliding window:** processing a subset of data (e.g., "max profit in a sub-array").
- [ ] **stack & queue:** lifo vs fifo concepts.
- [ ] **binary search:** finding items in sorted data ().

**c. "good to know" (if you have time)**

- [ ] **linked lists:** basic traversal and reversal.
- [ ] **trees (bfs/dfs):** basic traversal (bytedance asks this).
- [ ] **recursion:** base cases and self-calling functions.

---

### **3. theory & system design (data engineering)**

_justifies._

**a. data warehousing concepts**

- [ ] **oltp vs olap:** why we don't run analytics on production databases.
- [ ] **row vs columnar storage:** why parquet/redshift is faster for analytics than postgres.
- [ ] **dimensional modeling:**
- **fact tables:** (events, transactions).
- **dimension tables:** (users, products, locations).
- **star schema vs snowflake schema.**

- [ ] **scd (slowly changing dimensions):**
- **type 1:** overwrite old data (no history).
- **type 2:** add new row with flag/date (preserve history).

**b. big data architecture**

- [ ] **etl vs elt:** load then transform (modern) vs transform then load (legacy).
- [ ] **data lake vs data warehouse:** s3 (raw files) vs redshift/snowflake (structured tables).
- [ ] **cap theorem:** consistency, availability, partition tolerance (you can only pick 2).
- [ ] **acid vs base:** strong consistency (banks) vs eventual consistency (social media).

**c. distributed systems**

- [ ] **sharding vs partitioning:** how to split data across servers.
- [ ] **horizontal vs vertical scaling:** adding more machines vs adding more cpu/ram.
- [ ] **idempotency:** ensuring re-running a job doesn't duplicate data.
- [ ] **batch vs streaming:** daily jobs (airflow) vs real-time (kafka).

---

### **4. resume-specific justification topics**

_you must be able to speak about these "deep dives" for your specific resume._

- [ ] **apache airflow:** what is a dag? what are operators? how do you handle backfills?
- [ ] **apache kafka:** topics, partitions, producers, consumers, consumer groups, offsets.
- [ ] **apache spark:**
- **transformations vs actions:** lazy evaluation.
- **shuffle:** why moving data between nodes is expensive.
- **optimization:** partitioning, caching, broadcast joins.

- [ ] **ci/cd for data:** how you used git actions to test sql/python code (linting).
