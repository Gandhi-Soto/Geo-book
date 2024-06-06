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

import {useContext} from 'react';
// INICIO CAMBIO GSS-310524
import {Box, Container, Grid, Link, useTheme} from '@mui/material';
// FIN CAMBIO GSS-310524

import {ModalContext} from "../Context/Index.js";
import {PoweredBy} from '../../assets/Footer/Index.js';
import {ListaDeRedesSociales} from "./Index.js";
// INICIO CAMBIO GSS-310524
import {TypographySmallText} from "../Theme/index.js";
// FIN CAMBIO GSS-310524
import './FooterStyles.css';

export const Footer = () => {
    const lugarDeTrabajoEnGoogleMaps =
        'https://www.google.com.mx/maps/place/Codigo+Geek/@19.5971178,-99.0490081,18z/data=!4m6!3m5!1s0x85d1f10fd2ab71af:0x7358aa29011bf3ba!8m2!3d19.5972794!4d-99.0479566!16s%2Fg%2F11y4q43b_v?entry=ttu'

    // INICIO CAMBIO GSS-310524
    const {setMostrarDerechosReservadosModal} = useContext(ModalContext);
    const theme = useTheme()
    // FIN CAMBIO GSS-310524

    return (
        <Box sx={{bgcolor: 'black', color: 'white', py: 3}}>
            <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                         {/*INICIO CAMBIO GSS-310524*/}
                        <TypographySmallText sx={{ color: 'white' }} >
                            Visita nuestras redes para mantenerte informado de nuestras novedades.
                        </TypographySmallText>
                        {/*FIN CAMBIO GSS-310524*/}
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ListaDeRedesSociales/>
                    </Grid>

                    <Grid item xs={12}>
                        <Link href={ lugarDeTrabajoEnGoogleMaps } target="_blank">
                            {/*INICIO CAMBIO GSS-310524*/}
                            <TypographySmallText sx={{  color: theme.palette.link.main }}>
                                Av. Insurgentes 2 Bis, Centro, 55000 Ecatepec de Morelos, Méx., México
                            </TypographySmallText>
                            {/*FIN CAMBIO GSS-310524*/}
                        </Link>

                    </Grid>

                    {/*INICIO CAMBIO GSS-310524*/}
                        { /* INICIO CAMBIO GSS-050624 */}
                    <Grid item xs={7}>
                        <Link
                            href='#'
                            onClick={(event) => {
                                event.preventDefault();
                                setMostrarDerechosReservadosModal(true);
                            }}
                        >
                            <TypographySmallText sx={{  color: theme.palette.link.main, textAlign: 'center' }} overrideSizes={{ xs: '0.8rem'}}>
                                Todos los derechos reservados
                            </TypographySmallText>
                        </Link>
                    </Grid>
                        {/* FIN CAMBIO GSS-050624 */}
                    {/*FIN CAMBIO GSS-310524*/}

                    <Grid item xs={4}>
                        <Link href="https://codigogeek.com.mx/" target="_blank">
                                <img
                                    className='Img-Color-PoweredBy'
                                    src={ PoweredBy }
                                    alt='Código Geek'
                                />
                        </Link>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}
