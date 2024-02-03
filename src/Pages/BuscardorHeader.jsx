import React, { useState } from "react";

export const BuscardorHeader = () => {
  const [ciudad, setciudad] = useState("");

  return {
    ciudad,
    setciudad,
  };
};
