import React from 'react';

const Appointment = ({ appointment_id, appointment_time, purpose, doctor, status, declined_reason, handleAppointmentCancel, handleAppointmentDecline, usertype }) => {

  let today = new Date();

  if (usertype === 'doctor') {
    return (
      <div className='Appointment' >
        <p><strong>Appointment Time:</strong> {appointment_time}</p>
        <p><strong>Purpose:</strong> {purpose}</p>
        <p><strong>Doctor:</strong> {doctor}</p>
        {new Date(appointment_time) > today ? (<p><strong>Status:</strong> {status}</p>) : (<p><strong>Status:</strong> PAST/EXPIRED</p>)}
        {declined_reason === null ? '' : (<p><strong>Declined Reason:</strong> {declined_reason}</p>)}
        {new Date(appointment_time) > today ? (<button onClick={(e) => handleAppointmentDecline(appointment_id)}>decline</button>) : ('')}
      </div>
    )
  } else {
    return (
      <div className='Appointment' >
        <p><strong>Appointment Time:</strong> {appointment_time}</p>
        <p><strong>Purpose:</strong> {purpose}</p>
        <p><strong>Doctor:</strong> {doctor}</p>
        {new Date(appointment_time) > today ? (<p><strong>Status:</strong> {status}</p>) : (<p><strong>Status:</strong> PAST/EXPIRED</p>)}
        {declined_reason === null ? '' : (<p><strong>Declined Reason:</strong> {declined_reason}</p>)}
        {new Date(appointment_time) > today ? (<button onClick={(e) => handleAppointmentCancel(appointment_id)}>cancel</button>) : ('')}
      </div>
    )
  }
}

export default Appointment;