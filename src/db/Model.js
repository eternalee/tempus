const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://eterna:@localhost:5432/tempusdb');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {

  Patients: sequelize.define('patient', {
    patient_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    dob: {
      type: Sequelize.DATEONLY
    },
    email: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.DATE
    }
  }, {
      timestamps: false
    }),

  Logins: sequelize.define('login', {
    login_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    usertype: {
      type: Sequelize.STRING
    },
    patient_id: {
      type: Sequelize.UUID
    },
    created_at: {
      type: Sequelize.DATE
    }
  }, {
      timestamps: false
    }),

  Appointments: sequelize.define('appointment', {
    appointment_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    patient_id: {
      type: Sequelize.UUID
    },
    patient_name: {
      type: Sequelize.STRING
    },
    appointment_time: {
      type: Sequelize.DATE
    },
    purpose: {
      type: Sequelize.STRING
    },
    doctor: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    declined_reason: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.DATE
    }
  }, {
      timestamps: false
    })
}