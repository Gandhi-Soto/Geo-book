// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 23/05/2024      #
//   --# Descripcion General : Componente que agrega el tema de la pagina             #
//   ---------------------------------------------------------------------------------#-->

import {CssBaseline, ThemeProvider} from "@mui/material";
import {GeoBookerTheme} from "./GeoBookerTheme.js";
import PropTypes from "prop-types";

export const AppTheme = ({ children }) => {
    return(
        <ThemeProvider theme={ GeoBookerTheme }>

            <CssBaseline />
            { children }
        </ThemeProvider>
    )
}

AppTheme.propTypes = {
    children: PropTypes.node.isRequired
}