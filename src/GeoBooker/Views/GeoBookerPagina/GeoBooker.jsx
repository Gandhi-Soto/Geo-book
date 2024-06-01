// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 23/05/2024      #
//   --# Descripcion General : 1er componente que se muestra en la pagina principal   #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 31/05/2024                                             #
//   --# Modificacion        : Se termino el componente                               #
//   --# Marca de cambio     : GSS-310524                                             #
//   ---------------------------------------------------------------------------------#-->

import {Box, Grid} from "@mui/material";
import {ImagenDeFondo, LogoGeoBooker } from '../../../assets/GeoBooker/Index.js'
// INICIO CAMBIO GSS-310524
import {CirculosDeServicios} from "./CirculosDeServicios.jsx";
import {CajitaAmarilla} from "../../UtilComponents/Index.js";
import {
    TypographyLargeText,
    TypographySmallTitle
} from "../../Theme/index.js";
// FIN CAMBIO GSS-310524

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
                // INICIO CAMBIO GSS-310524
                backgroundSize: "cover",
                // FIN CAMBIO GSS-310524

                backgroundPosition: "center",
            }}
        >
            <Grid container
                  sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
            >
                <Grid item xs={10} mt={2}>
                    <img src={LogoGeoBooker} alt="Logo de GeoBooker"/>
                </Grid>

                {/*INICIO CAMBIO GSS-310524*/}
                <Grid item xs={12} mt={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <TypographyLargeText sx={{ color: 'white' }}>
                        Si eres dueño de un negocio como:
                    </TypographyLargeText>
                </Grid>

                <Grid item xs={10} mt={2} mb={0.5}>
                    <CirculosDeServicios />
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <TypographySmallTitle sx={{ color: 'white'}} >
                        SIN IMPORTAR SU GIRO O TAMAÑO
                    </TypographySmallTitle>
                </Grid>

                <Grid item xs={12} mt='0.5rem' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CajitaAmarilla sx={{ width: '18rem', height: '0.7rem'}}/>
                </Grid>
                {/*FIN CAMBIO GSS-310524*/}


            </Grid>

        </Box>
    );
};
