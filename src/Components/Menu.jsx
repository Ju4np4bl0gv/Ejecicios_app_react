import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/" className="nav-link " aria-current="page">
                <span data-feather="home"></span>
                Clima
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Movies">
                <span data-feather="file"></span>
                Peliculas
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
