import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyForm from "./MyForm";
import OTPVerificationComponent from "./OtpVerify";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <Router>
      <Routes>
        {/* Render MyForm component when the root path is matched */}
        <Route exact path="/" element={<MyForm/>} />

        {/* Render OTPVerificationComponent component when "/otp-verification" is matched */}
        <Route path="/verifyOTP" element={<OTPVerificationComponent/>} />
      </Routes>
    </Router>
    </ContextProvider>
    
  );
};

export default App;
