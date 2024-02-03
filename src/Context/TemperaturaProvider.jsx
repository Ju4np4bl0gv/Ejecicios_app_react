import React, { useState } from "react";
import { TemperaturaContext } from "./TemperaturaContext";

export const TemperaturaProvider = ({ children }) => {

    const [Temperatura, setTemperatura] = useState(null)

  return (
    <TemperaturaContext.Provider value={{Temperatura, setTemperatura}}>
      {children}
    </TemperaturaContext.Provider>
  );
};
