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
import { Box, Grid, Stack, Button } from '@mui/material';
import logoColor from "../../../assets/GeoBooker/LogoColor.svg";
import * as Icons from "../../../assets/RedesSociales/Index.js";
import { Link } from "react-router-dom";
import { FormContext, BreakpointsContext } from "../../Context/Index.js";
import rrss from "../../Data/DataLinks.js";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
                    >
                        <img src={logoColor} alt="Logo de GeoBooker" />
                        <p className="fw-bold fs-4 text-center mt-4">Agradecemos tu confianza</p>

                        <p className="fs-5 text-center">En breve te contactaremos por WhatsApp para confirmar tus datos y proporcionarte tu Código de suscripción.</p>
                        <p className="fs-5 text-center mt-3">Cuando la plataforma sea lanzada recibirás un aviso de confirmación en tu correo.</p>

                        <p className="fw-bold fs-5 text-center mt-3">Forma parte de la comunidad<br />GeoBooker</p>

                        <Grid container spacing={2} alignItems="center" justifyContent={"center"}>
                            <Grid item xs={3}>
                                <Link to={rrss.facebook} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.FacebookIcon} alt="Facebook" />
                                </Link>
                            </Grid>

                            <Grid item xs={3}>
                                <Link to={rrss.instagram} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.InstagramIcon} alt="Instagram" />
                                </Link>
                            </Grid>

                            <Grid item xs={3}>
                                <Link to={rrss.tiktok} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.TikTokIcon} alt="TikTok" />
                                </Link>
                            </Grid>

                            <Grid item xs={3}>
                                <Link to={rrss.twitter} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.TwitterIcon} alt="Twitter" />
                                </Link>
                            </Grid>

                            <Grid item xs={3}>
                                <Link to={rrss.youtube} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.YouTubeIcon} alt="YouTube" />
                                </Link>
                            </Grid>

                            <Grid item xs={3}>
                                <Link to={rrss.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.LinkedInIcon} alt="LinkedIn" />
                                </Link>
                            </Grid>

                            <Grid item xs={3}>
                                <Link to={isWeb ? rrss.whatsappWeb : rrss.whatsappMobile} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.WhatsappIcon} alt="WhatsApp" />
                                </Link>
                            </Grid>
                        </Grid>

                        <Link to={isWeb ? rrss.whatsappWeb : rrss.whatsappMobile} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>
                            <p className="fw-bold fs-5 text-center mt-3">¡Chatear ahora!</p>
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
                        <h2 className='text-center fs-2 fw-bold mt-2'>Parece que ya te has registrado.</h2>
                        <CheckCircleIcon className="fs-1 mt-3" color="success" style={{ width: "6rem", height: "6rem", borderRadius: "50%", backgroundColor: "white"}}/>
                        <p className="text-center fs-3 mt-3">En breve estaremos en contacto contigo.</p>
                    </Box>

                    <Box
                        height={500}
                        width={250}
                        margin={0 + ' auto'}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        mt={3}
                    >
                        <img src={logoColor} alt="Logo de GeoBooker" />
                        <p className="fw-bold fs-4 text-center mt-4">¡Agradece tu confianza!</p>

                        <p className="fs-5 text-center">Nos encontraste <span className="fw-bold">justo a tiempo</span>, al participar en esta etapa de <span className="fw-bold">pre-registro</span> obtendrás <span className="fw-bold">beneficios exclusivos</span> dentro de nuestra comunidad.</p>
                        <p className="fs-5 text-center mt-3">Cuando lancemos nuestra plataforma recibirás tus datos de acceso vía correo electrónico y WhatsApp.</p>

                        <p className="fw-bold fs-5 text-center mt-3">Forma parte de la comunidad<br />GeoBooker</p>

                        <Grid container spacing={2} alignItems="center" justifyContent={"center"}>
                            <Grid item xs={3}>
                                <Link to={rrss.facebook} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.FacebookIcon} alt="Facebook" />
                                </Link>
                            </Grid>

                            <Grid item xs={3}>
                                <Link to={rrss.instagram} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.InstagramIcon} alt="Instagram" />
                                </Link>
                            </Grid>

                            <Grid item xs={3}>
                                <Link to={rrss.tiktok} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.TikTokIcon} alt="TikTok" />
                                </Link>
                            </Grid>

                            <Grid item xs={3}>
                                <Link to={rrss.twitter} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.TwitterIcon} alt="Twitter" />
                                </Link>
                            </Grid>

                            <Grid item xs={3}>
                                <Link to={rrss.youtube} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.YouTubeIcon} alt="YouTube" />
                                </Link>
                            </Grid>

                            <Grid item xs={3}>
                                <Link to={rrss.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.LinkedInIcon} alt="LinkedIn" />
                                </Link>
                            </Grid>

                            <Grid item xs={3}>
                                <Link to={rrss.whatsappMobile} target="_blank" rel="noopener noreferrer">
                                    <img className="w-75" src={Icons.WhatsappIcon} alt="WhatsApp" />
                                </Link>
                            </Grid>
                        </Grid>

                        <p className="fw-bold fs-5 text-center mt-3">Creo que aún no me he registrado.</p>

                        <Link to={isWeb ? rrss.whatsappWeb : rrss.whatsappMobile} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>
                            <p className="fw-bold fs-5 text-center mt-3">¡Chatear ahora!</p>
                        </Link>

                        <p className='text-center text-primary'>Ver aviso de privacidad y proteccion de datos.</p>
                    </Box>
                </>
            }
        </div>
    );
}

export default FormTerminado;