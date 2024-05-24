// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 16/05/2024      #
//   --# Descripcion General : Variables de modales dispersas por toda la app         #
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
// eslint-disable-next-line react/prop-types
export const ModalProvider = ({ children }) => {
    const [mostrarInicioCookiesModal, setMostrarInicioCookiesModal] = useState(true);
    const [mostrarAdministradorDeCookiesModal, setMostrarAdministradorDeCookiesModal] = useState(false);
    const [mostrarPoliticasDeUsoDeCookiesModal, setMostrarPoliticasDeUsoDeCookiesModal] = useState(false);
    const [mostrarDerechosReservadosModal, setMostrarDerechosReservadosModal] = useState(false);

    useEffect(() => {
        setMostrarInicioCookiesModal(true)
    }, []);

    return (
        <ModalContext.Provider value ={{
            mostrarInicioCookiesModal: mostrarInicioCookiesModal,
            setMostrarInicioCookiesModal: setMostrarInicioCookiesModal,

            mostrarAdministradorDeCookiesModal: mostrarAdministradorDeCookiesModal,
            setMostrarAdministradorDeCookiesModal: setMostrarAdministradorDeCookiesModal,

            mostrarPoliticasDeUsoDeCookiesModal: mostrarPoliticasDeUsoDeCookiesModal,
            setMostrarPoliticasDeUsoDeCookiesModal: setMostrarPoliticasDeUsoDeCookiesModal,

            mostrarDerechosReservadosModal: mostrarDerechosReservadosModal,
            setMostrarDerechosReservadosModal: setMostrarDerechosReservadosModal
        }} >
                { children }
        </ModalContext.Provider>
    )
}

ModalProvider.prototype = {
    children: PropTypes.node.isRequired
}