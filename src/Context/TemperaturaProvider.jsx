import React, { useState } from "react";
import { TemperaturaContext } from "./TemperaturaContext";

export const TemperaturaProvider = ({ children }) => {

    const [Temperatura, setTemperatura] = useState(null)
    const [valorBuscar, setvalorBuscar] = useState('Jack+Reache')


  return (
    <TemperaturaContext.Provider value={{Temperatura, setTemperatura, valorBuscar, setvalorBuscar}}>
      {children}
    </TemperaturaContext.Provider>
  );
};
