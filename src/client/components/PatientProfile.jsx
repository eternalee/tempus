import React from 'react';

let calculateAge = (dob) => {
  if (dob !== undefined) {
    let dob2 = new Date(dob.replace(/-/g, "/"));
    let today = new Date();
    let years = today.getFullYear() - dob2.getFullYear();
    if (today.getMonth() < dob2.getMonth() ||
      today.getMonth() == dob2.getMonth() && today.getDate() < dob2.getDate()) {
      years--;
    }
    return years;
  }
}

const PatientProfile = ({ name, patient_id, dob, email, address, phone }) => {

  return (
    <div className='PatientProfile' >
      <p>Name:<strong> {name}</strong></p>
      <p>ID:<strong> {patient_id}</strong></p>
      <p>Age:<strong> {calculateAge(dob)}</strong></p>
      <p>Email:<strong> {email}</strong></p>
      <p>Address:<strong> {address}</strong></p>
      <p>Phone:<strong> {phone}</strong></p>
    </div >
  )
};

export default PatientProfile;