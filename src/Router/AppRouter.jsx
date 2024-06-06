// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 15/05/2024      #
//   --# Descripcion General : Componente principal de ruta                           #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Se cambio el provider                                  #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->

import {GeoBookerRuta} from "../GeoBooker/Routes/GeoBookerRuta.jsx";
import {MainProvider} from "../GeoBooker/Context/Index.js";

/**
 * Para posibles rutas que esten de alguna manera relacionadas con la aplicación pero fuera de la misma
 * se pueden manejar aquí.
 * @returns {JSX.Element}
 * @constructor
 */
export const AppRouter = () => {

    /*
        Main provider se proporciona en este nivel para que pueda ser utilizado
        en cualquier parte de la aplicación.
     */

    // INICIO CAMBIO GSS-050624
    return (
        <MainProvider>
                <GeoBookerRuta/>
        </MainProvider>
    )
    // FIN CAMBIO GSS-050624

}
