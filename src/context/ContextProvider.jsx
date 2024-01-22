import React, { useState } from "react";
import dataContext from "./datacontext";
const ContextProvider = (props) => {
    const [otpgot, setOtpGot] = useState('');
  return (
    <div>
      <dataContext.Provider
        value={{
            otpgot, setOtpGot
          
        }}
      >
        {props.children}
      </dataContext.Provider>
    </div>
  );
};

export default ContextProvider;
