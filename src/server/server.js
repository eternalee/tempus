const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const LoginController = require('./LoginController');
const AppointmentController = require('./AppointmentController');
const PatientController = require('./PatientController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.listen(8080, () => console.log('Listening on port 8080'));

app.post('/api/login', LoginController.authenticate)
app.get('/api/appointment/:patient_id', AppointmentController.getPatientAppointments)
app.post('/api/appointment', AppointmentController.schedulePatientAppointment)
app.delete('/api/appointment', AppointmentController.cancelPatientAppointment)

app.get('/api/patient', PatientController.getPatientList)
app.get('/api/patient/:patient_id', PatientController.getPatientProfile)

// app.get('/api/patient/:id/files', PatientController.getPatientFiles)
// app.post('/api/patient/:id/files', PatientController.uploadPatientFile)
// app.delete('/api/patient/:id/files', PatientController.removePatientFile)

//app.use(express.static('../../')); 