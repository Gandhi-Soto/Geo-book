// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 22/05/2024      #
//   --# Descripcion General : Tema de la pagina                                      #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 31/05/2024                                             #
//   --# Modificacion        : Se agregaron breakpoints y cambios al estilo           #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Cambios en la paleta de colores primario y secundario  #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->


import {createTheme} from "@mui/material";

export const GeoBookerTheme = createTheme({
    // INICIO CAMBIO GSS-310524
    breakpoints: {
        values: {
            defaultMobileSize: 0,
            smallMobileSize: 480,
            mediumMobileSize: 600,
            defaultWebSize: 768,
            smallWebSize: 992,
            mediumWebSize: 1200,
            largeWebSize: 1400,
            wideWebSize: 2400
        },
    },
    // FIN CAMBIO GSS-310524

    palette:{
        // INICIO CAMBIO GSS-310524
            // INICIO DE CAMBIO GSS-110624
        primary:{
            main: '#5558C4',
            secondary: '#F3DC2A'
        },
            // FIN DE CAMBIO GSS-110624
        // FIN CAMBIO GSS-310524

        success:{
            main: '#4FA96D'
        },
        secondary:{
            main: '#B3B3B3'
        },

        // INICIO CAMBIO GSS-310524
        link: {
            main: '#0D99FF'
        }
        // FIN CAMBIO GSS-310524

    },
    typography: {
        fontFamily: 'Nunito Sans, sans-serif',
    },

    // INICIO CAMBIO GSS-310524
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#0D99FF',
                    textDecorationColor: '#0D99FF', // Añade esta línea
                },
            },
        },
    },
    // FIN CAMBIO GSS-310524

})