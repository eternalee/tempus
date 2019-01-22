# Tempus Code Challenge: Doctors and Patients in React & Node.js

Doctors and patients can log in to view patient data, schedule/cancel/decline appointments, and upload files! 

## First time? Instructions:
### Start Postgres
Open a new terminal window. Check if you have postgres by running `postgres -V`.
If you don't have postgres, run `brew install postgresql`.
Start Postgres using the command `pg_ctl -D /usr/local/var/postgres start && brew services start postgresql`.

### Create the database tempusdb 
Using the CLI, run `psql postgres` to enter the postgres server and run `CREATE DATABASE tempusdb;`. 
Update any values in src/db/config.js (e.g. username, password) as necessary.

### Seed the database
Run `\q` or enter a new terminal window and cd into the root directory of this project.
Run: `psql -f src/db/migration.sql` from your local directory to create the tables in the tempusdb.
Run: `psql -f src/db/seed.sql` to seed the database with dummy data.

### Start the app
Run `npm start` or `npm run dev`.

## Assumptions/Notes:
### Page Reloads
Ideally this application would have role protection so that whenever the page is reloaded, the user's login and usertype (doctor vs patient) are preserved. Given more time, I'd use a HOC wrapper that does a network call check upon page refresh. I'd also implement cookies & JWT to invalidate sessions, as well as registration with bcrypt hashing for passwords. 

#### API Keys 
S3 API keys are hardcoded (and now replaced with an empty string) but ideally we would store it in a node env variable/config file and manually import it. 

#### Sequelize ORM
Used ORM because it helps protect against SQL injection attacks.

#### Appointments
Ideally would add more CSS Styling on appointments based on their status and expiration. 
