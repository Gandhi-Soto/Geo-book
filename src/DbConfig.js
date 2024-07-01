// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 18/06/2024      #
//   --# Descripcion General : Variable de conexión para la base de datos en el front #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 25/06/2024                                             #
//   --# Modificacion        : Se reestructuró la variable de conexión para usar la   #
//                             URL de la variable de entorno de producción, de        #
//                             desarrollo o la URL por defecto.                       #
//   --# Marca de cambio     : BCMC-250624                                            #
//   ---------------------------------------------------------------------------------#-->

// INICIO DE CAMBIO: BCMC-250624
import axios from 'axios';

const baseURL = import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_APP_API_URL_PROD
    : import.meta.env.VITE_APP_API_URL_DEV;


export const DB_CONNECTION = axios.create({
    baseURL: baseURL || 'http://localhost:5000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
// FIN DE CAMBIO: BCMC-250624