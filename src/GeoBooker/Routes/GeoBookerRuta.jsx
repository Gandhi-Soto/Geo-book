// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 15/05/2024      #
//   --# Descripcion General : Componente que define las rutas dentro de la pagina    #
//   ---------------------------------------------------------------------------------#-->

import {Navigate, Route, Routes} from "react-router-dom";
import {GeoBookerPagina} from "../Pages/GeoBookerPagina.jsx";
import {DesplegarModales} from "../Components/Modal/Index.js";
import {useContext} from "react";
import {ModalContext} from "../Context/Index.js";

export const GeoBookerRuta = () => {

    const {
        mostrarInicioCookiesModal,
        mostrarAdministradorDeCookiesModal,
        mostrarPoliticasDeUsoDeCookiesModal,
        mostrarDerechosReservadosModal
    } = useContext(ModalContext);

    const mostrandoUnModal =
        mostrarInicioCookiesModal ||
        mostrarAdministradorDeCookiesModal ||
        mostrarPoliticasDeUsoDeCookiesModal ||
        mostrarDerechosReservadosModal;

    return (

        <>

            { mostrandoUnModal && <DesplegarModales/> }

            <Routes>
                <Route path='/' element={ <GeoBookerPagina /> }/>
                <Route path='*' element={ <Navigate to='/' /> }/>
            </Routes>
        </>

    )
}
