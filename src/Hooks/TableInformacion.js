import React, { useEffect, useState } from "react";

const TableInformacion = (url) => {
  const [Data, setData] = useState({ dato: null, isloading: true });

  const fetchTableInform = async () => {
    const respuesta = await fetch(url);

    try {
      const ArrayApi = await respuesta.json();
      setData({ dato: ArrayApi, isloading: false });
    } catch (e) {
      setData({ dato: null, isloading: false });
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTableInform();
  }, [url]);

  return { Data };
};

export default TableInformacion;
