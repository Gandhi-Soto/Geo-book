// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 15/05/2024      #
//   --# Descripcion General : Componente de la pagina principal                      #
//   ---------------------------------------------------------------------------------#-->
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 31/05/2024                                             #
//   --# Modificacion        : Se agrego el componente quienes somos                  #
//   --# Marca de cambio     : GSS-310524                                             #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 31/05/2024                                             #
//   --# Modificacion        : Se agregó el componente del registro                   #
//   --# Marca de cambio     : BCMC-310524                                            #
//   ---------------------------------------------------------------------------------#-->

//INICIO DE CAMBIO: BCMC-310524
//Esenciales
import {useContext} from "react";
import { FormContext } from '../Context/Index.js';
//FIN DE CAMBIO: BCMC-310524

import {GeoBooker, QuienesSomos} from "../Views/GeoBookerPagina/Index.js";
//INICIO DE CAMBIO: BCMC-310524
import Formulario from "../Views/GeoBookerPagina/Formulario.jsx";
import FormTerminado from "../Views/GeoBookerPagina/FormTerminado.jsx";
//FIN DE CAMBIO: BCMC-310524

export const GeoBookerPagina = () => {
    //INICIO DE CAMBIO: BCMC-310524
    const { formTerminado } = useContext(FormContext);
    //FIN DE CAMBIO: BCMC-310524

    return (
        <>
            <GeoBooker />
            {/*INICIO CAMBIO GSS-310524*/}
            <QuienesSomos />
            {/*FIN CAMBIO GSS-310524*/}

            {/* INICIO DE CAMBIO: BCMC-310524 */}
            {formTerminado === 'true' ? <FormTerminado /> : <Formulario/>}
            {/* FIN DE CAMBIO: BCMC-310524 */}
        </>

    )
}
