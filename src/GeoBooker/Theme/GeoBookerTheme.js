// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 22/05/2024      #
//   --# Descripcion General : Tema de la pagina                                      #
//   ---------------------------------------------------------------------------------#-->
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 31/05/2024                                             #
//   --# Modificacion        : Se agrearon breakpoints y cambios al estilo            #
//   --# Marca de cambio     : GSS-310524                                             #
//   ---------------------------------------------------------------------------------#-->


import {createTheme} from "@mui/material";

export const GeoBookerTheme = createTheme({
    // INICIO CAMBIO GSS-310524
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    // FIN CAMBIO GSS-310524

    palette:{
        // INICIO CAMBIO GSS-310524
        primary:{
            main: '#F3DC2A'
        },
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