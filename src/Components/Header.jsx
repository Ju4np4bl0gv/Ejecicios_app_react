import React, { useContext, useState } from "react";
import { TemperaturaDatos } from "./TemperaturaDatos";
import { TemperaturaContext } from "../Context/TemperaturaContext";
import { useLocation } from "react-router-dom";
import { buscar } from "../Hooks/buscar";
import { BuscardorHeader } from "../Pages/BuscardorHeader";

export const Header = () => {
  const [ciudad2, setciudad2] = useState("");
  const key = "3b7241a0ef4e1394a11b8bf4e886e838";
  const location = useLocation();

  const { setvalorBuscar } = useContext(TemperaturaContext);

  const { setTemperatura } = useContext(TemperaturaContext);
  const { setciudad } = BuscardorHeader();

  const inputSearch = ({ target }) => {
    setciudad2(target.value);
  };

  const buscarCiudad = async () => {
    if (ciudad2.length > 0 && location.pathname === "/")
      try {
        const respuestaApi = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${ciudad2}&appid=${key}`
        );
        const dataJson = await respuestaApi.json();
        setTemperatura(dataJson);
      } catch (error) {
        console.error("sucedio un error " + error);
      }
    else setvalorBuscar(ciudad2);
  };

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Clima Ciudades
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Buscar ciudad"
          aria-label="Search"
          onChange={inputSearch}
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#" onClick={buscarCiudad}>
              Buscar
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
