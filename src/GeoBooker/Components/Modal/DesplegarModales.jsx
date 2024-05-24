// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 21/05/2024      #
//   --# Descripcion General : Componente que controla el despliegue de cada modal    #
//   ---------------------------------------------------------------------------------#-->


import {useContext} from 'react'
import {
    AdministradorDeCookiesModal,
    DerechosReservadosModal,
    InicioCookiesModal,
    PoliticaDeUsoDeCookiesModal
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
        mostrarDerechosReservadosModal
    } = useContext(ModalContext);

    return (
        <>
            {mostrarInicioCookiesModal && <InicioCookiesModal/>}

            {mostrarAdministradorDeCookiesModal && <AdministradorDeCookiesModal/>}

            {mostrarPoliticasDeUsoDeCookiesModal && <PoliticaDeUsoDeCookiesModal/>}

            {mostrarDerechosReservadosModal && <DerechosReservadosModal/>}
        </>
    )
}
