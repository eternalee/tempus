\c tempusdb;

DROP TABLE IF EXISTS patients;
DROP TABLE IF EXISTS logins;
DROP TABLE IF EXISTS appointments;

CREATE TABLE patients (
  patient_id uuid DEFAULT uuid_generate_v1 () PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  dob DATE NOT NULL,
  email VARCHAR (255) NOT NULL,
  address VARCHAR (255) NOT NULL,
  phone VARCHAR (255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
 CREATE TABLE logins (
  login_id uuid DEFAULT uuid_generate_v1 () PRIMARY KEY,
  username VARCHAR (255) NOT NULL UNIQUE,
  password VARCHAR (255) NOT NULL,
  usertype VARCHAR (255) NOT NULL,
  patient_id uuid REFERENCES patients(patient_id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
 CREATE TABLE appointments (
  appointment_id uuid DEFAULT uuid_generate_v1 () PRIMARY KEY,
  patient_id uuid REFERENCES patients(patient_id),
  patient_name VARCHAR (255),
  appointment_time TIMESTAMP NOT NULL,
  purpose TEXT,
  doctor VARCHAR(255),
  status VARCHAR(255),
  declined_reason TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
 