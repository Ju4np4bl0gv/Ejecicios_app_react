import React, { useState } from "react";

export const FormulariosHooks = (inictialForm) => {
  const [dataLoging, setdataLoging] = useState(inictialForm);
  const { email, password } = dataLoging;
  const onSaveForm = ({ target }) => {
    setdataLoging({ ...dataLoging, [target.name]: target.value });
  };



  return {onSaveForm, email, password};
};
