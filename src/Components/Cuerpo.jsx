import React from "react";
import { Graficas } from "./Graficas";
import TableInform from "./TableInform";
import { Order } from "../Pages/Order";
import { Customers } from "../Pages/Customers";
import { Products } from "../Pages/Products";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loging } from "../Pages/Loging";
import { ListCreden } from "../Pages/ListCreden";
import { Clima } from "../Pages/Clima";
import { TemperaturaDatos } from "./TemperaturaDatos";
import { TemperaturaProvider } from "../Context/TemperaturaProvider";
import { Peliculas } from "../Pages/Peliculas";

export const Cuerpo = () => {
  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2"> Ejercicios</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Share
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Export
              </button>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <span data-feather="calendar"></span>
              This week
            </button>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<TemperaturaDatos />}> </Route>
          <Route path="/Movies" element={<Peliculas />}> </Route>
        </Routes>
        
      </main>
    </>
  );
};
