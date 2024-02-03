import React, { useEffect, useState } from "react";

export const MoviesHook = (urlBase, valorBuscar, Apli_key) => {
  const [FilterPeliculas, setFilterPeliculas] = useState({datos: null, inform: false});

  const fetch_API = async () => {
    try {
      const respuesta = await fetch(
        `${urlBase}/movie?query=${valorBuscar}&api_key=${Apli_key}`
      );
      const dataJson = await respuesta.json();
if(dataJson.results[0].id>0)

      setFilterPeliculas({datos: dataJson,  inform: true});
    } catch (error) {
      console.error("sucedio un error: " + error);
      setFilterPeliculas({datos: null, inform: false});
    }
  };


  useEffect(() => {
    fetch_API()
  }, [valorBuscar])
  

  return { FilterPeliculas };
};
