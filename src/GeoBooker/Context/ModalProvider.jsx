// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 16/05/2024      #
//   --# Descripcion General : Variables de modales dispersas por toda la app         #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 31/05/2024                                             #
//   --# Modificacion        : Se cambiaron los nombres de las variables              #
//   --# Marca de cambio     : GSS-310524                                             #
//   ---------------------------------------------------------------------------------#-->
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Cambios en la lógica para desplegar modales            #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->

import {useEffect, useState} from 'react'
import PropTypes from "prop-types";
import {ModalContext} from "./ModalContext.jsx";

/**
 * Este provider sirve para tener referencia a los modales que se van a mostrar en la aplicación
 * Se ofrece este provider para que no tener que pasar props a todos los componentes.
 * Estan disponibles desde el componente <AppRouter /> en el archivo AppRouter.jsx
 * @param children
 * @returns {Element}
 * @constructor
 */

export const ModalProvider = ({ children }) => {
    const [mostrarInicioCookiesModal, setMostrarInicioCookiesModal] = useState(true);
    const [mostrarAdministradorDeCookiesModal, setMostrarAdministradorDeCookiesModal] = useState(false);
    const [mostrarPoliticasDeUsoDeCookiesModal, setMostrarPoliticasDeUsoDeCookiesModal] = useState(false);
    const [mostrarDerechosReservadosModal, setMostrarDerechosReservadosModal] = useState(false);
    //INICIO DE CAMBIO: GSS-110624
    const [mostrarAvisoDePrivacidadModal, setMostrarAvisoDePrivacidadModal] = useState(false);

    const desplegandoUnModal =
        mostrarInicioCookiesModal ||
        mostrarAdministradorDeCookiesModal ||
        mostrarPoliticasDeUsoDeCookiesModal ||
        mostrarDerechosReservadosModal ||
        mostrarAvisoDePrivacidadModal;
    //FIN DE CAMBIO: GSS-110624

    useEffect(() => {
        setMostrarInicioCookiesModal(true)
    }, []);

    // MARCA INICIO GSS-310524
    return (
        <ModalContext.Provider value ={{
            //INICIO DE CAMBIO: GSS-110624
            desplegandoUnModal,
            //FIN DE CAMBIO: GSS-110624
            mostrarInicioCookiesModal,
            setMostrarInicioCookiesModal,

            mostrarAdministradorDeCookiesModal,
            setMostrarAdministradorDeCookiesModal,

            mostrarPoliticasDeUsoDeCookiesModal,
            setMostrarPoliticasDeUsoDeCookiesModal,

            mostrarDerechosReservadosModal,
            //INICIO DE CAMBIO: GSS-110624
            setMostrarDerechosReservadosModal,

            mostrarAvisoDePrivacidadModal,
            setMostrarAvisoDePrivacidadModal
            //FIN DE CAMBIO: GSS-110624
        }} >
                { children }
        </ModalContext.Provider>
    )
    // MARCA FIN GSS-310524
}

// MARCA INICIO GSS-310524
ModalProvider.propTypes = {
    children: PropTypes.node.isRequired
}
// MARCA FIN GSS-310524