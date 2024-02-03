import React, { useContext, useEffect } from "react";
import { MoviesHook } from "../Hooks/MoviesHook";
import { buscar } from "../Hooks/buscar";
import { BuscardorHeader } from "./BuscardorHeader";
import { TemperaturaContext } from "../Context/TemperaturaContext";
export const Peliculas = () => {
  const urlBase = "https://api.themoviedb.org/3/search";
  const Apli_key = "024bd3ba9aa0d86e0e9288fd3cea01c9";
  const buscar = "/aquaman";

  const { valorBuscar } = useContext(TemperaturaContext);

  const { FilterPeliculas } = MoviesHook(urlBase, valorBuscar, Apli_key);
  const { datos, inform } = FilterPeliculas;

  return (
    <>
      {inform ? (
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {datos?.results.map((item) => (
                <div className="col" key={item.id}>
                  <div className="card shadow-sm">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title}
                    />

                    <div className="card-body">
                      <h5>{item.title}</h5>
                      <p className="card-text">{item.overview} </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div>
                        <small className="text-muted">
                          {item.release_date}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h4 className="sinInfroa">Sin informacón</h4>
      )}
    </>
  );
};
