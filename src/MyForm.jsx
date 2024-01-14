import React, { useState } from "react";
import axios from "axios";

const MyForm = () => {
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
    } catch (error) {
      console.error("Error sending OTP:", error.message);
    }

    // try {
    //   const response = await fetch("http://localhost:8000/Gmail", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       userEmail: formData.userEmail,
    //     }),
    //   });

    //   const data = await response.json();
    //   console.log(data.msg);
    // } catch (error) {
    //   console.error("Error sending OTP:", error.message);
    // }
  };

  return (
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
  );
};

export default MyForm;