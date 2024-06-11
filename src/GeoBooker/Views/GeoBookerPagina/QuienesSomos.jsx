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
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Se hicieron cambios en todo el componente para el      #
//                             diseño responsivo                                      #
//   --# Marca de cambio     : BCMC-110624                                            #
//   ---------------------------------------------------------------------------------#-->

// INICIO DE CAMBIO: BCMC-110624
import { Grid, Box } from "@mui/material";
// FIN DE CAMBIO: BCMC-110624
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
// INICIO DE CAMBIO: BCMC-110624
import { GifDeUbicacion, ImagenDe4Personas, LogoAColor } from '../../../assets/GeoBooker/Index.js';
import { CajitaAmarilla } from "../../UtilComponents/Index.js";
import { TypographyMediumText, TypographyMediumTitle, TypographySmallTitle } from "../../Theme/index.js";
// FIN DE CAMBIO: BCMC-110624
import { useTheme } from "@mui/material";

const estiloCentrado = { display: 'flex', justifyContent: 'center', alignItems: 'center' }

// este ancho solo aplica para este componente
const anchoDeLasCajitasAmarillas = '10rem';

export const QuienesSomos = () => {

    const theme = useTheme();

    return (
        <>
            {/* INICIO DE CAMBIO: BCMC-110624 */}
            <Grid container mb={3} >

                <Box
                    margin={"0 auto"}
                    sx={{
                        [theme.breakpoints.up('defaultWebSize')]: {
                            width: "100%",
                            height: "8rem",
                            display: "flex",
                            justifyContent: "space-evenly",
                            marginTop: '2rem',
                            marginBottom: "2rem",
                            // backgroundColor: "blue"
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
                                width: '40rem',
                                marginTop: "0",
                                paddingLeft: '0',
                                paddingRight: '0',
                                marginLeft: '5rem',
                                // backgroundColor: "green",
                                backgroundImage: `url(${LogoAColor})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                            },
                            [theme.breakpoints.up('smallWebSize')]: {
                                width: '50rem',
                            },
                            [theme.breakpoints.up('mediumWebSize')]: {
                                width: '60rem',
                            },
                            [theme.breakpoints.up('largeWebSize')]: {
                                width: '70rem',
                            }
                        }}
                    >
                        {/* <img src={LogoAColor} /> */}
                    </Grid>
                    <Grid mt='2.5rem' item defaultMobileSize={12}
                        sx={{
                            ...estiloCentrado, paddingLeft: '2rem', paddingRight: '2rem',
                            [theme.breakpoints.up('defaultWebSize')]: {
                                paddingLeft: '0',
                                paddingRight: '0',
                                // backgroundColor: "yellow",
                                height: '100%',
                                marginTop: "0",
                            },
                        }}
                    >
                        <TypographySmallTitle
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
                                    width: '47rem',
                                    fontWeight: "bold",
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    width: '50rem',
                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    width: '55rem',
                                }
                            }}
                        >
                            ¡Será tu aliado en el crecimiento de tu negocio!
                        </TypographySmallTitle>
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
                    className="w-100"
                >
                    {/* INICIO CAMBIO GSS-050624 */}
                    <Grid item mt='3rem'
                        sx={{
                            position: 'relative', display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', overflow: 'hidden', width: "100%",
                            [theme.breakpoints.up('defaultWebSize')]: {
                                height: "16.9rem",
                                width: "40rem",
                            },
                            [theme.breakpoints.up('mediumWebSize')]: {
                                height: "23rem",
                                width: "50rem",
                            }
                        }}>
                        <CajitaAmarilla sx={{
                            position: 'absolute',
                            top: '0.6rem', // Ajusta este valor según sea necesario
                            right: '0', // Asegura que la caja esté alineada a la derecha 
                            width: anchoDeLasCajitasAmarillas
                        }}
                            animacionDeAnimateCss='animate__fadeInRight'
                        />

                        <Box
                            sx={{

                            }}
                        >
                            <img
                                src={ImagenDe4Personas}
                                style={{ width: '100%', height: "100%", objectFit: 'contain' }}
                            />
                        </Box>
                    </Grid>
                    {/* FIN CAMBIO GSS-050624 */}
                    <Box
                        sx={{
                            [theme.breakpoints.up('defaultWebSize')]: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                            },
                        }}
                    >
                        <Grid mt='1.5rem' item defaultMobileSize={12} sx={{ ...estiloCentrado }}>
                            <TypographyMediumTitle

                            >
                                ¿Quiénes somos?
                            </TypographyMediumTitle>
                        </Grid>
                        <Grid mt='1rem' item
                            sx={{
                                ...estiloCentrado, paddingLeft: '2rem', paddingRight: '2rem',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    textAlign: 'center',
                                },
                            }}
                        >
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
                                        width: '50rem',
                                        fontWeight: "300",
                                        // backgroundColor: "orange"
                                    },
                                    [theme.breakpoints.up('smallWebSize')]: {
                                        width: '62rem',
                                    },
                                    [theme.breakpoints.up('mediumWebSize')]: {
                                        width: '72rem',
                                    },
                                    [theme.breakpoints.up('largeWebSize')]: {
                                        width: '85rem',

                                    }
                                }}
                            >
                                “GeoBooker” es una plataforma digital que busca brindar a profesionales a cargo y/o dueños de
                                cualquier tipo de negocio que cuente con un establecimiento físico en México, un sitio donde formar
                                una comunidad digital interconectada.
                                <br /> <br />
                                Permitiéndoles publicar y dar a conocer sus instalaciones, sus
                                servicios, sus precios, promociones, eventos, y diferentes contenidos multimedia para difundir sus
                                negocios.
                            </TypographyMediumText>
                        </Grid>
                    </Box>
                </Box>

                {/* INICIO CAMBIO GSS-050624 */}
                <Grid item mt='2rem' defaultMobileSize={12} sx={{ display: 'flex', justifyContent: 'flex-end', overflow: 'hidden' }}>
                    <CajitaAmarilla
                        sx={{ width: anchoDeLasCajitasAmarillas }}
                        animacionDeAnimateCss='animate__fadeInRight'
                    />
                </Grid>
                {/* FIN CAMBIO GSS-050624 */}

                <Box

                    sx={{
                        [theme.breakpoints.up('defaultMobileSize')]: {
                            margin: "0 auto",
                        },
                        [theme.breakpoints.up('defaultWebSize')]: {
                            display: "flex",
                            justifyContent: "space-evenly",
                            flexDirection: "row-reverse",
                            width: "100%",
                        },
                    }}
                >
                    <Box
                        sx={{
                            [theme.breakpoints.up('defaultWebSize')]: {

                            },
                        }}
                    >
                        <Grid item
                            sx={{
                                ...estiloCentrado,
                                width: "100%",
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    paddingRight: "5rem",
                                    width: "100%"
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    paddingRight: "7rem",
                                },
                            }}
                        >
                            <img
                                height='180rem'
                                width='210rem'
                                src={GifDeUbicacion}
                            />
                        </Grid>
                        {/* INICIO CAMBIO GSS-050624 */}
                        <Grid item mt='1rem' defaultMobileSize={12}
                            sx={{
                                display: 'flex', justifyContent: 'flex-start', overflow: 'hidden',
                            }}
                        >
                            <CajitaAmarilla
                                sx={{
                                    width: anchoDeLasCajitasAmarillas,
                                    [theme.breakpoints.up('mediumWebSize')]: {
                                        marginTop: "2rem"
                                    }
                                }}
                                animacionDeAnimateCss='animate__fadeInLeft'
                            />
                        </Grid>
                        {/* FIN CAMBIO GSS-050624 */}
                    </Box>

                    <Box
                        sx={{
                            [theme.breakpoints.up('defaultWebSize')]: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                            },
                            [theme.breakpoints.up('mediumWebSize')]: {
                                marginRight: "6rem",
                            }
                        }}
                    >
                        <Grid mt='1rem' item defaultMobileSize={12} sx={{ ...estiloCentrado }}>
                            <TypographyMediumTitle>
                                ¡Geo Booker es para todos!
                                <br />
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
                            <AccessTimeFilledIcon sx={{ fontSize: '3rem' }} />
                        </Grid>
                        <Grid mt='1rem' mb='1rem' item
                            sx={{
                                ...estiloCentrado, paddingLeft: '2rem', paddingRight: '2rem', margin: "0 auto",
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    textAlign: 'center',
                                },
                            }}
                        >
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
                                        fontWeight: '300',
                                        width: '46rem',
                                    },
                                    [theme.breakpoints.up('smallWebSize')]: {
                                        width: '55rem',
                                    },
                                    [theme.breakpoints.up('mediumWebSize')]: {
                                        width: '62rem',
                                    },
                                    [theme.breakpoints.up('largeWebSize')]: {
                                        width: '75rem',
                                    }
                                }}
                            >
                                Al registrarte, atenderemos y confirmaremos tus datos vía WhatsApp, donde te brindaremos un código
                                de suscripción GRATUITO que podrás usar en nuestra próxima etapa para darte de alta.
                            </TypographyMediumText>
                        </Grid>
                    </Box>
                </Box>

            </Grid>
            {/* FIN DE CAMBIO: BCMC-110624 */}
        </>
    )
}
