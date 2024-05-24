// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 23/05/2024      #
//   --# Descripcion General : 1er componente que se muestra en la pagina principal   #
//   ---------------------------------------------------------------------------------#-->

import {Box, Grid} from "@mui/material";
import {ImagenDeFondo, LogoGeoBooker} from '../../../assets/GeoBooker/Index.js'

/**
 * Despliega la primera vista que tiene el usuario al ingresar a la aplicación.
 * @returns {JSX.Element}
 * @constructor
 */

export const GeoBooker = () => {
    return (
        <Box
            sx={{
                height: "50rem",
                backgroundImage: `url(${ImagenDeFondo})`, // Reemplaza esto con la ruta a tu imagen
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
            }}
            style={{position: "relative"}}
        >
            <Grid container
                  sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
            >
                <Grid item xs={10} mt={2}>
                    <img src={LogoGeoBooker} alt="Logo de GeoBooker"/>
                </Grid>

            </Grid>

        </Box>
    );
};
