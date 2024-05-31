// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 14/05/2024      #
//   --# Descripcion General : Renderizacion de la aplicacion                         #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 31/05/2024                                             #
//   --# Modificacion        : Se agregó el componente del registro                   #
//   --# Marca de cambio     : BCMC-310524                                            #
//   ---------------------------------------------------------------------------------#-->

import React from 'react'
import ReactDOM from 'react-dom/client'
import {GeoBookerApp} from "./GeoBookerApp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
//INICIO DE CAMBIO: BCMC-310524
import { FormProvider, BreakpointsProvider } from "./GeoBooker/Context/Index.js";
//FIN DE CAMBIO: BCMC-310524


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          {/*INICIO DE CAMBIO: BCMC-310524*/}
          <FormProvider>
            <BreakpointsProvider>
              <GeoBookerApp />
            </BreakpointsProvider>
          </FormProvider>
          {/*FIN DE CAMBIO: BCMC-310524*/}
      </BrowserRouter>
  </React.StrictMode>,
)
