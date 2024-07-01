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
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Estilos responsivos para los circulos                  #
//   --# Marca de cambio     : BCMC-110624                                            #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 13/06/2024                                             #
//   --# Modificacion        : Mejor distrubución y proporción de elementos responsive#
//   --# Marca de cambio     : BCMC-130624                                            #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 25/06/2024                                             #
//   --# Modificacion        : Correcion de un titulo repetido                        #
//   --# Marca de cambio     : BCMC-250624                                            #
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
// INICIO CAMBIO GSS-050624
import {Fragment, useContext} from "react";
import {FormContext} from "../../Context/Index.js";
import { animateScroll as scroll } from 'react-scroll';
// FIN CAMBIO GSS-050624

export const CirculosDeServicios = () => {
    const theme = useTheme();
    // INICIO CAMBIO GSS-050624
    const { formReferencia } = useContext(FormContext);
    // Funcion para hacer scroll al formulario
    const handleIconClick = () => {
        const top = formReferencia.current.offsetTop - 60;
        scroll.scrollTo(top, { duration: 500, smooth: 'easyInOutQuint' });
    }
    // FIN CAMBIO GSS-050624
    return (
    <>
        {/* INICIO CAMBIO BCMC-110624 */}
            {/* INICIO DE CAMBIO: BCMC-130624 */}
        <Grid container 
              justifyContent='center'
              sx={{
                  [theme.breakpoints.up('defaultWebSize')]: {
                    //   backgroundColor: "red",
                    rowGap: "2rem",
                  },
                    [theme.breakpoints.up('mediumWebSize')]: {
                        rowGap: "4rem",
                    },
              }}
        >
            {/* FIN DE CAMBIO: BCMC-130624 */}
        {/* FIN DE CAMBION BCMC-110624 */}
            {
                ListaDeServicios.map(item =>
                    <Fragment key={item.id}>
                    {/* INICIO CAMBIO BCMC-110624 */}
                    <Grid item defaultMobileSize={4} defaultWebSize={2.4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            //   border: "2px solid black",
                        }}
                        key={item.id}
                    >
                    {/* FIN DE CAMBION BCMC-110624 */}
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
                                {/* INICIO DE CAMBIO: BCMC-110624 */}
                            <Box
                                sx={{
                                    width: "4rem",
                                    height: "4rem",
                                    [theme.breakpoints.up('defaultWebSize')]: {
                                        width: "10rem",
                                        height: "10rem",
                                    },
                                    [theme.breakpoints.up('smallWebSize')]: {
                                        width: "10rem",
                                        height: "10rem",
                                    },
                                    [theme.breakpoints.up('mediumWebSize')]: {
                                        width: "10rem",
                                        height: "10rem",
                                    },
                                    [theme.breakpoints.up('largeWebSize')]: {
                                        width: "12rem",
                                        height: "12rem",
                                    },
                                    // INICIO DE CAMBIO: BCMC-130624
                                    [theme.breakpoints.up('wideWebSize')]: {
                                        width: "18rem",
                                        height: "18rem",
                                    }
                                    // FIN DE CAMBIO: BCMC-130624
                                }}
                            >
                                <img
                                    src={item.icono}
                                    alt={item.nombre}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        transition: 'transform 0.3s ease-in-out', // Añade esta línea
                                        
                                cursor: 'pointer', // Añade esta línea
                                    }}
                                    onClick={() => handleIconClick()}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'} // Añade esta línea
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} // Añade esta línea
                                />
                            </Box>
                                {/* FIN DE CAMBIO: BCMC-110624 */}
                            { /* FIN CAMBIO GSS-050624 */ }
                            <Box
                                // INICIO DE CAMBIO: BCMC-110624
                                // style={{ width: '5rem  ', height: '5rem' }}
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
                                    },
                                    [theme.breakpoints.up('smallWebSize')]: {
                                        width: '13rem',
                                    },
                                    [theme.breakpoints.up('mediumWebSize')]: {
                                        width: '15rem',
                                    },
                                    // INICIO DE CAMBIO: BCMC-130624
                                    [theme.breakpoints.up('wideWebSize')]: {
                                        width: '23rem',
                                    }
                                    // FIN DE CAMBIO: BCMC-130624
                                // FIN DE CAMBIO: BCMC-110624
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
                                                    // INICIO DE CAMBIO: BCMC-110624
                                                    fontSize: "1.4rem",
                                                },
                                                [theme.breakpoints.up('smallWebSize')]: {
                                                    fontSize: "1.7rem",
                                                },
                                                [theme.breakpoints.up('mediumWebSize')]: {
                                                    fontSize: "2rem",
                                                },
                                                // INICIO DE CAMBIO: BCMC-130624
                                                [theme.breakpoints.up('wideWebSize')]: {
                                                    fontSize: "3rem",
                                                }
                                                // FIN DE CAMBIO: BCMC-130624
                                                    // FIN DE CAMBIO: BCMC-110624
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
                    </Fragment>
                )
            }
        </Grid>
    </>
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
        // INICIO DE CAMBIO: BCMC-250624
        nombre: 'Comercios mayoreo y menudeo',
        // FIN DE CAMBIO: BCMC-250624
        icono: IconoComerciosMayoreoYMenudeo
    }
]