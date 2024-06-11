// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 28/05/2024      #
//   --# Descripcion General : Componente para la vista del registro terminado        #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Se agrego la referencia para scrollear al formulario   #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Estilos responsivos para todo el componente            #
//   --# Marca de cambio     : BCMC-110624                                            #
//   ---------------------------------------------------------------------------------#-->

import { useContext } from "react";
import { Box, Grid, Stack, Button, useTheme } from '@mui/material';
import logoColor from "../../../assets/GeoBooker/LogoColor.svg";
import * as Icons from "../../../assets/RedesSociales/Index.js";
import { Link } from "react-router-dom";
import { FormContext, BreakpointsContext } from "../../Context/Index.js";
import rrss from "../../Data/DataLinks.js";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TypographySmallText, TypographyMediumText, TypographyLargeText } from '../../Theme/TypografiasParaTextos';
import { TypographySmallTitle, TypographyMediumTitle, TypographyLargeTitle } from '../../Theme/TypografiasParaTitulos';
// INICIO DE CAMBIO: BCMC-110624
import { ListaDeRedesSociales } from "../../Components/ListaDeRedesSociales.jsx";
import { ModalContext } from "../../Context/Index.js";
// FIN DE CAMBIO: BCMC-110624

const FormTerminado = () => {

    const { vistaFinal, setVistaFinal } = useContext(FormContext);
    const { isWeb } = useContext(BreakpointsContext);

    // INICIO CAMBIO GSS-050624
    const { formReferencia } = useContext(FormContext);
    // FIN CAMBIO GSS-050624

    // useEffect(() => {
    //     if(vistaFinal === "true" && formTerminado === 'true') {
    //         localStorage.setItem('vistaFinal', 'false');
    //     }

    //     const handleStorageChange = () => {
    //         setVistaFinal(localStorage.getItem('vistaFinal') || 'false');
    //     };

    //     window.addEventListener('storage', handleStorageChange);

    //     return () => {
    //         window.removeEventListener('storage', handleStorageChange);
    //     };
    // }, [setVistaFinal]);

    const handleRestart = () => {
        localStorage.setItem('vistaFinal', 'false');
        setVistaFinal('false');
    };

    const theme = useTheme();

    // INICIO DE CAMBIO: BCMC-110624
    const { setMostrarAvisoDePrivacidadModal } = useContext(ModalContext);
    // FIN DE CAMBIO: BCMC-110624

    return (
        <div ref={formReferencia}>
            {vistaFinal === 'true'

                ?
                <>
                    {/* INICIO DE CAMBIO: BCMC-110624 */}
                    <Box
                        height={475}
                        width={250}
                        margin={0 + ' auto'}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        mt={5}
                        sx={{
                            [theme.breakpoints.up('smallMobileSize')]: {
                                height: "58rem",
                                width: "37rem",
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                height: "66rem",
                                width: "45rem",
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                height: "45rem",
                                width: "57.5rem",
                                // backgroundColor: "red",
                            },
                            [theme.breakpoints.up('smallWebSize')]: {
                                height: "50rem",
                            },
                            [theme.breakpoints.up('largeWebSize')]: {
                                height: "55rem",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: "75%"
                                }
                            }}
                        >
                            <img src={logoColor} alt="Logo de GeoBooker" />
                        </Box>
                        <TypographyMediumText
                            sx={{
                                fontWeight: 'bold!important',
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    fontSize: '2rem',
                                    marginBottom: "0"
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    fontSize: '2.5rem',
                                },
                            }}
                        >
                            Agradecemos tu confianza
                        </TypographyMediumText>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: "53rem"
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    width: "67rem"
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    width: "77rem"
                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    width: "90rem"
                                }

                            }}
                        >
                            En breve te contactaremos por WhatsApp para confirmar tus datos y proporcionarte tu Código de suscripción.
                        </TypographyMediumText>
                        <TypographyMediumText
                            sx={{
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    width: "77rem"
                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    width: "90rem"
                                }
                            }}
                        >
                            Cuando la plataforma sea lanzada recibirás un aviso de confirmación en tu correo.
                        </TypographyMediumText>

                        <Box
                            sx={{
                                // backgroundColor: "red",
                                width: "75%",
                                [theme.breakpoints.up('mediumMobileSize')]: {
                                    width: "85%"
                                },
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: "100%"
                                }
                            }}
                        >
                            <TypographyMediumText
                                sx={{
                                    marginTop: '1.5rem',
                                    marginBottom: '1.5rem',
                                    fontWeight: 'bold!important',
                                    [theme.breakpoints.up('defaultWebSize')]: {
                                    }
                                }}
                            >
                                Forma parte de la comunidad GeoBooker
                            </TypographyMediumText>
                        </Box>


                        <Grid container spacing={2} alignItems="center" justifyContent={"center"}
                            sx={{
                                marginLeft: ".05rem"
                            }}
                        >
                            {isWeb
                                ?
                                <>
                                    <Box mt={3}>
                                        <ListaDeRedesSociales />
                                    </Box>
                                </>
                                :
                                <>
                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.facebook} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.FacebookIcon} alt="Facebook" />
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.instagram} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.InstagramIcon} alt="Instagram" />
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.tiktok} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.TikTokIcon} alt="TikTok" />
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.twitter} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.TwitterIcon} alt="Twitter" />
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.youtube} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.YouTubeIcon} alt="YouTube" />
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.linkedin} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.LinkedInIcon} alt="LinkedIn" />
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={isWeb ? rrss.whatsappWeb : rrss.whatsappMobile} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.WhatsappIcon} alt="WhatsApp" />
                                        </Link>
                                    </Grid>
                                </>
                            }

                        </Grid>

                        <Link to={isWeb ? rrss.whatsappWeb : rrss.whatsappMobile} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>
                            <TypographyMediumText
                                sx={{
                                    marginTop: '1.5rem',
                                    fontWeight: 'bold!important'
                                }}
                            >
                                ¡Chatear ahora!
                            </TypographyMediumText>
                        </Link>

                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            mt={2}
                        >
                            <Link to="/">
                                <Button
                                    variant='contained'
                                    size='large'
                                    onClick={handleRestart}
                                    sx={{
                                        [theme.breakpoints.up('smallMobileSize')]: {
                                            width: "17.5rem",
                                            height: "4rem",
                                            fontSize: "1.5rem"
                                        },
                                        [theme.breakpoints.up('mediumMobileSize')]: {
                                            width: "20rem",
                                            height: "4rem",
                                            fontSize: "1.5rem"
                                        },
                                        [theme.breakpoints.up('defaultWebSize')]: {
                                            width: "17.5rem",
                                            height: "4rem",
                                            fontSize: "1.2rem"
                                        }
                                    }}
                                >
                                    Volver al inicio
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                    {/* FIN DE CAMBIO: BCMC-110624 */}
                </>

                :
                <>
                    {/* INICIO DE CAMBIO: BCMC-110624 */}
                    <Box
                        className="bg-dark bg-opacity-50 w-100 py-3 mt-5 d-flex flex-column justify-center align-items-center"
                    >
                        <TypographyMediumText
                            sx={{
                                fontWeight: 'bold!important',
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    color: "white",
                                },
                            }}
                        >
                            Parece que ya te has registrado.
                        </TypographyMediumText>
                        <CheckCircleIcon className="fs-1 mt-3" color="success" style={{ width: "6rem", height: "6rem", borderRadius: "50%", backgroundColor: "white" }} />
                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    color: "white",
                                },
                            }}
                        >
                            En breve estaremos en contacto contigo.
                        </TypographyMediumText>
                    </Box>

                    <Box
                        height={575}
                        width={250}
                        margin={0 + ' auto'}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        mt={3}
                        sx={{
                            [theme.breakpoints.up('smallMobileSize')]: {
                                height: "75rem",
                                width: "37rem",
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                height: "90rem",
                                width: "47.5rem",
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                height: "52.5rem",
                                width: "57.5rem",
                                // backgroundColor: "red",
                            },
                            [theme.breakpoints.up('smallWebSize')]: {
                                height: "57.5rem",
                            },
                            [theme.breakpoints.up('mediumWebSize')]: {
                                height: "60rem",
                            },
                            [theme.breakpoints.up('largeWebSize')]: {
                                height: "65rem",
                            }
                        }}
                    >
                        <img src={logoColor} alt="Logo de GeoBooker" />

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    fontSize: '2rem',
                                    marginBottom: "0"
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    fontSize: '2.5rem',
                                },
                            }}
                        >
                            ¡Agradece tu confianza!
                        </TypographyMediumText>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: "50rem"
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    width: "62rem"
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    width: "70rem"

                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    width: "85rem"
                                }
                            }}
                        >
                            Nos encontraste <span className="fw-bold">justo a tiempo</span>, al participar en esta etapa de <span className="fw-bold">pre-registro</span> obtendrás <span className="fw-bold">beneficios exclusivos</span> dentro de nuestra comunidad.
                        </TypographyMediumText>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: "50rem"
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    width: "57rem"
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    width: "67rem"

                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    width: "80rem"
                                }
                            }}
                        >
                            Cuando lancemos nuestra plataforma recibirás tus datos de acceso vía correo electrónico y WhatsApp.
                        </TypographyMediumText>

                        <Box
                            sx={{
                                // backgroundColor: "red",
                                width: "75%",
                                [theme.breakpoints.up('mediumMobileSize')]: {
                                    width: "85%"
                                },
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: "100%"
                                }
                            }}
                        >
                            <TypographyMediumText
                                sx={{
                                    marginTop: '1.5rem',
                                    marginBottom: '1.5rem',
                                    fontWeight: 'bold!important',
                                    [theme.breakpoints.up('defaultWebSize')]: {
                                    }
                                }}
                            >
                                Forma parte de la comunidad GeoBooker
                            </TypographyMediumText>
                        </Box>

                        <Grid container spacing={2} alignItems="center" justifyContent={"center"}>
                            {isWeb
                                ?
                                <>
                                    <Box mt={3}>
                                        <ListaDeRedesSociales />
                                    </Box>
                                </>
                                :
                                <>
                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.facebook} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.FacebookIcon} alt="Facebook" />
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.instagram} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.InstagramIcon} alt="Instagram" />
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.tiktok} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.TikTokIcon} alt="TikTok" />
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.twitter} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.TwitterIcon} alt="Twitter" />
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.youtube} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.YouTubeIcon} alt="YouTube" />
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.linkedin} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.LinkedInIcon} alt="LinkedIn" />
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={isWeb ? rrss.whatsappWeb : rrss.whatsappMobile} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.WhatsappIcon} alt="WhatsApp" />
                                        </Link>
                                    </Grid>
                                </>
                            }
                        </Grid>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important'
                            }}
                        >
                            Creo que aún no me he registrado.
                        </TypographyMediumText>

                        <Link to={isWeb ? rrss.whatsappWeb : rrss.whatsappMobile} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>
                            <TypographyMediumText
                                sx={{
                                    marginTop: '1.5rem',
                                    marginBottom: '1rem',
                                    fontWeight: 'bold!important'
                                }}
                            >
                                ¡Chatear ahora!
                            </TypographyMediumText>
                        </Link>

                        <Link onClick={() => setMostrarAvisoDePrivacidadModal(true)} style={{textDecoration: "none"}}>
                            <TypographyMediumText
                                
                                sx={{
                                    marginTop: '1.5rem',
                                    marginBottom: '1rem',
                                    fontWeight: 'bold!important',
                                    color: "blue",
                                    cursor: "pointer"
                                }}
                            >
                                Ver aviso de privacidad y proteccion de datos.
                            </TypographyMediumText>
                        </Link>
                    </Box>
                    {/* FIN DE CAMBIO: BCMC-110624 */}
                </>
            }
        </div>
    );
}

export default FormTerminado;