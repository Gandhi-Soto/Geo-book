// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 17/05/2024      #
//   --# Descripcion General : Navbar de la pagina                                    #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 31/05/2024                                             #
//   --# Modificacion        : Se modifico el typography                              #
//   --# Marca de cambio     : GSS-310524                                             #
//   ---------------------------------------------------------------------------------#-->

// INICIO CAMBIO GSS-310524
import {AppBar, CssBaseline, Slide, Toolbar, useScrollTrigger} from "@mui/material";
// FIN CAMBIO GSS-310524

import PropTypes from "prop-types";
import {useContext} from "react";
import {ModalContext} from "../Context/Index.js";

// INICIO CAMBIO GSS-310524
import {TypographySmallText} from "../Theme/index.js";

// FIN CAMBIO GSS-310524

function HideOnScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );

}


export const Navbar = (props) => {
    // todo buscar la manera de no cambiar el color del navbar si se muestra un modal

    // INICIO CAMBIO GSS-310524
    const {
        mostrarInicioCookiesModal,
        mostrarAdministradorDeCookiesModal,
        mostrarPoliticasDeUsoDeCookiesModal,
        mostrarDerechosReservadosModal
    } = useContext(ModalContext);
    // FIN CAMBIO GSS-310524

    const mostrandoUnModal = mostrarInicioCookiesModal || mostrarAdministradorDeCookiesModal || mostrarPoliticasDeUsoDeCookiesModal || mostrarDerechosReservadosModal;
    return (
        <>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar style={{
                    backgroundColor: mostrandoUnModal ? 'rgba(64, 72, 176, 0.5)' : '#5558C4'
                }} elevation={0}>
                    <Toolbar>
                        {/*INICIO CAMBIO GSS-310524*/}
                        <TypographySmallText
                            className='w-100 text-center'
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            ¡Nos encontraste! ¿Listo para crecer tu negocio? ¡Da clic!
                        </TypographySmallText>
                        {/*FIN CAMBIO GSS-310524*/}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>


        </>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


