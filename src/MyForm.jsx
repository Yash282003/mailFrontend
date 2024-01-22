import React, { useContext, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import dataContext from "./context/datacontext";

const MyForm = () => {
  const navigate = useNavigate();
  const {otpgot,setOtpGot} = useContext(dataContext)
  const [formData, setFormData] = useState({
    userEmail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.userEmail)
    alert("You should receive an email with the OTP...");
    try {
      const response = await axios.post("http://localhost:8000/Gmail", {
        userEmail: formData.userEmail,
      });

      console.log(response.data.msg);

      const otpFromServer = response.data.otp;
      console.log("OTP from server:", otpFromServer);
      setOtpGot(otpFromServer);

      navigate("/verifyOTP");
    } catch (error) {
      console.error("Error sending OTP:", error.message);
    }
  };
  return (<>
  <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="userEmail"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit" >Send OTP</button>
     
    </form>
    </>
    
    
  );
};

export default MyForm;