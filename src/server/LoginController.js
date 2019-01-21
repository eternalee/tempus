const { Logins } = require('../db/Model')

//expire a connection after an hour (runs each 20min)
// let connections = {};
// setInterval(() => {
//   for (key in connections) {
//     if (Date.now() > (connections[key]['loginTime'] + 3600000)) delete connections[key];
//   }
// }, 1200000)

module.exports = {
  authenticate(req, res) {
    Logins.findOne({
      where: { username: req.body.username },
      attributes: ['username', 'password', 'usertype', 'patient_id']
    }).then(response => {
      if (response === null) {
        console.log('no such user');
        res.header(400).send({ msg: 'Invalid credentials' });
      } else {
        if (response['dataValues']['password'] === req.body.password) {
          console.log('authenticated');
          res.header(200).send({
            msg: 'Authenticated',
            usertype: response['dataValues']['usertype'],
            patient_id: response['dataValues']['patient_id']
          })
        } else {
          console.log('wrong username/password')
          res.header(400).send({ msg: 'Invalid credentials' })
        }
      }
    })
  }
}