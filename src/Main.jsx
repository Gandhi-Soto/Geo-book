// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 14/05/2024      #
//   --# Descripcion General : Renderizacion de la aplicacion                         #
//   ---------------------------------------------------------------------------------#-->

import React from 'react'
import ReactDOM from 'react-dom/client'
import {GeoBookerApp} from "./GeoBookerApp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <GeoBookerApp />
      </BrowserRouter>
  </React.StrictMode>,
)
