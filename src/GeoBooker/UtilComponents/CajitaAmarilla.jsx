// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 28/05/2024      #
//   --# Descripcion General : Cajita amarilla que sirve para adornar                 #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Se agregan animaciones a las cajitas                   #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->


import {Box, useTheme} from '@mui/material';
import PropTypes from "prop-types";

// INICIO CAMBIO GSS-050624
import {UseObserve} from "../Hooks/Index.js";
import 'animate.css';
// FIN CAMBIO GSS-050624

// INICIO CAMBIO GSS-050624
export const CajitaAmarilla =
    ({
         sx,
         animacionDeAnimateCss = 'animate__fadeIn'
    }) => {
        const theme = useTheme();

        const {referencia} = UseObserve(animacionDeAnimateCss);

        return (
            <Box
                ref={referencia}
                className="initial" // Clase inicial sin animación
                sx={{
                    width: '20rem',
                    height: '1rem',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '0.5rem / 0.25rem',
                    ...sx,
                }}
            />
        );
    };
// FIN CAMBIO GSS-050624


CajitaAmarilla.propTypes = {
    sx: PropTypes.object,
    animacionDeAnimateCss: PropTypes.string
};