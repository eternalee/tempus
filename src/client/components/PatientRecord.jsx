import React, { Component } from 'react';
import Appointment from './Appointment.jsx';
import PatientProfile from './PatientProfile.jsx';

export default class PatientRecord extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      appointments: [],
      patientprofile: {},
      new_appointment_time: '',
      new_purpose: '',
      new_doctor: ''
    };
  }

  getAppointments = () => {
    fetch(`/api/appointment/${this.props.match.params.patient_id}`)
      .then(response => response.json())
      .then(appointments => {
        this.setState({ appointments });
      })
      .catch(err => console.log(err))
  }



  componentDidMount() {
    fetch(`/api/patient/${this.props.match.params.patient_id}`)
      .then(response => response.json())
      .then(patientprofile => {
        this.setState({ patientprofile });
      })
      .catch(err => console.log(err))

    this.getAppointments();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAppointmentSubmit = (e) => {
    e.preventDefault();
    fetch('/api/appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        'patient_id': this.props.match.params.patient_id,
        'patient_name': this.state.patientprofile['name'],
        'appointment_time': this.state.new_appointment_time,
        'purpose': this.state.new_purpose,
        'doctor': this.state.new_doctor
      })
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          new_appointment_time: '',
          new_purpose: '',
          new_doctor: ''
        })
      })
      .then(() => {
        this.getAppointments();
      })
  }

  handleAppointmentCancel = (appointment_id) => {
    fetch('/api/appointment', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        'appointment_id': appointment_id
      })
    })
      .then(() => {
        this.getAppointments();
      })
      .catch(err => console.log(err))
  }

  render() {
    // console.log('*** PatientRecord rerendered', this.state)
    return (
      <div>

        <PatientProfile
          patient_id={this.state.patientprofile['patient_id']}
          name={this.state.patientprofile['name']}
          dob={this.state.patientprofile['dob']}
          email={this.state.patientprofile['email']}
          address={this.state.patientprofile['address']}
          phone={this.state.patientprofile['phone']}
        />

        {this.state.appointments.map(appointment =>
          <Appointment
            key={appointment.appointment_id}
            id={appointment.appointment_id}
            appointment_id={appointment.appointment_id}
            appointment_time={appointment.appointment_time}
            purpose={appointment.purpose}
            doctor={appointment.doctor}
            handleAppointmentCancel={this.handleAppointmentCancel}
          />
        )}

        <div className='Wrapper'>
          <h2>Schedule an Appointment</h2>
          <form onSubmit={this.handleAppointmentSubmit}>
            <div className='Top'>
              <div className='Left'>
                <div>Date/Time:</div>
                <div>Purpose:</div>
                <div>Doctor:</div>
              </div>
              <div className='Right'>
                <input type='text' name='new_appointment_time' value={this.state.new_appointment_time} onChange={this.handleChange} />
                <input type='text' name='new_purpose' value={this.state.new_purpose} onChange={this.handleChange} />
                <input type='text' name='new_doctor' value={this.state.new_doctor} onChange={this.handleChange} />
              </div>
            </div>
            <div className='Bottom'>
              <button id='submit-button' value="Submit">submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

} 