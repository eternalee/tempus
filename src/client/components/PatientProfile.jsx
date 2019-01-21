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
      <p>Name: {name}</p>
      <p>Id: {patient_id}</p>
      <p>Age: {calculateAge(dob)}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
    </div >
  )
};

export default PatientProfile;