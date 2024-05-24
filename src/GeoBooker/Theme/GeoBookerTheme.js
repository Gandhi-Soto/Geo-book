// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 22/05/2024      #
//   --# Descripcion General : Tema de la pagina                                      #
//   ---------------------------------------------------------------------------------#-->

import {createTheme} from "@mui/material";

export const GeoBookerTheme = createTheme({
    palette:{
        success:{
            main: '#4FA96D'
        },
        secondary:{
            main: '#B3B3B3'
        },
    },
    typography: {
        fontFamily: 'Nunito Sans, sans-serif',
    }
})