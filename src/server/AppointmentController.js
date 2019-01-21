const { Appointments } = require('../db/Model')

module.exports = {
  getPatientAppointments(req, res) {
    Appointments.findAll({
      where: { patient_id: req.params.patient_id }
    })
      .then(response => {
        res.send(response);
      })
      .catch((error) => console.log(error))
  },
  schedulePatientAppointment(req, res) {
    Appointments.create({
      patient_id: req.body.patient_id,
      patient_name: req.body.patient_name,
      appointment_time: req.body.appointment_time,
      purpose: req.body.purpose,
      doctor: req.body.doctor,
      status: 'PENDING'
    })
      .then(response => {
        res.header(200).send(response)
      })
      .catch(error => {
        res.header(500);
        res.send({
          error: error
        })
        console.log(error)
      })
  },
  cancelPatientAppointment(req, res) {
    Appointments.destroy({
      where: {
        appointment_id: req.body.appointment_id
      }
    })
      .then(() => res.json())
      .catch((error) => console.log(error))
  },
  declinePatientAppointment(req, res) {
    Appointments.update({
      status: 'DECLINED',
      declined_reason: req.body.declined_reason
    }, {
        where: {
          appointment_id: req.body.appointment_id
        }
      })
      .then(() => res.json())
      .catch((error) => console.log(error))
  }
}