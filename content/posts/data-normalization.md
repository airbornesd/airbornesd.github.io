---
title: "data normalization"
date: 2025-10-26T05:03:46+05:30
draft: false
---

normalization is the process of organising a relational database so that data redundancy(repetitive) is reduced, data integrity is improved, and update/delete/insert anomalies are minimised.

### 1. first normal form (1nf)

- each column must have atomic (indivisible) values (no lists/arrays in a cell).
- no repeating groups of columns (e.g., you shouldn’t have phone1, phone2, phone3 columns)

table:

| student_id | name  |  grades |
| :--------- | :---: | ------: |
| 101        | sarah | A, B, C |

this violates 1nf because the `grades` cell has multiple values.
to normalise:

| student_id | name  | grade |
| :--------- | :---: | ----: |
| 101        | sarah |     A |
| 101        | sarah |     B |
| 101        | sarah |     C |

---

### 2. second normal form (2nf)

- table must already be in 1nf.
- no partial dependency: every non-key column must depend on the _whole_ primary key, not part of it.
  **example:**
  imagine a composite key `order_id + product_id` in a sales table. If you store `product_name` in that table and `product_name` depends only on `product_id` (not on `order_id + product_id`), you have a partial dependency → violates 2nf.
  so you move `product_name` into a separate `products` table keyed by `product_id`.

---

### 3. third normal form (3nf)

- table must be in 2nf.
- no transitive dependencies: non-key columns must depend directly only on the primary key, not via another non-key column.
  **example:**
  if you have a table `employees(employee_id, department_id, department_name)`.
  `department_name` depends on `department_id` (which is a non-key column) rather than directly on `employee_id` (the primary key) → transitive dependency.
  to normalise: move `department_id + department_name` into `departments` table, then `employees` just references `department_id`.

---

### 4. boyce-codd normal form (bc nf) & higher forms (4nf, 5nf)

- bc nf: stricter version of 3nf, addressing certain edge cases of dependencies where every determinant is a candidate key.
- 4nf: deals with multi-valued dependencies.
- 5nf: deals with join dependencies (rarely needed in everyday databases)

---

## when is “enough” normalisation?

according to the tutorial: you don’t always need to go up to 5nf for typical applications — achieving up to 3nf (or perhaps bc nf) is often sufficient and practical.

---

## summary in very simple terms

- store each fact _once_, not many times.
- use keys & foreign keys to link tables rather than stuffing everything in one table.
- eliminate lists, repeated groups, and indirect dependencies.
- this makes updates easier, data more reliable, and storage more efficient.
