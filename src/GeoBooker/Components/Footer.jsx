// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 20/05/2024      #
//   --# Descripcion General : Componente del pie de pagina                           #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 31/05/2024                                             #
//   --# Modificacion        : Se cambiaron los typographies                          #
//   --# Marca de cambio     : GSS-310524                                             #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Se solucioono un problema del modal del footer         #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Estilos responsivos para todo el Footer                #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->

import {useContext} from 'react';
// INICIO CAMBIO GSS-310524
    // INICIO DE CAMBIO GSS-110624
import {Grid, Link, useMediaQuery, useTheme} from '@mui/material';
    // FIN DE CAMBIO GSS-110624
// FIN CAMBIO GSS-310524

import {ModalContext} from "../Context/Index.js";
import {PoweredBy} from '../../assets/Footer/Index.js';
import {ListaDeRedesSociales} from "./Index.js";
// INICIO CAMBIO GSS-310524
import {TypographySmallText} from "../Theme/index.js";
// FIN CAMBIO GSS-310524
import './FooterStyles.css';

// INICIO CAMBIO GSS-110624
const overrideSizes = {
    defaultMobileSize: '1rem',
    defaultWebSize: '1rem',
    smallWebSize: '1rem',
    mediumWebSize: "1rem",
}
// FIN CAMBIO GSS-110624
export const Footer = () => {
    const lugarDeTrabajoEnGoogleMaps =
        'https://www.google.com.mx/maps/place/Codigo+Geek/@19.5971178,-99.0490081,18z/data=!4m6!3m5!1s0x85d1f10fd2ab71af:0x7358aa29011bf3ba!8m2!3d19.5972794!4d-99.0479566!16s%2Fg%2F11y4q43b_v?entry=ttu'

    // INICIO CAMBIO GSS-310524
    const {setMostrarDerechosReservadosModal} = useContext(ModalContext);
    const theme = useTheme()
    // FIN CAMBIO GSS-310524

    // INICIO CAMBIO GSS-110624
    const isMediumMobileSize = useMediaQuery(theme.breakpoints.down('mediumMobileSize'));
    const isMediumWebSize = useMediaQuery(theme.breakpoints.up('mediumWebSize'));
    const columnSpacing = isMediumWebSize ? 17 : isMediumMobileSize ? 0 : 10;
    // FIN CAMBIO GSS-110624

    // INICIO CAMBIO GSS-110624
    return (
        <Grid container sx={{bgcolor: 'black', color: 'white', py: 3, display: 'flex', justifyContent: 'center'}}>
            <Grid item
                  defaultMobileSize={12}
                  sx={{
                      width: {
                          defaultMobileSize: "30.4rem",
                          smallMobileSize: "44rem",
                          mediumMobileSize: "54rem",
                      },
                      margin: "0 auto"
                  }}
            >
                <TypographySmallText sx={{color: 'white'}} >
                    Visita nuestras redes para mantenerte informado de nuestras novedades.
                </TypographySmallText>
            </Grid>

            <Grid item mt={3} defaultMobileSize={12}
                  sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ListaDeRedesSociales/>
            </Grid>

            <Grid container
                  columnSpacing={columnSpacing}
                  rowSpacing={2}
                  mt={0.5}
                  sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: {xs: 'column', md: 'row'},
                      textAlign: 'center'
                  }}
            >
                <Grid item sx={{mx: 1}} xs={12} md={4}>
                    <Link variant='body2' href={lugarDeTrabajoEnGoogleMaps} target="_blank">
                        <TypographySmallText
                            sx={{color: theme.palette.link.main}}
                            overrideSizes={ overrideSizes }
                        >
                            Av. Insurgentes 2 Bis, Centro, 55000 Ecatepec de Morelos, Méx., México
                        </TypographySmallText>
                    </Link>
                </Grid>

                <Grid item sx={{mx: 1}} xs={12} md={4}>
                    <Link href='#' onClick={(event) => {
                        event.preventDefault();
                        setMostrarDerechosReservadosModal(true);
                    }}>
                        <TypographySmallText
                            overrideSizes={ overrideSizes }
                            sx={{color: theme.palette.link.main, textAlign: 'center'}}
                        >
                            Todos los derechos reservados
                        </TypographySmallText>
                    </Link>
                </Grid>

                <Grid item sx={{mx: 1, textAlign: 'center'}} xs={12} md={4}>
                    <Link href="https://codigogeek.com.mx/" target="_blank">
                        <img
                            className='Img-Color-PoweredBy'
                            src={PoweredBy}
                            alt='Código Geek'
                            style={{maxWidth: '100px', width: '100%'}} // Controla el tamaño de la imagen
                        />
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );
    // FIN CAMBIO GSS-110624
}