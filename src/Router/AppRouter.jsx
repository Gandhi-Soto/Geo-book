// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 15/05/2024      #
//   --# Descripcion General : Componente principal de ruta                           #
//   ---------------------------------------------------------------------------------#-->

import {GeoBookerRuta} from "../GeoBooker/Routes/GeoBookerRuta.jsx";
import {ModalProvider} from "../GeoBooker/Context/Index.js";
import {GeoBookerLayout} from "../GeoBooker/Layout/Index.js";

/**
 * Para posibles rutas que esten de alguna manera relacionadas con la aplicación pero fuera de la misma
 * se pueden manejar aquí.
 * @returns {JSX.Element}
 * @constructor
 */
export const AppRouter = () => {

    /*
        Modal provider se proporciona en este nivel para que pueda ser utilizado
        en cualquier parte de la aplicación.
     */

    return (
        <ModalProvider>
            <GeoBookerLayout>
                <GeoBookerRuta/>
            </GeoBookerLayout>
        </ModalProvider>
    )
}
