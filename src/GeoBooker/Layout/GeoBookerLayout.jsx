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
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Cambios en la logica para mostrar los modales          #
//   --# Marca de cambio     : GSS-110624                                             #
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
        // INICIO CAMBIO GSS-110624
    const { desplegandoUnModal } = useContext(ModalContext);
        // FIN CAMBIO GSS-110624
    // FIN CAMBIO GSS-050624

    return (
        <>
            { /* INICIO CAMBIO GSS-050624 */ }
                {/* INICIO DE CAMBIO: GSS-110624 */}
            {
                !desplegandoUnModal &&
                <>
                    <Navbar/>
                    <Toolbar/>
                </>
            }
                {/* FIN DE CAMBIO: GSS-110624 */}
            { /* FIN CAMBIO GSS-050624 */ }


            {children}

            <Footer/>
        </>
    )
}

GeoBookerLayout.propTypes = {
    children: PropTypes.node
}