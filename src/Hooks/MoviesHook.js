import React, { useEffect, useState } from "react";

export const MoviesHook = (urlBase, buscar, Apli_key) => {
  const [FilterPeliculas, setFilterPeliculas] = useState(null);

  const fetch_API = async () => {
    try {
      const respuesta = await fetch(
        `${urlBase}/movie?query=${buscar}&api_key=${Apli_key}`
      );
      const dataJson = await respuesta.json();
      setFilterPeliculas(dataJson);
    } catch (error) {
      console.error("sucedio un error: " + error);
    }
  };


  useEffect(() => {
    fetch_API()
  }, [])
  

  return { FilterPeliculas };
};
