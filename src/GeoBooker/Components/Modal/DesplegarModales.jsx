// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 21/05/2024      #
//   --# Descripcion General : Componente que controla el despliegue de cada modal    #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Se agregó el modal de aviso de privacidad              #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->


import {useContext} from 'react'
import {
    AdministradorDeCookiesModal,
    DerechosReservadosModal,
    InicioCookiesModal,
    // INICIO CAMBIO GSS-110624
    PoliticaDeUsoDeCookiesModal,
    AvisoDePrivacidadModal
    // FIN CAMBIO GSS-110624
} from "./Index.js";
import {ModalContext} from "../../Context/Index.js";


/**
 * Cuando el usuario entra a la aplicación se desplegarán ciertos modales
 * @returns {Element}
 * @constructor
 */
export const DesplegarModales = () => {
    const {
        mostrarInicioCookiesModal,
        mostrarAdministradorDeCookiesModal,
        mostrarPoliticasDeUsoDeCookiesModal,
        // INICIO CAMBIO GSS-110624
        mostrarDerechosReservadosModal,
        mostrarAvisoDePrivacidadModal
        // FIN CAMBIO GSS-110624
    } = useContext(ModalContext);

    return (
        <>
            {mostrarInicioCookiesModal && <InicioCookiesModal/>}

            {mostrarAdministradorDeCookiesModal && <AdministradorDeCookiesModal/>}

            {mostrarPoliticasDeUsoDeCookiesModal && <PoliticaDeUsoDeCookiesModal/>}

            {mostrarDerechosReservadosModal && <DerechosReservadosModal/>}
            {/* INICIO CAMBIO GSS-110624 */}
            {mostrarAvisoDePrivacidadModal && <AvisoDePrivacidadModal/>}
            {/* FIN CAMBIO GSS-110624 */}
        </>
    )
}