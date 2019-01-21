import React from 'react';

const PatientProfile = ({ name, patient_id, dob, email, address, phone }) => {

  return (
    <div className='PatientProfile' >
      <p>Name: {name}</p>
      <p>Id: {patient_id}</p>
      <p>Age: {dob}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
    </div>
  )
};

export default PatientProfile;