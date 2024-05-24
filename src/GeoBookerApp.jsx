// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 14/05/2024      #
//   --# Descripcion General : Componente principal de la aplicacion                  #
//   ---------------------------------------------------------------------------------#-->

import './Style.css'
import {AppRouter} from "./Router/AppRouter.jsx";
import {AppTheme} from "./GeoBooker/Theme/AppTheme.jsx";

export const GeoBookerApp = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    );
}
