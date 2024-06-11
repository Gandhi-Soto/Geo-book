// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 15/05/2024      #
//   --# Descripcion General : Componente que define las rutas dentro de la pagina    #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 31/05/2024                                             #
//   --# Modificacion        : Se movio el layout de GeoBooker desde aqui             #
//   --# Marca de cambio     : GSS-310524                                             #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Se cambió la lógica para mostrar los modales           #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->

import {Navigate, Route, Routes} from "react-router-dom";
import {GeoBookerPagina} from "../Pages/GeoBookerPagina.jsx";
import {DesplegarModales} from "../Components/Modal/Index.js";
import {useContext} from "react";
import {ModalContext} from "../Context/Index.js";
// INICIO CAMBIO GSS-310524
import {GeoBookerLayout} from "../Layout/Index.js";
// INICIO FIN GSS-310524


export const GeoBookerRuta = () => {

    // INICIO CAMBIO GSS-110624
    const { desplegandoUnModal } = useContext(ModalContext);
    // FIN CAMBIO GSS-110624


    return (
        <>
            {/* INICIO CAMBIO GSS-110624 */}
            {desplegandoUnModal && <DesplegarModales/>}
            {/* FIN CAMBIO GSS-110624 */}

            {/*INICIO CAMBIO GSS-310524*/}
            <GeoBookerLayout>
                <Routes>
                    <Route path='/' element={<GeoBookerPagina/>}/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            </GeoBookerLayout>
            {/*FIN CAMBIO GSS-310524*/}

        </>

    )
}