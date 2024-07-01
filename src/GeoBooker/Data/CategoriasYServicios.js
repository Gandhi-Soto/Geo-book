// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 13/06/2024      #
//   --# Descripcion General : Informacion que usa el formulario                      #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 25/06/2024                                             #
//   --# Modificacion        : El front ya no se rompa si no obtiene respuesta del    #
//                             back y se quitaron console logs                        #
//   --# Marca de cambio     : BCMC-250624                                            #
//   ---------------------------------------------------------------------------------#-->

import axios from "axios";
// INICIO DE CAMBIO: BCMC-250624
import { DB_CONNECTION } from "../../DbConfig";
// FIN DE CAMBIO: BCMC-250624

export const obtenerCategorias = async () => {
    try {
        // INICIO DE CAMBIO: BCMC-250624
        const response = await DB_CONNECTION.get(`/categorias`);
        // FIN DE CAMBIO: BCMC-250624
        const categoriasResult = response.data;
        const categorias = [];

        for(let i = 0; i < categoriasResult.length; i++) {
            categorias.push({
                value: categoriasResult[i].nombre_categoria,
                label: categoriasResult[i].nombre_categoria,
                id_categoria: categoriasResult[i].id_categoria
            })
        }

        return categorias;
    } catch (error) {
        // INICIO DE CAMBIO: BCMC-250624
        // console.error(error);
        return [];
        // FIN DE CAMBIO: BCMC-250624
    }
};

export const obtenerServicios = async () => {
    try {
        // INICIO DE CAMBIO: BCMC-250624
        const response = await DB_CONNECTION.get(`/servicios`);
        // FIN DE CAMBIO: BCMC-250624
        
        return response.data
    } catch (error) {
        // INICIO DE CAMBIO: BCMC-250624
        // console.error(error);
        return [];
        // FIN DE CAMBIO: BCMC-250624
    }
};