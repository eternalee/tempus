import React from 'react';

const Appointment = ({ appointment_time, purpose, doctor, appointment_id, handleAppointmentCancel }) => {

  return (
    <div className='Appointment' >
      <p>Appointment Time: {appointment_time}</p>
      <p>Purpose: {purpose}</p>
      <p>Doctor: {doctor}</p>
      <button onClick={(e) => handleAppointmentCancel(appointment_id)}>cancel</button>
    </div>
  )
};

export default Appointment;