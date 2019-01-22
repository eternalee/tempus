\c tempusdb;

INSERT INTO patients VALUES(
 'C2505744-1C95-11E9-BEB9-88E9FE787C26',
 'Raven Black',
 '1980-11-11',
 'ravenblack@test.com',
 '21 Apple St, New York, NY',
 '213-432-7890',
  DEFAULT
);

INSERT INTO patients VALUES(
 '918F5A28-1CE6-11E9-A6E8-88E9FE787C26',
 'Janet Lee',
 '1970-01-12',
 'janetlee@test.com',
 '1 Orange Ln, Los Angeles, CA',
 '123-456-7890',
  DEFAULT
);

INSERT INTO patients VALUES(
 DEFAULT,
 'John Doe',
 '1975-08-02',
 'johndoe@test.com',
 '12 Pear Blvd, San Francisco, CA',
 '213-000-0000',
  DEFAULT
);

INSERT INTO logins VALUES(
 DEFAULT,
 'magneto',
 'password1',
 'doctor',
  NULL,
  DEFAULT
);

INSERT INTO logins VALUES(
 DEFAULT,
 'janetlee',
 'password',
 'patient',
 '918F5A28-1CE6-11E9-A6E8-88E9FE787C26',
  DEFAULT
);

INSERT INTO logins VALUES(
 DEFAULT,
 'ravenblack',
 'password2',
 'patient',
 'C2505744-1C95-11E9-BEB9-88E9FE787C26',
  DEFAULT
);

INSERT INTO logins VALUES(
 DEFAULT,
 'xavier',
 'password4',
 'doctor',
  NULL,
  DEFAULT
);

INSERT INTO appointments VALUES(
 DEFAULT,
 'C2505744-1C95-11E9-BEB9-88E9FE787C26',
 'Raven Black',
 '2019-02-11 10:00:00',
 'Labwork',
 'Dr. Magneto',
 'PENDING',
  NULL,
  DEFAULT
);

INSERT INTO appointments VALUES(
 DEFAULT,
 '918F5A28-1CE6-11E9-A6E8-88E9FE787C26',
 'Janet Lee',
 '2019-01-13 10:00:00',
 'Initial Visit',
 'Dr. Xavier',
 'PENDING',
 NULL,
 DEFAULT
);