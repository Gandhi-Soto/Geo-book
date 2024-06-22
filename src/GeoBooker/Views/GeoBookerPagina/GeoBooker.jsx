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
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 13/06/2024                                             #
//   --# Modificacion        : Estilos responsivos para textos y cajita amarilla      #
//   --# Marca de cambio     : BCMC-130624                                            #
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

/**
 * Despliega la primera vista que tiene el usuario al ingresar a la aplicación.
 * @returns {JSX.Element}
 * @constructor
 */

export const GeoBooker = () => {

    const theme = useTheme();

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
                        // height: "55rem",
                    },
                    [theme.breakpoints.up('mediumMobileSize')]: {
                        height: "45rem",
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
                <Box className="d-flex justify-content-center py-5"
                    sx={{
                        [theme.breakpoints.up('defaultWebSize')]: {
                            backgroundImage: `url(${ImagenDeFondoWeb})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }
                    }}
                >
                    {/* INICIO DE CAMBIO: BCMC-130624 */}
                    <img src={LogoGeoBooker} alt="Logo de GeoBooker" className="w-50 my-4 py-3" />
                    {/* FIN DE CAMBIO: BCMC-130624 */}
                </Box>

                <Grid container
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >

                    {/*INICIO CAMBIO GSS-310524*/}
                    {/* INICIO DE CAMBIO: BCMC-130624 */}
                    <Grid item defaultMobileSize={12} mt={2} 
                        sx={{ 
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            [theme.breakpoints.up('defaultWebSize')]: {
                                marginTop: '3rem',
                                marginBottom: '1rem'
                            }
                        }}
                    >
                    {/* FIN DE CAMBIO: BCMC-130624 */}
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
                        {/* INICIO DE CAMBIO: BCMC-130624 */}
                        <TypographySmallTitle 
                            sx={{ 
                                color: 'white',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    color: "black",
                                    fontWeight: "bold",
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    marginTop: '1rem'
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    marginTop: '1.5rem'
                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    marginTop: '2rem'
                                }
                            }} 
                        >
                            SIN IMPORTAR SU GIRO O TAMAÑO
                        </TypographySmallTitle>
                        {/* FIN DE CAMBIO: BCMC-130624 */}
                    </Grid>

                    <Grid item defaultMobileSize={12} mt='0.5rem' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* INICIO CAMBIO: BCMC-130624 */}
                        <CajitaAmarilla 
                            sx={{ 
                                width: '26rem', height: '0.7rem',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: '30rem',
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    width: '34rem',
                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    width: '37rem',
                                },
                                [theme.breakpoints.up('wideWebSize')]: {
                                    width: '35rem',
                                    height: '1.5rem'
                                }
                            }} 
                        />
                        {/* FIN DE CAMBIO: BCMC-130624 */}
                    </Grid>
                    {/*FIN CAMBIO GSS-310524*/}


                </Grid>

            </Box>
            {/* FIN DE CAMBIO: BCMC-110624 */}
        </>
    );
};
