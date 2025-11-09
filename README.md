# Hello Prisma CRUD Practice

A simple Node.js + TypeScript project demonstrating basic CRUD operations using Prisma ORM.
This includes creating, reading, updating, deleting, and searching users in a database.

- Node.js (v18 or higher)
- npm or yarn
- A PostgreSQL / MySQL / SQLite database
- Prisma CLI

## Installation

#### Clone the project
git clone https://github.com/yourusername/hello-prisma.git

#### Move into the directory
cd hello-prisma

#### Install dependencies
npm install

## Database Setup

#### Set up your .env file
DATABASE_URL="your_database_connection_string"

#### Generate Prisma client
npx prisma generate

#### Apply your schema to the database
npx prisma migrate dev --name init


## Running the Project

#### Run with ts-node
npx ts-node index.ts

#### Or, if defined in package.json
npm start


## Features Covered

#### ✅ prisma.user.create() – Add a new user
#### ✅ prisma.user.findMany() – Get all users
#### ✅ prisma.user.findUnique() – Find user by unique field
#### ✅ prisma.user.update() – Update user info
#### ✅ prisma.user.delete() – Remove user
#### ✅ prisma.user.count() – Count total users
#### ✅ Filtering with contains, startsWith, etc.
#### ✅ Sorting with orderBy

## Example Outputs
Inserted: { id: 1, name: 'Ahmad Akil', email: 'ahmad@example.com' }
Updated: { id: 2, name: 'Md. Solim Uddin', email: '...' }
Count: 5

## Tech Stack

- TypeScript
- Prisma ORM
- SQLite (or your DB)
- Node.js


