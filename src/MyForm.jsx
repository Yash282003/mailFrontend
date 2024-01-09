import React, { useState } from "react";
import axios from "axios";

const MyForm = () => {
  const [formData, setFormData] = useState({
    email: "",
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
    console.log(formData)
    try {
      const response = await axios.post("http://localhost:8000/Gmail", {
        email: formData.email,
      });

      console.log(response.data.msg);
    } catch (error) {
      console.error("Error sending OTP:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Send OTP</button>
    </form>
  );
};

export default MyForm;