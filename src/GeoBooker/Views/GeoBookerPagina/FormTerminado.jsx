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

    return (
        <div ref={formReferencia}>
            {vistaFinal === 'true'

                ?
                <>
                    <Box
                        height={475}
                        width={250}
                        margin={0 + ' auto'}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        mt={3}
                        sx={{
                            [theme.breakpoints.up('smallMobileSize')]: {
                                height: "50rem",
                                width: "37rem",
                            }
                        }}
                    >
                        <img src={logoColor} alt="Logo de GeoBooker" />
                        <TypographyMediumText
                            sx={{
                                fontWeight: 'bold!important',
                                marginTop: '1.5rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Agradecemos tu confianza
                        </TypographyMediumText>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                            }}
                        >
                            En breve te contactaremos por WhatsApp para confirmar tus datos y proporcionarte tu Código de suscripción.
                        </TypographyMediumText>
                        <TypographyMediumText
                            sx={{
                            }}
                        >
                            Cuando la plataforma sea lanzada recibirás un aviso de confirmación en tu correo.
                        </TypographyMediumText>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1.5rem',
                                fontWeight: 'bold!important'
                            }}
                        >
                            Forma parte de la comunidad<br />GeoBooker
                        </TypographyMediumText>
                        

                        <Grid container spacing={2} alignItems="center" justifyContent={"center"}>
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
                                >
                                    Volver al inicio
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                </>

                :
                <>
                    <Box 
                        className="bg-dark bg-opacity-50 w-100 py-3 d-flex flex-column justify-center align-items-center"
                    >
                        <TypographyMediumText
                            sx={{
                                fontWeight: 'bold!important',
                                marginTop: '1.5rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Parece que ya te has registrado.
                        </TypographyMediumText>
                        <CheckCircleIcon className="fs-1 mt-3" color="success" style={{ width: "6rem", height: "6rem", borderRadius: "50%", backgroundColor: "white"}}/>
                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem'
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
                    >
                        <img src={logoColor} alt="Logo de GeoBooker" />

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important'
                            }}
                        >
                            ¡Agradece tu confianza!
                        </TypographyMediumText>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important'
                            }}
                        >
                            Nos encontraste <span className="fw-bold">justo a tiempo</span>, al participar en esta etapa de <span className="fw-bold">pre-registro</span> obtendrás <span className="fw-bold">beneficios exclusivos</span> dentro de nuestra comunidad.
                        </TypographyMediumText>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important'
                            }}
                        >
                            Cuando lancemos nuestra plataforma recibirás tus datos de acceso vía correo electrónico y WhatsApp.
                        </TypographyMediumText>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important'
                            }}
                        >
                            Forma parte de la comunidad<br />GeoBooker
                        </TypographyMediumText>

                        <Grid container spacing={2} alignItems="center" justifyContent={"center"}>
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
                                <Link to={rrss.whatsappMobile} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.WhatsappIcon} alt="WhatsApp" />
                                </Link>
                            </Grid>
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

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important',
                                color: "blue"
                            }}
                        >
                            Ver aviso de privacidad y proteccion de datos.
                        </TypographyMediumText>
                    </Box>
                </>
            }
        </div>
    );
}

export default FormTerminado;