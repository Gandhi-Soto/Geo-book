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
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 13/06/2024                                             #
//   --# Modificacion        : El footer es responsivo en todos los breakpoints       #
//   --# Marca de cambio     : GSS-130624                                             #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 25/06/2024                                             #
//   --# Modificacion        : Bug de responsive solucionado                          #
//   --# Marca de cambio     : GSS-130624                                             #
//   ---------------------------------------------------------------------------------#-->

import {useContext} from 'react';
// INICIO CAMBIO GSS-310524
// INICIO DE CAMBIO GSS-110624
import {Box, Grid, Link, useTheme} from '@mui/material';
// FIN DE CAMBIO GSS-110624
// FIN CAMBIO GSS-310524

//INICIO CAMBIO GSS-130624
import {BreakpointsContext, ModalContext} from "../Context/Index.js";
// FIN CAMBIO GSS-130624

import {PoweredBy} from '../../assets/Footer/Index.js';
import {ListaDeRedesSociales} from "./Index.js";

// INICIO CAMBIO GSS-310524
// INICIO CAMBIO GSS-130624
import {TypographyLargeText, TypographySmallText} from "../Theme/index.js";
// FIN CAMBIO GSS-130624
// FIN CAMBIO GSS-310524
import './FooterStyles.css';
import PropTypes from "prop-types";

// INICIO CAMBIO GSS-110624
const overrideSizes = {
    defaultMobileSize: '1rem',
    defaultWebSize: '1.2rem',
    smallWebSize: '1.4rem',
    mediumWebSize: "1.6rem",
    largeWebSize: "1.8rem",
    wideWebSize: "3rem"
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
    // INICIO CAMBIO GSS-130624
    const {
        isDownMediumMobileSize,
        isUpDefaultWebSize,
        isUpMediumWebSize
    } = useContext(BreakpointsContext);

    const columnSpacing = isUpMediumWebSize ? 17 : isDownMediumMobileSize ? 0 : 10;
    // FIN CAMBIO GSS-130624
    // FIN CAMBIO GSS-110624

    // INICIO CAMBIO GSS-110624
    return (
        <Grid container maxWidth
              sx={{bgcolor: 'black', color: 'white', py: 3, display: 'flex', justifyContent: 'center'}}>
            <Grid item
                  defaultMobileSize={11}
                  sx={{
                      width: {
                          defaultMobileSize: "30.4rem",
                          smallMobileSize: "44rem",
                          mediumMobileSize: "54rem",
                      },
                      margin: "0 auto"
                  }}
            >
                {/*INICIO CAMBIO GSS-130624*/}
                <TypographyLargeText sx={{color: 'white'}} overrideSizes={{
                    // mobile sizes
                    defaultMobileSize: '1.2rem',
                    smallMobileSize: '1.7rem',
                    mediumMobileSize: '2.1rem',

                    // web sizes
                    defaultWebSize: '2.2rem',
                    smallWebSize: '2.7rem',
                    mediumWebSize: '3rem',
                    largeWebSize: '3.5rem',
                    wideWebSize: '5.5rem'
                }}>
                    Visita nuestras redes para mantenerte informado de nuestras novedades.
                </TypographyLargeText>
                {/*FIN CAMBIO GSS-130624*/}
            </Grid>

            <Grid item mt={3} defaultMobileSize={12}
                  sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ListaDeRedesSociales/>
            </Grid>

            {/*INICIO CAMBIO GSS-130624*/}
            {
                // Las unicas diferencia entre un componente y el otro, es el orden los grid items y algunos estilos
                isUpDefaultWebSize ?
                    <WebFootFooter
                        lugarDeTrabajoEnGoogleMaps={lugarDeTrabajoEnGoogleMaps}
                        setMostrarDerechosReservadosModal={setMostrarDerechosReservadosModal}
                        theme={theme}
                        columnSpacing={columnSpacing}
                        overrideSizes={overrideSizes}
                    />
                    :
                    <MobileFootFooter
                        lugarDeTrabajoEnGoogleMaps={lugarDeTrabajoEnGoogleMaps}
                        setMostrarDerechosReservadosModal={setMostrarDerechosReservadosModal}
                        theme={theme}
                        overrideSizes={overrideSizes}
                    />
            }
            {/*FIN CAMBIO GSS-130624*/}

        </Grid>
    );
    // FIN CAMBIO GSS-110624
}

/**
 * Este componente incluye la información de la dirección de la empresa, los derechos reservados y la firma de Código Geek.
 * Solo se renderiza si está por debajo de 768 píxeles, es decir en dispositivos móviles (mediumMobileSize para abajo)
 * @returns {JSX.Element}
 * @constructor
 */
const MobileFootFooter =
    ({
         lugarDeTrabajoEnGoogleMaps,
         setMostrarDerechosReservadosModal,
         theme,
         overrideSizes
     }) => {

        // INICIO CAMBIO GSS-250624
        const {
            isDownSmallMobile
        } = useContext(BreakpointsContext)
        const tamanoDeLaFirma = isDownSmallMobile ? '10rem' : '13rem';
        console.log("is Down small mobile size ", isDownSmallMobile)

        // FIN CAMBIO GSS-250624

        return (
            <Grid container
                  rowSpacing={2}
                  mt={0.5}
                  sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center'
                  }}
            >
                <Grid item defaultMobileSize={11}>
                    <Link variant='body2' href={lugarDeTrabajoEnGoogleMaps} target="_blank">
                        <TypographySmallText
                            sx={{color: theme.palette.link.main}}
                            overrideSizes={overrideSizes}
                        >
                            Av. Insurgentes 2 Bis, Centro, 55000 Ecatepec de Morelos, Méx., México
                        </TypographySmallText>
                    </Link>
                </Grid>

                <Grid item defaultMobileSize={12} display='flex' justifyContent='center'>
                    <Link href='#' onClick={(event) => {
                        event.preventDefault();
                        setMostrarDerechosReservadosModal(true);
                    }}>
                        <TypographySmallText
                            overrideSizes={overrideSizes}
                            sx={{color: theme.palette.link.main, textAlign: 'center'}}
                        >
                            Todos los derechos reservados
                        </TypographySmallText>
                    </Link>

                    <Box width='4.5rem'/>

                    <Link href="https://codigogeek.com.mx/" target="_blank">
                        <img
                            className='Img-Color-PoweredBy'
                            src={PoweredBy}
                            alt='Código Geek'
                            style={{width: tamanoDeLaFirma}} // Controla el tamaño de la imagen
                        />
                    </Link>
                </Grid>
            </Grid>
        )
    }

MobileFootFooter.propTypes = {
    lugarDeTrabajoEnGoogleMaps: PropTypes.string.isRequired,
    setMostrarDerechosReservadosModal: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    overrideSizes: PropTypes.object.isRequired,
}

/**
 * Este componente incluye la información de la dirección de la empresa, los derechos reservados y la firma de Código Geek.
 * Solo se renderiza si está por arriba de 768 píxeles, es decir en tamaño web (defaultWebSize para arriba)
 * @returns {JSX.Element}
 * @constructor
 */
const WebFootFooter =
    ({
         lugarDeTrabajoEnGoogleMaps,
         setMostrarDerechosReservadosModal,
         theme,
         overrideSizes
     }) => {
        const {
            isUpWideWebSize
        } = useContext(BreakpointsContext)
        const tamanoDeLaFirma = isUpWideWebSize ? '25rem' : '15rem';
        return (
            <Grid container
                  rowSpacing={2}
                  mt={0.5}
                  mb={3}
                  sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'center'
                  }}
            >
                <Grid item defaultWebSize={3.5}>
                    <Link href='#' onClick={(event) => {
                        event.preventDefault();
                        setMostrarDerechosReservadosModal(true);
                    }}>
                        <TypographySmallText
                            overrideSizes={overrideSizes}
                            sx={{color: theme.palette.link.main, textAlign: 'center'}}
                        >
                            Todos los derechos reservados
                        </TypographySmallText>
                    </Link>
                </Grid>

                <Grid item defaultWebSize={5}>
                    <Link variant='body2' href={lugarDeTrabajoEnGoogleMaps} target="_blank">
                        <TypographySmallText
                            sx={{color: theme.palette.link.main, noWrap: false}}
                            overrideSizes={overrideSizes}
                        >
                            Av. Insurgentes 2 Bis, Centro, 55000 Ecatepec de Morelos, Méx., México
                        </TypographySmallText>
                    </Link>
                </Grid>

                <Grid item defaultWebSize={3.5}>
                    <Link href="https://codigogeek.com.mx/" target="_blank">
                        <img
                            className='Img-Color-PoweredBy'
                            src={PoweredBy}
                            alt='Código Geek'
                            style={{width: tamanoDeLaFirma}} // Controla el tamaño de la imagen
                        />
                    </Link>
                </Grid>
            </Grid>
        )
    }

WebFootFooter.propTypes = {
    lugarDeTrabajoEnGoogleMaps: PropTypes.string.isRequired,
    setMostrarDerechosReservadosModal: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    columnSpacing: PropTypes.number.isRequired,
    overrideSizes: PropTypes.object.isRequired,
}