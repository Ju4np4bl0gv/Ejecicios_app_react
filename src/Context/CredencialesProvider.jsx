import React, { useState } from "react";
import { CredencialesContext } from "./CredencialesContext";

export const CredencialesProvider = ({ children }) => {

    const [listCredenciales, setlistCredenciales] = useState({
        email: "Anax776@gmail.com",
        password: "12345",
      })

  return (
    <CredencialesContext.Provider value={{ listCredenciales, setlistCredenciales }}>
      {children}
    </CredencialesContext.Provider>
  );
};
