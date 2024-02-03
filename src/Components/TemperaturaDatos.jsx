import React, { useContext } from "react";
import { TemperaturaContext } from "../Context/TemperaturaContext";

export const TemperaturaDatos = () => {
  const { Temperatura } = useContext(TemperaturaContext);

  console.log(Temperatura);
  return (
    <div>
      {Temperatura === null ? (
        <h3>Sin iformación a mostrar</h3>
      ) : (
        <>
          <h4>Ciudad {Temperatura.name}</h4>
          <p> Pais {Temperatura?.sys?.country}</p>
          <p>TimeZone {Temperatura.timezone}</p>
          <p>temperatura {Temperatura?.main?.temp}</p>
          <p>Descripción {Temperatura.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${Temperatura.weather[0].icon}@2x.png`}
          />
        </>
      )}
    </div>
  );
};
