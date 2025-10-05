# MongoDB Fundamentals – Week 1 Assignment

This repository contains my Week 1 MongoDB assignment, demonstrating core database operations using Node.js and the MongoDB driver.

## Setup Instructions

Before running the scripts, make sure the following are installed:

- **MongoDB Community Edition** (includes `mongosh`)
- **Node.js** (v18 or higher)

Once Node.js is installed, set up your project environment by running:

```bash
npm init -y
npm install mongodb


How to Run the Scripts
1. Insert Book Data
To populate the database with sample book entries, run the following command in your terminal:
node insert_books.js

2. Run Queries

Open the queries.js file to view the MongoDB queries. These can be executed using either:

MongoDB Shell (mongosh) – Copy and paste queries manually

MongoDB Compass – Use the GUI to run and visualize queries

The queries cover:

CRUD operations (Create, Read, Update, Delete)

Filtering, projection, and sorting

Aggregation pipelines

Index creation and performance analysis using explain("executionStats")
