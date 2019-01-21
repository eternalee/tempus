import React from 'react';

const PatientProfile = ({ patient_id, name, dob, email, address, phone }) => {

  return (
    <div className='PatientProfile' >
      <p>Id: {patient_id}</p>
      <p>Name: {name}</p>
      <p>Age: {dob}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
    </div>
  )
};

export default PatientProfile;