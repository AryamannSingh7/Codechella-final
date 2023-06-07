import React, { useState } from 'react';
import '../index1.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
// import bg from '../assets/bg.png';

function ForgotPassword() 
{
  const [email, setEmail] = useState('');
  const navigate= useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);

  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  const goLogin=(e)=>{
    toast.success('Password changed successfully');
    navigate(`/`,{
      state: {
          password,
      }
  })
  }
    // Here you can perform your forgot password logic with the email input.
    // You can also display a success message to the user or navigate to a new page.

  return (
    <>
    <div className="login-box">
        <img src={logo} alt="Logo" className="logo image-container" />
        <h1>FORGOT PASSWORD</h1>
        <form onSubmit={goLogin}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
          Enter New Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label>
        <button type="submit">Submit</button>
        </form>
    </div>
    </>
  );
}

export default ForgotPassword;