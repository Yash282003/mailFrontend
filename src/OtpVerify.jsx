import React, { useState, useEffect, useContext } from 'react';
import dataContext from './context/datacontext';

const OTPVerificationComponent = () => {
  const {otpgot,setOtpGot}=useContext(dataContext)
  const [otp, setOTP] = useState('');

  // useEffect to log the updated OTP whenever it changes
 
  const handleInputChange = (event) => {
    setOTP(event.target.value);
  };

  const verifyOTP = async () => {
    console.log('OTP when button clicked:', otp);

    if (otp===otpgot) {
      alert('Verified');
      return;
    }else{
      alert('Incorrect otp')
    }

    
  };

  return (
    <div>
      <h1>OTP Verification</h1>

      <label htmlFor="otp">Enter OTP:</label>
      <input type="text" id="otp" name="otp" value={otp} onChange={handleInputChange} required />

      <button onClick={verifyOTP}>Verify OTP</button>
    </div>
  );
};

export default OTPVerificationComponent;
