# API Code Compass Boilerplate

This is a boilerplate for building APIs using Node.js, Express, and various other tools.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Scripts](#scripts)
- [Project Structure](#project-structure)

## Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:sbimochan/api-code-compass-boilerplate.git
   cd api-code-compass-boilerplate
   ```

2. Install dependencies:
   ```sh
   yarn
   ```

## Configuration

1. Copy the `.env.example` file to `.env`:

   ```sh
   cp .env.example .env
   ```

2. Update the `.env` file with your configuration values:

## Running the Application

1. Build the project:

   ```sh
   yarn build
   ```

2. Start the application:

   ```sh
   yarn start
   ```

3. For development, you can use:
   ```sh
   yarn dev
   ```

## Scripts

- `build`: Transpile the source code using Babel.
- `dev`: Run the application in development mode using Nodemon.
- `start`: Start the application.
- `knex`: Run Knex commands with environment variables.
- `seed`: Run database seeders.
- `migrate`: Run database migrations.
- `rollback`: Rollback the last database migration.
- `make:seeder`: Create a new database seeder.
- `make:migration`: Create a new database migration.

## Project Structure

```plaintext
.
├── public/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── stubs/
│   ├── utils/
│   ├── config.js
│   ├── index.js
│   ├── instrument.js
│   └── knexfile.js
├── .babelrc
├── .env
├── [.env.example](http://_vscodecontentref_/1)
├── .gitignore
├── [jsconfig.json](http://_vscodecontentref_/2)
├── [nodemon.json](http://_vscodecontentref_/3)
├── [package.json](http://_vscodecontentref_/4)
├── [README.md](http://_vscodecontentref_/5)
```
