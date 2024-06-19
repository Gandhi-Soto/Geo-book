// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 17/06/2024      #
//   --# Descripcion General : Endpoints para las rutas del cliente                   #
//   ---------------------------------------------------------------------------------#-->

import { Router } from 'express';
import { getClientes, getCliente, createCliente, updateCliente, deleteCliente } from '../Controllers/Cliente.js';

export const ClienteRouter = Router();

ClienteRouter.get("/", getClientes);
ClienteRouter.get("/:id", getCliente);
ClienteRouter.post("/", createCliente);
ClienteRouter.put("/:id", updateCliente);
ClienteRouter.delete("/:id", deleteCliente);