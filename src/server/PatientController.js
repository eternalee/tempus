const { Patients } = require('../db/Model')

module.exports = {
  getPatientProfile(req, res) {
    Patients.findOne({
      where: { patient_id: req.params.patient_id }
    })
      .then(response => {
        res.send(response);
      })
      .catch((error) => console.log(error))
  },
  getPatientList(req, res) {
    Patients.findAll({})
      .then(response => {
        res.send(response);
      })
      .catch((error) => console.log(error))
  }
}