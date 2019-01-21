# tempus

Assumptions/Notes:
For checking role of doctor vs patient:
Ideally this application would have role protection so that whenever the page is reloaded/refreshed, the user's login and usertype (doctor vs patient) are preserved. Given more time, I'd use a HOC wrapper that does a network call check upon page refresh. I'd also implement cookies & JWT to invalidate sessions, as well as registration with bcrypt hashing for passwords. 

API Keys 
S3 API keys are hardcoded (and now replaced with an empty string) but ideally we would store it in a node env variable/config file and manually import it. 

Sequelize ORM
Used ORM because it helps protect against SQL injection attacks.

Appointments
Ideally would add more CSS Styling on appointments based on their status and expiration. 
