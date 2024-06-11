// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 15/05/2024      #
//   --# Descripcion General : Componente modal de  Inicio de Cookies                 #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Cambios en el uso de etiquetas de Material y BS5       #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->

import {Button, Col, Container, Row} from "react-bootstrap";
import {ModalLayout} from "../../Layout/Index.js";
import {useContext} from "react";
import {ModalContext} from "../../Context/Index.js";
import './StyleModal.css';
import {Typography, useTheme} from "@mui/material";
import {TypographySmallText} from "../../Theme/index.js";

/**
 * Componente que muestra un modal de inicio de cookies
 * TODO encontrar la manera de coloca un divisor entre el cuerpo y el footer
 */
export const InicioCookiesModal = () => {
    const {mostrarInicioCookiesModal} = useContext(ModalContext);
    return (
        <ModalLayout
            mostrarModal={mostrarInicioCookiesModal}
            titulo={<></>}
            cuerpo={<Cuerpo/>}
            footer={<Footer/>}
            dialogClassName='Modal-Style-InicioCookiesModal'
        />
    );
}

const Cuerpo = () => {

    const theme = useTheme();

    return (
        <TypographySmallText variant="p" className='fs-5 lh-sm' 
            sx={{
                [theme.breakpoints.up('defaultMobileSize')]: {
                    color: "white"
                },
            }}
        >
            Usamos cookies para mejorar GeoBooker, algunas son necesarias para el funcionamiento del sitio,
            otras son opcionales y te brindan una experiencia personalizada. Puedes aceptar todas las cookies, rechazar
            todas las opcionales o personalizarlas, para más información consulta nuestra Política de Cookies
        </TypographySmallText>
    )
}

const Footer = () => {
    const {setMostrarAdministradorDeCookiesModal, setMostrarInicioCookiesModal} = useContext(ModalContext);
    return (
        <>
            <Container fluid='sm'>
                <Row>
                    {/* INICIO CAMBIO GSS-110624 */}
                    <Col>
                        <Button
                            variant="secondary"
                            onClick={() => setMostrarInicioCookiesModal(false)}
                            size="sm"
                            className='w-100'
                        >
                            Aceptar todas
                        </Button>
                    </Col>
                    {/* FIN CAMBIO GSS-110624 */}

                    {/* INICIO CAMBIO GSS-110624 */}
                    <Col>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                setMostrarInicioCookiesModal(false)
                            }}
                            size='sm'
                            className='w-100'
                        >
                            Navegar sin cookies
                        </Button>
                    </Col>
                    {/* FIN CAMBIO GSS-110624 */}
                </Row>
                <Row
                    style={{
                        marginTop: '0.5rem',
                    }}
                >
                    <Button
                        className='text-white'
                        variant="link"
                        onClick={() => {
                            setMostrarInicioCookiesModal(false);
                            setMostrarAdministradorDeCookiesModal(true);
                        }}>
                        Administrar cookies
                    </Button>
                </Row>
            </Container>
        </>
    )
}