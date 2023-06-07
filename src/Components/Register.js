import React, { useState } from 'react';
import '../index1.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

function Signup() {
  const navigate= useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleSubmit(event) {
    // event.preventDefault();
    toast.success('Signed up successfully');
    navigate(`/`,{
      state: {
          password,
      }
  })
    // Here you can perform your sign up logic with the form inputs.
    // You can also navigate to a new page or display an error message to the user.
  }

  return (
    <div className="login-box">
      <img src={logo} alt="Logo" className="logo image-container" />
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <p className="para">Already have an account? <a href="/">Log in</a></p>
    </div>
  );
}

export default Signup;