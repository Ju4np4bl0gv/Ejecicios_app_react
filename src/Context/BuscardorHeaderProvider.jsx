import React, { useState } from "react";
import { BuscardorHeaderContext } from "./BuscardorHeaderContext";

export const BuscardorHeaderProvider = ({ children }) => {

const [valorBuscar, setvalorBuscar] = useState(second)

  return (
    <BuscardorHeaderContext.Provider value={{valorBuscar, setvalorBuscar}}>
      {children}
    </BuscardorHeaderContext.Provider>
  );
};
