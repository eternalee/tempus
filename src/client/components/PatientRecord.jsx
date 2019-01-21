import React, { Component } from 'react';
import Appointment from './Appointment.jsx';
import PatientProfile from './PatientProfile.jsx';

class PatientRecord extends React.Component {
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

  componentDidMount() {
    fetch(`/api/patient/${this.props.patient_id}`)
      .then(response => response.json())
      .then(patientprofile => {
        this.setState({ patientprofile });
      })
      .catch(err => console.log(err))

    fetch(`/api/appointment/${this.props.patient_id}`)
      .then(response => response.json())
      .then(appointments => {
        console.log('appointments:', appointments)
        this.setState({ appointments });
      })
      .catch(err => console.log(err))

    console.log(this.state)
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAppointmentSubmit = (e) => {
    fetch('/api/appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        'patient_id': this.props.patient_id,
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
        });
      });
    e.preventDefault();
  }

  handleAppointmentCancel = (appointment_id) => {
    fetch('/api/appointment', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        'appointment_id': appointment_id
      })
    })
      .then(() => alert('successfully canceled appointment'))
      .catch(err => console.log(err))
  }

  render() {
    console.log('*** PatientRecord rerendered')
    return (
      <div>
        <div>
          <h1>{this.props.usertype} {this.props.patient_id}</h1>
          <PatientProfile
            patient_id={this.state.patientprofile['patient_id']}
            name={this.state.patientprofile['name']}
            dob={this.state.patientprofile['dob']}
            email={this.state.patientprofile['email']}
            address={this.state.patientprofile['address']}
            phone={this.state.patientprofile['phone']}
          />
        </div>
        <div>
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
        </div>
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

} export default PatientRecord;