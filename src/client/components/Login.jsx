import React from 'react';

const Login = ({ username, password, handleChange, handleLogin }) => {

  return (
    <div className='Login'>
      <form onSubmit={handleLogin}>
        <input type='text' name='username' placeholder='username' value={username} onChange={handleChange} />
        <input type='text' name='password' placeholder='password' value={password} onChange={handleChange} />
        <button id='submit-button' value="Submit">submit</button>
      </form>
    </div>
  )

};

export default Login;