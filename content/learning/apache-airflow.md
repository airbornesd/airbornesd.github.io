---
title: "apache airflow"
date: 2025-10-12T14:25:27+05:30
draft: false
---

### 1. why apache airflow was invented

airflow was created because managing **complex data workflows** manually is hard. in small projects, cron jobs + scripts might work. but in real-world data engineering, you often need to:

- run **hundreds of tasks** in a specific order
- retry tasks if they fail
- schedule tasks at **different frequencies**
- track what has run, what failed, and why
- **alert the team automatically** on failures
- share the workflow with others in a clear, visual way

doing all this manually with cron and scripts becomes messy, error-prone, and unscalable. airflow provides a **framework** for this, so you don’t reinvent the wheel.

---

### 2. what problem it solves (vs cron/scripts)

| manual cron/scripts                    | airflow                                 |
| -------------------------------------- | --------------------------------------- |
| you manually schedule each job         | centralized scheduling of all tasks     |
| handling retries is custom             | built-in retries and error handling     |
| hard to visualize task dependencies    | visual DAGs to see what runs first/next |
| custom logging and alerts              | integrated logging + alerting           |
| scaling to multiple workers is complex | supports distributed execution          |

in short: **airflow makes data workflows maintainable, scalable, and observable**.

---

### 3. dags (directed acyclic graphs)

a **dag** is just a fancy way to say: **a collection of tasks with dependencies, without loops**.

- “directed” = tasks have a clear order
- “acyclic” = tasks cannot depend on themselves indirectly (no infinite loops)

example:

- task a: extract data from api
- task b: clean the data
- task c: load into database

the dag would be: `a → b → c`
airflow will automatically run them in the correct order, retry failed tasks, and alert you if something breaks.

---

### 4. orchestration

**orchestration** means: managing **how and when tasks run, and in what order**.

real-world analogy: imagine an orchestra:

- musicians = tasks
- conductor = airflow
- sheet music = dag
- performance = the workflow execution

without a conductor, everyone might play at the wrong time (like scripts with cron). airflow ensures everything happens in the right order and handles errors.

---

### 5. simple real-world example

say a company wants a **daily sales report**:

1. **extract** sales data from crm api (task a)
2. **clean** missing fields and convert currencies (task b)
3. **aggregate** daily totals per region (task c)
4. **load** final report into data warehouse (task d)
5. **send email** to managers (task e)

dag: `a → b → c → d → e`

with airflow:

- all tasks are visualized
- if task b fails, airflow retries it automatically
- if email fails, it alerts the team
- you can run this workflow **daily at 6am** automatically

if you used cron + scripts: you’d need separate cron jobs for each step, custom error handling, custom logging, and custom alerts. it quickly becomes messy.

---

### before airflow (and other modern orchestrators), companies mostly used a mix of **cron, bash/python scripts, and homegrown tools**. here’s how it looked historically

---

### 1. cron + scripts

- cron schedules tasks at fixed times
- bash/python scripts did the actual work (extract/transform/load)
- logging was usually manual (writing to files)
- error handling was custom: sometimes emails on failure, sometimes nothing

**problems:**

- hard to see dependencies between tasks
- retrying failed tasks was manual
- scaling to hundreds of jobs across many servers was messy
- tracking history was hard

---

### 2. custom workflow managers

some companies built **internal tools** to manage workflows:

- scheduler + logging + retry logic
- some could visualize dependencies
- usually specific to that company’s stack

**problems:**

- expensive to build and maintain
- tied to internal tech (hard to share externally)
- harder to extend

---

### 3. enterprise ETL tools

big companies sometimes used **commercial ETL/orchestration tools** like:

- informatica
- talend
- pentaho

these handled scheduling, retries, logging, and visual workflows, but:

- expensive licenses
- heavy setups
- less flexible than writing code
