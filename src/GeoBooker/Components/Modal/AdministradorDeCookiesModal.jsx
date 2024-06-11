// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 15/05/2024      #
//   --# Descripcion General : Modal de Administracion de cookies                     #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Estilos responsivos para el modal de admin. de cookies #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->


import {ModalLayout} from "../../Layout/Index.js";
import {Switch, Button, useTheme, Box, Grid} from "@mui/material";
import {useContext} from "react";
import {ModalContext} from "../../Context/Index.js";
import {useSwitch} from "../../Hooks/useSwitch.js";
import PropTypes from "prop-types";
// INICIO CAMBIO GSS-110624
import {TypographySmallText,} from "../../Theme/index.js";
// FIN CAMBIO GSS-110624

/**
 * TODO buscar la manera de que el componente switch tenga el botón negro como aparece en la HU
 * @returns {JSX.Element}
 * @constructor
 */
export const AdministradorDeCookiesModal = () => {
    // INICIO DE CAMBIO: GSS-110624
    const {mostrarAdministradorDeCookiesModal} = useContext(ModalContext);
    // FIN DE CAMBIO: GSS-110624

    const initialForm = {
        primerChecked: false,
        segundoChecked: false,
        tercerChecked: false
    }

    const {
        primerChecked,
        segundoChecked,
        tercerChecked,
        onInputChange,
        onResetState,
        onAcceptAll
    } = useSwitch(initialForm)

    return (
        <ModalLayout
            titulo={<Titulo/>}
            cuerpo={
                <Cuerpo
                    primerChecked={primerChecked}
                    segundoChecked={segundoChecked}
                    tercerChecked={tercerChecked}
                    onInputChange={onInputChange}
                />
            }
            mostrarModal={mostrarAdministradorDeCookiesModal}
            footer={
                <Footer
                    onAcceptAll={onAcceptAll}
                    onResetState={onResetState}
                />
            }
        />
    )
}

// INICIO CAMBIO: GSS-110624
const Titulo = () => {
    return (
        <Grid container sx={{marginLeft: 1}}>
            <Grid item defaultMobileSize={12}>
                <h2 className='fs-1'>Administrador de Cookies</h2>
            </Grid>
        </Grid>
    )
}
// FIN DE CAMBIO: GSS-110624

// INICIO CAMBIO: GSS-110624
const Cuerpo =
    ({
         primerChecked,
         segundoChecked,
         tercerChecked,
         onInputChange,
     }) => {
        const {setMostrarAdministradorDeCookiesModal, setMostrarPoliticasDeUsoDeCookiesModal} = useContext(ModalContext)
        const estiloParaTextoDeSwitches = 'fs-5 text-nowrap fw-semibold'
        
        return (
            <>
                <Box sx={{marginLeft: 1, marginRight: 1}}>
                    <Grid container defaultMobileSize={12}>
                        <Grid item defaultMobileSize={12}>
                            <TypographySmallText sx={{textAlign: 'start'}}>
                                Este sitio web usa cookies para mejorar tu experiencia en nuestro sitio web y también
                                con fines de
                                análisis y marketing. Respetamos tu privacidad, por lo que te damos la opción de
                                rechazar cierto
                                tipo de
                                cookies no necesarias para el funcionamiento del sitio.

                                Haz clic en la cookie que deseas bloquear, es posible que esto afecte tu experiencia en
                                el sitio y
                                limite los servicios que podemos ofrecerte. Para más información consulta
                                nuestra. &nbsp;
                                <a
                                    href=''
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setMostrarAdministradorDeCookiesModal(false)
                                        setMostrarPoliticasDeUsoDeCookiesModal(true)
                                    }}
                                    style={{color: 'blue', textDecoration: 'none'}}
                                > Política de Cookies
                                </a>
                            </TypographySmallText>
                        </Grid>

                        <Grid container sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Grid item defaultMobileSize={10}>
                                <p className={estiloParaTextoDeSwitches}>Cookies para analítica web</p>
                            </Grid>
                            <Grid item defaultMobileSize={2}>
                                <Switch
                                    checked={primerChecked}
                                    onClick={() => onInputChange({name: 'primerChecked', value: !primerChecked})}
                                />
                            </Grid>

                            <Grid item defaultMobileSize={10}>
                                <p className={estiloParaTextoDeSwitches}>Cookies para publicidad</p>
                            </Grid>
                            <Grid item defaultMobileSize={2}>
                                <Switch
                                    checked={segundoChecked}
                                    onClick={() => onInputChange({name: 'segundoChecked', value: !segundoChecked})}
                                />
                            </Grid>

                            <Grid item defaultMobileSize={10}>
                                <p className={estiloParaTextoDeSwitches}>Cookies de funcionalidad</p>
                            </Grid>
                            <Grid item defaultMobileSize={2}>
                                <Switch
                                    checked={tercerChecked}
                                    onClick={() => onInputChange({name: 'tercerChecked', value: !tercerChecked})}
                                />
                            </Grid>

                            <Grid item defaultMobileSize={8.5}>
                                <p className={estiloParaTextoDeSwitches}>Cookies esenciales</p>
                            </Grid>
                            <Grid item defaultMobileSize={3.5}>
                                <p className={estiloParaTextoDeSwitches}>Siempre activas</p>

                            </Grid>

                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
// FIN DE CAMBIO: GSS-110624
Cuerpo.propTypes = {
    primerChecked: PropTypes.bool.isRequired,
    segundoChecked: PropTypes.bool.isRequired,
    tercerChecked: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired
}

// INICIO CAMBIO: GSS-110624
const Footer = ({onResetState, onAcceptAll}) => {

    const {setMostrarAdministradorDeCookiesModal} = useContext(ModalContext)
    return (
        <>
            <Box>
                <Grid container spacing={1}
                      sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                      }}
                >
                    <Grid item defaultMobileSize={6} >
                        <Button
                            fullWidth
                            variant='contained'
                            color='secondary'
                            size='small'
                            className='text-black fw-bolder text-nowrap'
                            onClick={onAcceptAll}

                        >
                            Aceptar todas
                        </Button>
                    </Grid>

                    <Grid item defaultMobileSize={6}>
                        <Button
                            fullWidth
                            variant='contained'
                            color='secondary'
                            size='small'
                            className='text-black fw-bolder text-nowrap'
                            onClick={onResetState}
                        >
                            Rechazar todas
                        </Button>
                    </Grid>

                    <Grid item mt={1} defaultMobileSize={12} >
                        <Button
                            fullWidth
                            variant='contained'
                            color='success'
                            onClick={() => setMostrarAdministradorDeCookiesModal(false)}
                            size='small'
                            className='text-white fs-6'
                        >
                            Guardar cambios
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            </>
    )
}
// FIN DE CAMBIO: GSS-110624

Footer.propTypes = {
    onResetState: PropTypes.func.isRequired,
    onAcceptAll: PropTypes.func.isRequired
}