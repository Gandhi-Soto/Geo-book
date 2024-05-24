// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 17/05/2024      #
//   --# Descripcion General : Navbar de la pagina                                    #
//   ---------------------------------------------------------------------------------#-->


import {AppBar, CssBaseline, Slide, Toolbar, Typography, useScrollTrigger} from "@mui/material";
import PropTypes from "prop-types";
import {useContext} from "react";
import {ModalContext} from "../Context/Index.js";

function HideOnScroll(props) {
    const { children, window } = props;
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
    const {mostrarPrimerModal, mostrarSegundoModal, mostrarTercerModal, mostrarCuartoModal} = useContext(ModalContext);
    const mostrandoUnModal = mostrarPrimerModal || mostrarSegundoModal || mostrarTercerModal || mostrarCuartoModal;

    return (
        <>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar style={{
                    backgroundColor: mostrandoUnModal ? 'rgba(64, 72, 176, 0.5)' : '#5558C4'
                }} elevation={0} >
                    <Toolbar>
                        <Typography variant="h2" className='fs-5 fw-semibold  w-100 text-center' style={{ color: '#F5F5F5' }}>
                            ¡Nos encontraste! ¿Listo para crecer tu negocio? ¡Da clic!
                        </Typography>
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


