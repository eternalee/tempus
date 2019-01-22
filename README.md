# tempus

## Tempus Code Challenge: Doctors and Patients in React & Node.js

Doctors and patients can log into this app and schedule appointments, view patient data and upload files! 

### Instructions for Seeding db:
## Start Postgres
Open a new terminal window
If you don't have postgres, run 'brew install postgresql'
Start Postgres using the command 'pg_ctl -D /usr/local/var/postgres start && brew services start postgresql'
To check, run 'postgres -V'

## Create the database tempusdb on your local computer
Enter the CLI using the command 'psql postgres' and run 'CREATE DATABASE tempusdb'. Can also run 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"' at this time to enable uuid creation.

Note: config.js assumes username is 'root'.

## Seed the database
In terminal, cd into the root directory of the project.
Run: psql -f src/db/migration.sql from your local directory to create the tables in the Tempusdb
Run: psql -f src/db/seed.sql to seed the database with dummy data

### Assumptions/Notes:
### Page Reloads
Ideally this application would have role protection so that whenever the page is reloaded, the user's login and usertype (doctor vs patient) are preserved. Given more time, I'd use a HOC wrapper that does a network call check upon page refresh. I'd also implement cookies & JWT to invalidate sessions, as well as registration with bcrypt hashing for passwords. 

#### API Keys 
S3 API keys are hardcoded (and now replaced with an empty string) but ideally we would store it in a node env variable/config file and manually import it. 

#### Sequelize ORM
Used ORM because it helps protect against SQL injection attacks.

#### Appointments
Ideally would add more CSS Styling on appointments based on their status and expiration. 
