// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 20/05/2024      #
//   --# Descripcion General : Componente del pie de pagina                           #
//   ---------------------------------------------------------------------------------#-->

import {useContext} from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import {ModalContext} from "../Context/Index.js";
import {PoweredBy} from '../../assets/Footer/Index.js';
import {ListaDeRedesSociales} from "./Index.js";

export const Footer = () => {
    const lugarDeTrabajoEnGoogleMaps =
        'https://www.google.com.mx/maps/place/Codigo+Geek/@19.5971178,-99.0490081,18z/data=!4m6!3m5!1s0x85d1f10fd2ab71af:0x7358aa29011bf3ba!8m2!3d19.5972794!4d-99.0479566!16s%2Fg%2F11y4q43b_v?entry=ttu'

    const {setMostrarCuartoModal} = useContext(ModalContext);
    return (
        <Box sx={{bgcolor: 'black', color: 'white', py: 3}}>
            <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center" className='fs-6' gutterBottom>
                            Visita nuestras redes para mantenerte informado de nuestras novedades.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ListaDeRedesSociales/>
                    </Grid>

                    <Grid item xs={12}>
                        <Link variant='body2' href={ lugarDeTrabajoEnGoogleMaps } target="_blank">
                            Av. Insurgentes 2 Bis, Centro, 55000 Ecatepec de Morelos, Méx., México
                        </Link>
                        {/*Av. Insurgentes 2 Bis, Centro, 55000 Ecatepec de Morelos, Méx., México*/}

                    </Grid>
                    <Grid item xs={6}>
                        <Link variant='body2' onClick={() => setMostrarCuartoModal(true)}>
                            Todos los derechos reservados
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link href="https://codigogeek.com.mx/" target="_blank">
                            <img
                                src={ PoweredBy }
                                alt='Código Geek'
                            />
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
