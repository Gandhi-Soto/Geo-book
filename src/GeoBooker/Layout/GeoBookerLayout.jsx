// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 23/05/2024      #
//   --# Descripcion General : Layout que define todas las paginas (pages)            #
//   ---------------------------------------------------------------------------------#-->

import {Toolbar} from "@mui/material";
import PropTypes from "prop-types";
import {Footer, Navbar} from "../Components/Index.js";

/**
 * Todas las paginas (pages) deben estar dentro de este layout
 * de esta manera se asegura que el navbar y el footer esten presentes
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const GeoBookerLayout = ({ children }) => {

    return (
        <>
            <Navbar />
            <Toolbar />

            { children }

            <Footer />
        </>
    )
}

GeoBookerLayout.propTypes = {
    children: PropTypes.node
}
