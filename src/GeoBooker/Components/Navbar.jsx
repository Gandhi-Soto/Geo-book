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
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Ahora solo el navbar se muestra si no hay modales      #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->

// INICIO CAMBIO GSS-310524
import {AppBar, CssBaseline, Toolbar, useScrollTrigger} from "@mui/material";
// FIN CAMBIO GSS-310524

import PropTypes from "prop-types";

// INICIO CAMBIO GSS-310524
import {TypographySmallText} from "../Theme/index.js";

// FIN CAMBIO GSS-310524

function HideOnScroll(props) {
    const {children, window} = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        // <Slide appear={false} direction="down" in={!trigger}>
        children
        // </Slide>
    );

}


export const Navbar = (props) => {
    // todo buscar la manera de no cambiar el color del navbar si se muestra un modal

    return (
        <>
            <CssBaseline/>
            <HideOnScroll {...props}>
                    { /* INICIO CAMBIO GSS-050624 */}
                <AppBar
                    style={{
                        backgroundColor: '#5558C4'
                    }}
                    elevation={0}
                    position='fixed'
                >
                    {/* FIN CAMBIO GSS-050624 */}

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


