// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 15/05/2024      #
//   --# Descripcion General : Modal de Administracion de cookies                     #
//   ---------------------------------------------------------------------------------#-->


import {ModalLayout} from "../../Layout/Index.js";
import {Col, Container, Row} from "react-bootstrap";
import {Switch, Button, Typography, useTheme, Box} from "@mui/material";
import {useContext} from "react";
import {ModalContext} from "../../Context/Index.js";
import {useSwitch} from "../../Hooks/useSwitch.js";
import PropTypes from "prop-types";
/**
 * TODO buscar la manera de que el componente switch tenga el botón negro como aparece en la HU
 * @returns {JSX.Element}
 * @constructor
 */
export const AdministradorDeCookiesModal = () => {

    const theme = useTheme();

    const { mostrarAdministradorDeCookiesModal } = useContext(ModalContext);

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

const Titulo = () => {
    return <h2 className='fs-1'>Administrador de Cookies</h2>
}

const Cuerpo =
    ({
         primerChecked,
         segundoChecked,
         tercerChecked,
         onInputChange,
     }) => {
        const {setMostrarAdministradorDeCookiesModal, setMostrarPoliticasDeUsoDeCookiesModal} = useContext(ModalContext)
        const estiloParaTextoDeSwitches = 'fs-5 text-nowrap fw-semibold'

        const theme = useTheme();

        return (
            <>
                <Box
                    sx={{
                        [theme.breakpoints.up('defaultMobileSize')]: {
                        },
                    }}
                >
                    <Typography variant='p' className='fs-5 lh-sm'>
                        Este sitio web usa cookies para mejorar tu experiencia en nuestro sitio web y también con fines de
                        análisis y marketing. Respetamos tu privacidad, por lo que te damos la opción de rechazar cierto
                        tipo de
                        cookies no necesarias para el funcionamiento del sitio.

                        Haz clic en la cookie que deseas bloquear, es posible que esto afecte tu experiencia en el sitio y
                        limite los servicios que podemos ofrecerte. Para más información consulta nuestra. &nbsp;
                        <a
                            href=''
                            onClick={(event) => {
                                event.preventDefault();
                                setMostrarAdministradorDeCookiesModal(false)
                                setMostrarPoliticasDeUsoDeCookiesModal(true)
                            }}
                            style={{ color: 'blue', textDecoration: 'none' }}
                        > Política de Cookies
                        </a>
                    </Typography>
                </Box>

                <Container fluid='defaultMobileSize' className="d-flex flex-column">
                    <Row className="justify-content-center" >
                        <Col defaultMobileSize={8} className="align-content-end"> {/* TODO content-end quizás no la mejor solución */}
                            <p className={estiloParaTextoDeSwitches}>Cookies para analítica web</p>
                        </Col>
                        <Col defaultMobileSize={4} className="">
                            <Switch
                                checked={primerChecked}
                                onClick={() => onInputChange({name: 'primerChecked', value: !primerChecked})}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col defaultMobileSize={8} className='align-content-end'> {/* TODO content-end quizás no la mejor solución */}
                            <p className={estiloParaTextoDeSwitches}>Cookies para analítica web</p>
                        </Col>
                        <Col defaultMobileSize={4}>
                            <Switch
                                checked={segundoChecked}
                                onClick={() => onInputChange({name: 'segundoChecked', value: !segundoChecked})}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col defaultMobileSize={8} className='align-content-end'>
                            <p className={estiloParaTextoDeSwitches}>Cookies de funcionalidad</p>
                        </Col>

                        <Col defaultMobileSize={4}>
                            <Switch
                                checked={tercerChecked}
                                onClick={() => onInputChange({name: 'tercerChecked', value: !tercerChecked})}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col defaultMobileSize={7} className='m-0'>
                            <p className={estiloParaTextoDeSwitches}>Cookies esenciales</p>
                        </Col>

                        <Col defaultMobileSize={4}>
                            <p className={estiloParaTextoDeSwitches}>Siempre activas</p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
Cuerpo.propTypes = {
    primerChecked: PropTypes.bool.isRequired,
    segundoChecked: PropTypes.bool.isRequired,
    tercerChecked: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired
}

const Footer = ({onResetState, onAcceptAll}) => {

    const {setMostrarAdministradorDeCookiesModal} = useContext(ModalContext)
    return (
        <Container fluid='defaultMobileSize'>
            <Row>
                <Col defaultMobileSize={ 6 }>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        className='text-black fw-bolder text-nowrap'
                        onClick={onAcceptAll}

                    >
                        Aceptar todas
                    </Button>
                </Col>

                <Col defaultMobileSize = { 6 }>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        className='text-black fw-bolder text-nowrap'
                        onClick={onResetState}
                    >
                        Rechazar todas
                    </Button>
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Button
                    variant='contained'
                    color='success'
                    onClick={() => setMostrarAdministradorDeCookiesModal(false)}
                    size='small'
                    className='text-white fs-6'
                >
                    Guardar cambios
                </Button>
            </Row>
        </Container>
    )
}

Footer.propTypes = {
    onResetState: PropTypes.func.isRequired,
    onAcceptAll: PropTypes.func.isRequired
}


