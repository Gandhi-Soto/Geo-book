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
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Se agrega la animacion a las cajitas                   #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->
// <!--################################################################################
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Se hicieron cambios en la estructura para mostrar los  #
//                             elementos correspondientes segun el breakpoint         #
//   --# Marca de cambio     : BCMC-110624                                            #
//   ---------------------------------------------------------------------------------#-->

import { Box, Grid, useTheme } from "@mui/material";
import { ImagenDeFondo, LogoGeoBooker, ImagenDeFondoWeb } from '../../../assets/GeoBooker/Index.js'
// INICIO CAMBIO GSS-310524
import { CirculosDeServicios } from "./CirculosDeServicios.jsx";
import { CajitaAmarilla } from "../../UtilComponents/Index.js";
import {
    TypographyLargeText,
    TypographySmallTitle
} from "../../Theme/index.js";
// FIN CAMBIO GSS-310524
import { useContext } from "react";
import { BreakpointsContext } from "../../Context/Index.js";

/**
 * Despliega la primera vista que tiene el usuario al ingresar a la aplicación.
 * @returns {JSX.Element}
 * @constructor
 */

export const GeoBooker = () => {

    const theme = useTheme();

    const { isWeb } = useContext(BreakpointsContext);

    return (
        <>
            {/* INICIO DE CAMBIO: BCMC-110624 */}
            <Box
                sx={{
                    height: "45rem",
                    backgroundImage: `url(${ImagenDeFondo})`, // Reemplaza esto con la ruta a tu imagen
                    backgroundRepeat: "no-repeat",
                    // INICIO CAMBIO GSS-310524
                    backgroundSize: "cover",
                    // FIN CAMBIO GSS-310524

                    backgroundPosition: "center",
                    [theme.breakpoints.up('smallMobileSize')]: {
                        height: "55rem",
                    },
                    [theme.breakpoints.up('mediumMobileSize')]: {
                        height: "57rem",
                    },
                    [theme.breakpoints.up('defaultWebSize')]: {
                        display: "none"
                    }
                }}
            >
                <Grid container
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <Grid item defaultMobileSize={10} mt={2} defaultWebSize={8}>
                        <img src={LogoGeoBooker} alt="Logo de GeoBooker" />
                    </Grid>

                    {/*INICIO CAMBIO GSS-310524*/}
                    <Grid item defaultMobileSize={12} mt={2} 
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <TypographyLargeText sx={{ color: 'white' }}>
                            Si eres dueño de un negocio como:
                        </TypographyLargeText>
                    </Grid>

                    <Grid item defaultMobileSize={10} mt={2} mb={0.5}>
                        <CirculosDeServicios />
                    </Grid>

                    <Grid item defaultMobileSize={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TypographySmallTitle sx={{ color: 'white' }} >
                            SIN IMPORTAR SU GIRO O TAMAÑO
                        </TypographySmallTitle>
                    </Grid>

                { /*INICIO CAMBIO GSS-050624*/}
                <Grid item defaultMobileSize={12} mt='0.5rem' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <CajitaAmarilla
                        sx={{width: '18rem', height: '0.7rem'}}
                        animacionDeAnimateCss='animate__slideInLeft'
                    />
                </Grid>
                { /*INICIO CAMBIO GSS-050624*/}

                {/*FIN CAMBIO GSS-310524*/}


                </Grid>

            </Box>

            <Box
                sx={{
                    display: "none",
                    [theme.breakpoints.up('defaultWebSize')]: {
                        display: "block"
                    }
                }}
            >
                <Box fullWidth className="d-flex justify-content-center py-5"
                    sx={{
                        [theme.breakpoints.up('defaultWebSize')]: {
                            backgroundImage: `url(${ImagenDeFondoWeb})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }
                    }}
                >
                    <img src={LogoGeoBooker} alt="Logo de GeoBooker" className="w-50 my-4" />
                </Box>

                <Grid container
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >

                    {/*INICIO CAMBIO GSS-310524*/}
                    <Grid item defaultMobileSize={12} mt={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TypographyLargeText 
                            sx={{ 
                                color: 'white',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    color: "black",
                                }
                            }}
                        >
                            Si eres dueño de un negocio como:
                        </TypographyLargeText>
                    </Grid>

                    <Grid item defaultMobileSize={10} mt={2} mb={0.5}>
                        <CirculosDeServicios />
                    </Grid>

                    <Grid item defaultMobileSize={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TypographySmallTitle 
                            sx={{ 
                                color: 'white',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    color: "black",
                                    fontWeight: "bold",
                                }
                            }} 
                        >
                            SIN IMPORTAR SU GIRO O TAMAÑO
                        </TypographySmallTitle>
                    </Grid>

                    <Grid item defaultMobileSize={12} mt='0.5rem' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CajitaAmarilla sx={{ width: '18rem', height: '0.7rem' }} />
                    </Grid>
                    {/*FIN CAMBIO GSS-310524*/}


                </Grid>

            </Box>
            {/* FIN DE CAMBIO: BCMC-110624 */}
        </>
    );
};
