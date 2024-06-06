// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 23/05/2024      #
//   --# Descripcion General : Layout que define todas las paginas (pages)            #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Navbar solo se mostrara si no hay modales              #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->

import {Toolbar} from "@mui/material";
import PropTypes from "prop-types";
import {Footer, Navbar} from "../Components/Index.js";

// INICIO CAMBIO GSS-050624
import {useContext} from "react";
import {ModalContext} from "../Context/Index.js";
// FIN CAMBIO GSS-050624

/**
 * Todas las paginas (pages) deben estar dentro de este layout
 * de esta manera se asegura que el navbar y el footer esten presentes
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const GeoBookerLayout = ({children}) => {

    // INICIO CAMBIO GSS-050624
    const {
        mostrarInicioCookiesModal,
        mostrarAdministradorDeCookiesModal,
        mostrarPoliticasDeUsoDeCookiesModal,
        mostrarDerechosReservadosModal
    } = useContext(ModalContext);

    const mostrandoUnModal = mostrarInicioCookiesModal || mostrarAdministradorDeCookiesModal || mostrarPoliticasDeUsoDeCookiesModal || mostrarDerechosReservadosModal;
    // FIN CAMBIO GSS-050624

    return (
        <>
            { /* INICIO CAMBIO GSS-050624 */ }
            {
                !mostrandoUnModal &&
                <>
                    <Navbar/>
                    <Toolbar/>
                </>
            }
            { /* FIN CAMBIO GSS-050624 */ }


            {children}

            <Footer/>
        </>
    )
}

GeoBookerLayout.propTypes = {
    children: PropTypes.node
}
