// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 28/05/2024      #
//   --# Descripcion General : Cajita amarilla que sirve para adornar                 #
//   ---------------------------------------------------------------------------------#-->

import {Box, useTheme} from "@mui/material";
import PropTypes from "prop-types";

export const CajitaAmarilla = ({ sx }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: '20rem',
                height: '1rem',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '0.5rem / 0.25rem',
                ...sx // Aplicar estilos adicionales de props.sx
            }}
        />
    );
};

CajitaAmarilla.propTypes = {
    width: PropTypes.string,
    sx: PropTypes.object
}