// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 24/05/2024      #
//   --# Descripcion General : 9 Circulos de servicios                                #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Se agrego el efecto zoom a los iconos                  #
//   --# Marca de cambio     : GSS-050624                                             #
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
import {Box, Grid, ImageListItem, ImageListItemBar, useTheme} from "@mui/material";
import {TypographySmallText} from "../../Theme/index.js";
import classNames from "classnames";
import useBreakpoints from "../../Hooks/UseBreakpoints.jsx";

// INICIO CAMBIO GSS-050624
import {useContext} from "react";
import {FormContext} from "../../Context/Index.js";
import { animateScroll as scroll } from 'react-scroll';
// FIN CAMBIO GSS-050624


/**
 * Este componente despliega los 9 circulos de servicios en la pagina de GeoBooker
 * [Atencion medica, Salud y belleza, Alimentos y bebeidas]
 * [Diversion y entretenimiento, Servicios profesionales, Servicios vehiculares]
 * [Mantenimiento y construccion, educacion y capacitacion, comercios - mayoreo y menuddeo]
 * @returns {JSX.Element}
 * @constructor
 */
export const CirculosDeServicios = () => {

    const theme = useTheme();

    const breakpoints = useBreakpoints();


    // INICIO CAMBIO GSS-050624
    const { formReferencia } = useContext(FormContext);

    // Funcion para hacer scroll al formulario
    const handleIconClick = () => {
        const top = formReferencia.current.offsetTop - 60;
        scroll.scrollTo(top, { duration: 500, smooth: 'easyInOutQuint' });
    }
    // FIN CAMBIO GSS-050624

    return (
        <Grid container spacing={2}
            sx={{
                [theme.breakpoints.up('defaultWebSize')]: {
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    width: "51rem",
                    // backgroundColor: "red",
                    margin: "0 auto"
                }
            }}
        >
            {
                ListaDeServicios.map(item =>
                    <Grid item defaultMobileSize={4} defaultWebSize={3}
                          sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'flex-start',
                            //   border: "2px solid black",
                          }}
                          key={item.id}
                    >
                        <ImageListItem
                            sx={{
                                width: '10rem',
                                height: '5rem',
                                display: 'flex', // Añade esta línea
                                flexDirection: 'column', // Añade esta línea
                                alignItems: 'center', // Añade esta línea
                            }}
                            key={item.id}
                        >
                            { /* INICIO CAMBIO GSS-050624 */ }
                            <img
                                src={item.icono}
                                alt={item.nombre}
                                style={{
                                    width: '4em',
                                    height: '4rem',
                                    transition: 'transform 0.3s ease-in-out', // Añade esta línea
                                }}
                                onClick={() => handleIconClick()}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'} // Añade esta línea
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} // Añade esta línea
                            />
                            { /* FIN CAMBIO GSS-050624 */ }

                            <Box
                                style={{ width: '5rem  ', height: '5rem' }}
                                sx={{ 
                                    width: '8rem',
                                    [theme.breakpoints.up('smallMobileSize')]: {
                                        width: '12rem',
                                    },
                                    [theme.breakpoints.up('mediumMobileSize')]: {
                                        width: '15rem',
                                    },
                                    [theme.breakpoints.up('defaultWebSize')]: {
                                        width: '10.4rem',
                                    }
                                }}
                            >
                                <ImageListItemBar
                                    title={
                                        <TypographySmallText
                                            sx={{
                                                whiteSpace: 'normal', // Permite que el texto se divida en varias líneas
                                                color: 'white',
                                                fontWeight: 'bold',
                                                wordWrap: 'break-word', // Asegura que las palabras largas se dividan
                                                [theme.breakpoints.up('defaultWebSize')]: {
                                                    color: "black",
                                                }
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
