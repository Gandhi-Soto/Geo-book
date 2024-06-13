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
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 13/06/2024                                             #
//   --# Modificacion        : Mejor distrubución y proporción de elementos responsive#
//   --# Marca de cambio     : BCMC-130624                                            #
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
                            // INICIO DE CAMBIO: BCMC-130624
                            width: "90%",
                            height: "9rem",
                            // FIN DE CAMBIO: BCMC-130624
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
                            // INICIO DE CAMBIO: BCMC-130624
                            backgroundImage: `url(${LogoAColor})`, 
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            height: '5rem',
                            [theme.breakpoints.up('smallMobileSize')]: {
                                height: '7rem',
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                height: '9rem',
                            },
                            // FIN DE CAMBIO: BCMC-130624
                            [theme.breakpoints.up('defaultWebSize')]: {
                                // backgroundColor: "green",
                                backgroundImage: `url(${LogoAColor})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                //INICIO DE CAMBIO: BCMC-130624
                                marginTop: '0',
                                width: '40rem',
                                // FIN DE CAMBIO: BCMC-130624
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
                                //INICIO DE CAMBIO: BCMC-130624
                                display: "flex",
                                // FIN DE CAMBIO: BCMC-130624
                            },
                        }}
                    >
                        <TypographySmallTitle
                            sx={{
                                [theme.breakpoints.up('defaultMobileSize')]: {
                                    //INICIO DE CAMBIO: BCMC-130624
                                    width: '22rem',
                                    fontSize: "1.75rem",
                                    // backgroundColor: "red"
                                    // FIN DE CAMBIO: BCMC-130624
                                },
                                [theme.breakpoints.up('smallMobileSize')]: {
                                    width: '37rem',
                                    //INICIO DE CAMBIO: BCMC-130624
                                    fontSize: "2.5rem",
                                    // FIN DE CAMBIO: BCMC-130624
                                },
                                [theme.breakpoints.up('mediumMobileSize')]: {
                                    width: '46rem',
                                    //INICIO DE CAMBIO: BCMC-130624
                                    fontSize: "3.25rem",
                                    // FIN DE CAMBIO: BCMC-130624
                                },
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    //INICIO DE CAMBIO: BCMC-130624
                                    fontWeight: "bold",
                                    // backgroundColor: "red",
                                    textAlign: "right",
                                    width: "100%",
                                    fontSize: "1.8rem",
                                    marginTop: "1rem",
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    fontSize: "2.3rem",
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    fontSize: "2.8rem",
                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    fontSize: "3.3rem",
                                }
                                    // FIN DE CAMBIO: BCMC-130624
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
                        {/* INICIO DE CAMBIO: BCMC-130624 */}
                    <Grid item mt='2rem'
                        //FIN DE CAMBIO: BCMC-130624 
                        sx={{
                            position: 'relative', display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', overflow: 'hidden', width: "100%",
                            [theme.breakpoints.up('defaultWebSize')]: {
                                height: "16.9rem",
                                width: "40rem",
                            },
                            [theme.breakpoints.up('mediumWebSize')]: {
                                height: "23rem",
                                width: "50rem",
                                // INICIO DE CAMBIO: BCMC-130624
                            },
                            [theme.breakpoints.up('wideWebSize')]: {
                                height: "40rem",
                                width: "90rem",
                            },
                                // FIN DE CAMBIO: BCMC-130624
                        }}>
                        <CajitaAmarilla sx={{
                            position: 'absolute',
                            top: '0.6rem', // Ajusta este valor según sea necesario
                            right: '0', // Asegura que la caja esté alineada a la derecha 
                            // INICIO DE CAMBIO: BCMC-130624
                            width: anchoDeLasCajitasAmarillas,
                            [theme.breakpoints.up('smallMobileSize')]: {
                                width: '15rem',
                                height: '1.5rem',
                                borderRadius: "1rem"
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                width: '20rem',
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                width: '9rem',
                                height: '1.5rem'
                            },
                            [theme.breakpoints.up('wideWebSize')]: {
                                width: '16rem',
                                height: '2.75rem'
                            }
                            // FIN DE CAMBIO: BCMC-130624
                        }}
                            animacionDeAnimateCss='animate__fadeInRight'
                        />

                        <Box
                            // INICIO DE CAMBIO: BCMC-130624
                            sx={{
                                [theme.breakpoints.up('wideWebSize')]: {
                                    
                                }
                            }}
                            // FIN DE CAMBIO: BCMC-130624
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
                                        // INICIO DE CAMBIO: BCMC-130624
                                    },
                                    [theme.breakpoints.up('wideWebSize')]: {
                                        width: '150rem',
                                        // FIN DE CAMBIO: BCMC-130624
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
                        // INICIO DE CAMBIO: BCMC-130624
                        sx={{ 
                            width: anchoDeLasCajitasAmarillas,
                            [theme.breakpoints.up('smallMobileSize')]: {
                                width: '15rem',
                                height: '1.5rem',
                                borderRadius: "1rem"
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                width: '20rem',
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                width: '9rem',
                                height: '1.5rem'
                            },
                            [theme.breakpoints.up('wideWebSize')]: {
                                width: '16rem',
                                height: '2.75rem'
                            }
                        }}
                        // FIN DE CAMBIO: BCMC-130624
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
                        // INICIO DE CAMBIO: BCMC-130624
                        sx={{
                            [theme.breakpoints.up('wideWebSize')]: {
                                // backgroundColor: "red",
                                width: "90rem"
                        // FIN DE CAMBIO: BCMC-130624
                            },
                        }}
                    >
                        {/* INICIO DE CAMBIO: BCMC-130624*/}
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
                                [theme.breakpoints.up('wideWebSize')]: {
                                    paddingRight: "0rem",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    height: "18rem",
                                    width: "21rem",
                                    [theme.breakpoints.up('smallWebSize')]: {
                                        height: "23rem",
                                        width: "26rem",
                                    },
                                    [theme.breakpoints.up('wideWebSize')]: {
                                        height: "40rem",
                                        width: "45rem",
                                    }
                                }}
                            >
                                <img
                                    height='100%'
                                    width='100%'
                                    src={GifDeUbicacion}
                                />
                            </Box>
                        </Grid>
                        {/* FIN DE CAMBIO: BCMC-130624*/}
                        {/* INICIO CAMBIO GSS-050624 */}
                        <Grid item mt='1rem' defaultMobileSize={12}
                            sx={{
                                display: 'flex', justifyContent: 'flex-start', overflow: 'hidden',
                            }}
                        >
                            <CajitaAmarilla
                                sx={{
                                    width: anchoDeLasCajitasAmarillas,
                                    // INICIO DE CAMBIO: BCMC-130624
                                    [theme.breakpoints.up('smallMobileSize')]: {
                                        width: '15rem',
                                        height: '1.5rem',
                                        borderRadius: "1rem"
                                    },
                                    [theme.breakpoints.up('mediumMobileSize')]: {
                                        width: '20rem',
                                    },
                                    [theme.breakpoints.up('defaultWebSize')]: {
                                        width: '9rem',
                                        height: '1.5rem'
                                    },
                                    // FIN DE CAMBIO: BCMC-130624
                                    [theme.breakpoints.up('mediumWebSize')]: {
                                        marginTop: "2rem"
                                        // INICIO DE CAMBIO: BCMC-130624
                                    },
                                    [theme.breakpoints.up('wideWebSize')]: {
                                        width: '16rem',
                                        height: '2.75rem'
                                        // FIN DE CAMBIO: BCMC-130624
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
                        {/* INICIO DE CAMBIO: BCMC-130624 */}
                        <Grid mt='1rem' item defaultMobileSize={12}
                            sx={{
                                ...estiloCentrado,
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    marginBottom: '1.5rem',
                                },
                            }}
                        >
                            <AccessTimeFilledIcon 
                                sx={{ 
                                    fontSize: '3rem',
                                    [theme.breakpoints.up('smallWebSize')]: {
                                        fontSize: '4rem',
                                    },
                                    [theme.breakpoints.up('wideWebSize')]: {
                                        fontSize: "7rem"
                                    }
                                }} 
                            />
                        </Grid>
                        {/* FIN DE CAMBIO: BCMC-130624 */}
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
                                        // INICIO DE CAMBIO: BCMC-130624
                                    },
                                    [theme.breakpoints.up('wideWebSize')]: {
                                        width: '140rem',
                                        // FIN DE CAMBIO: BCMC-130624
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
