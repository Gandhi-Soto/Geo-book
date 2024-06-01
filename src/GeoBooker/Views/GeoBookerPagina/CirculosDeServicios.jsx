// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 24/05/2024      #
//   --# Descripcion General : 9 Circulos de servicios                                #
//   ---------------------------------------------------------------------------------#-->

/**
 * Este componente despliega los 9 circulos de servicios en la pagina de GeoBooker
 * [Atencion medica, Salud y belleza, Alimentos y bebeidas]
 * [Diversion y entretenimiento, Servicios profesionales, Servicios vehiculares]
 * [Mantenimiento y construccion, educacion y capacitacion, comercios - mayoreo y menuddeo]
 * @returns {JSX.Element}
 * @constructor
 */

import {
    IconoAtencionMedica, IconoSaludYBelleza, IconoAlimentosYBebidas,
    IconoDiversionYEntretenimiento, IconoServiciosProfesionales, IconoServiciosVehiculares,
    IconoMantenimientoYConstruccion, IconoEducacionYCapacitacion, IconoComerciosMayoreoYMenudeo
} from "../../../assets/GeoBooker/Index.js";
import {Box, Grid, ImageListItem, ImageListItemBar} from "@mui/material";
import {TypographySmallText} from "../../Theme/index.js";


export const CirculosDeServicios = () => {
    return (
        <Grid container spacing={2}>
            {
                ListaDeServicios.map(item =>
                    <Grid item
                          xs={4}
                          sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'flex-start',
                          }}
                          key={item.id}
                    >
                        <ImageListItem
                            sx={{
                                width: '5rem',
                                height: '5rem',
                                display: 'flex', // Añade esta línea
                                flexDirection: 'column', // Añade esta línea
                                alignItems: 'center', // Añade esta línea
                            }}
                            key={item.id}
                        >
                            <img
                                src={item.icono}
                                alt={item.nombre}
                                style={{ width: '5rem  ', height: '5rem' }}
                            />
                            <Box sx={{ width: '8rem' }}>
                                <ImageListItemBar
                                    title={
                                        <TypographySmallText
                                            sx={{
                                                whiteSpace: 'normal', // Permite que el texto se divida en varias líneas
                                                color: 'white',
                                                fontWeight: 'bold',
                                                wordWrap: 'break-word', // Asegura que las palabras largas se dividan
                                            }}
                                        >
                                            {item.nombre}
                                        </TypographySmallText>
                                    }
                                    position='below'
                                />
                            </Box>
                        </ImageListItem>
                    </Grid>
                )
            }
        </Grid>
    )
}

const ListaDeServicios = [
    {
        id: 1,
        nombre: 'Atención médica',
        icono: IconoAtencionMedica
    },
    {
        id: 2,
        nombre: 'Salud y belleza',
        icono: IconoSaludYBelleza
    },
    {
        id: 3,
        nombre: 'Alimentos y bebidas',
        icono: IconoAlimentosYBebidas
    },
    {
        id: 4,
        nombre: 'Diversión y entretenimiento',
        icono: IconoDiversionYEntretenimiento
    },
    {
        id: 5,
        nombre: 'Servicios profesionales',
        icono: IconoServiciosProfesionales
    },
    {
        id: 6,
        nombre: 'Servicios vehiculares',
        icono: IconoServiciosVehiculares
    },
    {
        id: 7,
        nombre: 'Mantenimiento y construcción',
        icono: IconoMantenimientoYConstruccion
    },
    {
        id: 8,
        nombre: 'Educación y capacitación',
        icono: IconoEducacionYCapacitacion
    },
    {
        id: 9,
        nombre: 'Educación y capacitación',
        icono: IconoComerciosMayoreoYMenudeo
    }
]
