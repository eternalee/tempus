const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const Controller = require('./Controller');
const DoctorController = require('./DoctorController');
const PatientController = require('./PatientController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.listen(8080, () => console.log('Listening on port 8080'));

app.post('/api/signin', Controller.authenticate)

app.get('/api/patientlist', DoctorController.getPatientList)
// app.get('/api/patient/:name', DoctorController.getPatient)
// app.get('/api/patient/:name/appointments', DoctorController.getPatientAppointments)
// app.post('/api/patient/:name/appointments', DoctorController.schedulePatientAppointment)
// app.get('/api/patient/:name/files', DoctorController.getPatientFiles)
// app.post('/api/patient/:name/files', DoctorController.uploadPatientFile)
// app.delete('/api/patient/:name/files', DoctorController.removePatientFile)

app.get('/test', function (req, res) {
  res.send({ msg: "Routes are working" })
})

//app.use(express.static('../../')); 