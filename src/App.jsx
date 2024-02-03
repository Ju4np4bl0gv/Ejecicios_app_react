import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Menu } from "./Components/Menu";
import { Cuerpo } from "./Components/Cuerpo";
import { CredencialesProvider } from "./Context/CredencialesProvider";
import { TemperaturaProvider } from "./Context/TemperaturaProvider";

function App() {



  return (
    <TemperaturaProvider>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <Cuerpo />
        </div>
      </div>
    </TemperaturaProvider>
  );
}

export default App;
