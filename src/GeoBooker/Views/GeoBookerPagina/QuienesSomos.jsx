// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 27/05/2024      #
//   --# Descripcion General : Componente de quienes somos                            #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Se agrega la animacion a las cajitas                   #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->

import {Grid, Box} from "@mui/material";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {GifDeUbicacion, ImagenDe4Personas, LogoAColor} from '../../../assets/GeoBooker/Index.js';
import {CajitaAmarilla} from "../../UtilComponents/Index.js";
import {TypographyMediumText, TypographyMediumTitle} from "../../Theme/index.js";
import { useTheme } from "@mui/material";

const estiloCentrado = {display: 'flex', justifyContent: 'center', alignItems: 'center'}

// este ancho solo aplica para este componente
const anchoDeLasCajitasAmarillas = '10rem';

export const QuienesSomos = () => {

    const theme = useTheme();
    
    return (
        <Grid container>

            <Box 
                fullWidth
                margin={"0 auto"}
                sx={{
                    [theme.breakpoints.up('defaultWebSize')]: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginTop: '2rem',
                        marginBottom: "2rem"
                    },
                }}
            >
                <Grid
                    mt='2rem'
                    item
                    sx={{
                        width: '100%',
                        paddingLeft: '5rem',
                        paddingRight: '5rem',
                        [theme.breakpoints.up('defaultWebSize')]: {
                            width: '36.4rem',
                            paddingLeft: '0',
                            paddingRight: '0',
                            marginLeft: '5rem',
                        },
                    }}
                >
                    <img src={LogoAColor}/>
                </Grid>
                <Grid mt='2.5rem' item defaultMobileSize={12} 
                    sx={{
                        ...estiloCentrado, paddingLeft: '2rem', paddingRight: '2rem',
                        [theme.breakpoints.up('defaultWebSize')]: {
                            paddingLeft: '0',
                            paddingRight: '0',
                        },
                    }}
                >
                    <TypographyMediumTitle
                        sx={{
                            [theme.breakpoints.up('defaultMobileSize')]: {
                                width: '28rem',
                            },
                            [theme.breakpoints.up('smallMobileSize')]: {
                                width: '37rem',
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                width: '46rem',
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                width: '35rem',
                                fontWeight: "bold",
                                fontSize: "1.6rem"
                            }
                        }}
                    >
                        ¡Será tu aliado en el crecimiento de tu negocio!
                    </TypographyMediumTitle>
                </Grid>
            </Box>

            <Box
                sx={{
                    [theme.breakpoints.up('defaultWebSize')]: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexDirection: "row-reverse",
                        marginBottom: "3rem",
                    },
                }}
            >
                {/* INICIO CAMBIO GSS-050624 */}
                <Grid item mt='3rem' defaultMobileSize={12} sx={{position: 'relative', display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', overflow: 'hidden'}}>
                    <CajitaAmarilla sx={{position: 'absolute',
                        top: '0.6rem', // Ajusta este valor según sea necesario
                        right: '0', // Asegura que la caja esté alineada a la derecha 
                        width: anchoDeLasCajitasAmarillas}}
                        animacionDeAnimateCss='animate__fadeInRight'
                        />
                        
                    <Box
                        sx={{
                            [theme.breakpoints.up('defaultWebSize')]: {
                                height: "16.9rem",
                                width: "26.8rem",
                            }
                        }}
                    >
                        <img
                            src={ImagenDe4Personas}
                            style={{width: '100%', objectFit: 'cover'}}
                        />
                    </Box>
                </Grid>
                {/* FIN CAMBIO GSS-050624 */}
                <Box>
                    <Grid mt='1.5rem' item defaultMobileSize={12} sx={{...estiloCentrado}}>
                        <TypographyMediumTitle
                        
                        >
                            ¿Quiénes somos?
                        </TypographyMediumTitle>
                    </Grid>
                    <Grid mt='1rem' item defaultMobileSize={12} sx={{...estiloCentrado, paddingLeft: '2rem', paddingRight: '2rem'}}>
                        <TypographyMediumText
                            sx={{
                                fontWeight: 'bold',
                                [theme.breakpoints.up('defaultMobileSize')]: {
                                    width: '28rem',
                                },
                                [theme.breakpoints.up('smallMobileSize')]: {
                                    width: '43rem',
                                },
                                [theme.breakpoints.up('mediumMobileSize')]: {
                                    width: '52rem',
                                },
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: '46rem',
                                    fontWeight: "300",
                                },
                            }}
                        >
                            “GeoBooker” es una plataforma digital que busca brindar a profesionales a cargo y/o dueños de
                            cualquier tipo de negocio que cuente con un establecimiento físico en México, un sitio donde formar
                            una comunidad digital interconectada.
                            <br/> <br/>
                            Permitiéndoles publicar y dar a conocer sus instalaciones, sus
                            servicios, sus precios, promociones, eventos, y diferentes contenidos multimedia para difundir sus
                            negocios.
                        </TypographyMediumText>
                    </Grid>
                </Box>
            </Box>

            {/* INICIO CAMBIO GSS-050624 */}
            <Grid item mt='2rem' defaultMobileSize={12} sx={{display: 'flex', justifyContent: 'flex-end', overflow: 'hidden'}}>
                <CajitaAmarilla
                    sx={{width: anchoDeLasCajitasAmarillas}}
                    animacionDeAnimateCss='animate__fadeInRight'
                />
            </Grid>
            {/* FIN CAMBIO GSS-050624 */}

            <Box
                sx={{
                    [theme.breakpoints.up('defaultWebSize')]: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexDirection: "row-reverse",
                    },
                }}
            >
                <Box>
                    <Grid item defaultMobileSize={12} 
                        sx={{
                            ...estiloCentrado,
                            [theme.breakpoints.up('defaultWebSize')]: {
                                marginLeft: "2.5rem",
                            }
                        }}
                    >
                        <img
                            height='180rem'
                            width='200rem'
                            src={GifDeUbicacion}
                        />
                    </Grid>
                    {/* INICIO CAMBIO GSS-050624 */}
            <Grid item mt='1rem' defaultMobileSize={12} sx={{display: 'flex', justifyContent: 'flex-start', overflow: 'hidden'}}>
                        <CajitaAmarilla
                    sx={{width: anchoDeLasCajitasAmarillas}}
                    animacionDeAnimateCss='animate__fadeInLeft'
                />
                    </Grid>
            {/* FIN CAMBIO GSS-050624 */}
                </Box>

                <Box>
                    <Grid mt='1rem' item defaultMobileSize={12} sx={{...estiloCentrado}}>
                        <TypographyMediumTitle>
                            ¡Geo Booker es para todos!
                            <br/>
                            ¡Llegas justo a tiempo!
                        </TypographyMediumTitle>
                    </Grid>
                    <Grid mt='1rem' item defaultMobileSize={12} 
                        sx={{
                            ...estiloCentrado,
                            [theme.breakpoints.up('defaultWebSize')]: {
                                marginBottom: '1.5rem',
                            }
                        }}
                    >
                        <AccessTimeFilledIcon sx={{fontSize: '3rem'}}/>
                    </Grid>
                    <Grid mt='1rem' mb='1rem' item
                        sx={{...estiloCentrado, paddingLeft: '2rem', paddingRight: '2rem', margin: "0 auto",
                            [theme.breakpoints.up('defaultMobileSize')]: {
                                width: '32rem',
                                marginBottom: '1rem'
                            },
                            [theme.breakpoints.up('smallMobileSize')]: {
                                width: '47rem',
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                width: '56rem',
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                width: '51rem',
                            },
                        }}
                    >
                        <TypographyMediumText 
                            sx={{ 
                                fontWeight: 'bold',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    fontWeight: '300',
                                },
                            }}
                        >
                            Al registrarte, atenderemos y confirmaremos tus datos vía WhatsApp, donde te brindaremos un código
                            de suscripción GRATUITO que podrás usar en nuestra próxima etapa para darte de alta.
                        </TypographyMediumText>
                    </Grid>
                </Box>
            </Box>

        </Grid>
    )
}
