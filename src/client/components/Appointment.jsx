import React from 'react';

const Appointment = ({ appointment_id, appointment_time, purpose, doctor, status, declined_reason, handleAppointmentCancel, handleAppointmentDecline, usertype }) => {

  let today = new Date();

  if (usertype === 'doctor') {
    return (
      <div className='Appointment' >
        <p>Appointment Time: {appointment_time}</p>
        <p>Purpose: {purpose}</p>
        <p>Doctor: {doctor}</p>
        {new Date(appointment_time) > today ? (<p>Status: {status}</p>) : (<p>Status: PAST/EXPIRED</p>)}
        {declined_reason === null ? '' : (<p>Declined Reason: {declined_reason}</p>)}
        {new Date(appointment_time) > today ? (<button onClick={(e) => handleAppointmentDecline(appointment_id)}>decline</button>) : ('')}
      </div>
    )
  } else {
    return (
      <div className='Appointment' >
        <p>Appointment Time: {appointment_time}</p>
        <p>Purpose: {purpose}</p>
        <p>Doctor: {doctor}</p>
        {new Date(appointment_time) > today ? (<p>Status: {status}</p>) : (<p>Status: PAST/EXPIRED</p>)}
        {declined_reason === null ? '' : (<p>Declined Reason: {declined_reason}</p>)}
        {new Date(appointment_time) > today ? (<button onClick={(e) => handleAppointmentCancel(appointment_id)}>cancel</button>) : ('')}
      </div>
    )
  }
}

export default Appointment;