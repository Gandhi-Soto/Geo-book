// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 27/05/2024      #
//   --# Descripcion General : Componente de quienes somos                            #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Se agrega la animacion a las cajitas                   #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->

import {Grid} from "@mui/material";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {GifDeUbicacion, ImagenDe4Personas, LogoAColor} from '../../../assets/GeoBooker/Index.js';
import {CajitaAmarilla} from "../../UtilComponents/Index.js";
import {TypographyMediumText, TypographyMediumTitle} from "../../Theme/index.js";

const estiloCentrado = {display: 'flex', justifyContent: 'center', alignItems: 'center'}

// este ancho solo aplica para este componente
const anchoDeLasCajitasAmarillas = '10rem';

export const QuienesSomos = () => {
    return (
        <Grid container>

            <Grid
                mt='2rem'
                item
                xs={12}
                sx={{
                    paddingLeft: '5rem',
                    paddingRight: '5rem',
                }}
            >
                <img src={LogoAColor}/>
            </Grid>

            <Grid mt='2.5rem' item xs={12} sx={{...estiloCentrado, paddingLeft: '2rem', paddingRight: '2rem'}}
            >
                <TypographyMediumTitle>
                    ¡Será tu aliado en el crecimiento de tu negocio!
                </TypographyMediumTitle>
            </Grid>

            {/* INICIO CAMBIO GSS-050624 */}
            <Grid
                item
                mt='3rem'
                xs={12}
                sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', overflow: 'hidden' }}
            >
                <CajitaAmarilla
                    sx={{
                        position: 'absolute',
                        top: '0.6rem', // Ajusta este valor según sea necesario
                        right: '0', // Asegura que la caja esté alineada a la derecha
                        width: anchoDeLasCajitasAmarillas,
                    }}
                    animacionDeAnimateCss='animate__fadeInRight'
                />
                <img
                    src={ImagenDe4Personas}
                    style={{width: '100%', objectFit: 'cover'}}
                />
            </Grid>
            {/* FIN CAMBIO GSS-050624 */}

            <Grid mt='1.5rem' item xs={12} sx={{...estiloCentrado}}>
                <TypographyMediumTitle>
                    ¿Quiénes somos?
                </TypographyMediumTitle>
            </Grid>

            <Grid mt='1rem' item xs={12} sx={{...estiloCentrado, paddingLeft: '2rem', paddingRight: '2rem'}}>
                <TypographyMediumText
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    “GeoBooker” es una plataforma digital que busca brindar a profesionales a cargo y/o dueños de
                    cualquier tipo de negocio que cuente con un establecimiento físico en México, un sitio donde formar
                    una comunidad digital interconectada.
                    <br/> <br/>
                    Permitiéndoles publicar y dar a conocer sus instalaciones, sus
                    servicios, sus precios, promociones, eventos, y diferentes contenidos multimedia para difundir sus
                    negocios.
                </TypographyMediumText>
            </Grid>

            {/* INICIO CAMBIO GSS-050624 */}
            <Grid item mt='2rem' xs={12} sx={{display: 'flex', justifyContent: 'flex-end', overflow: 'hidden'}}>
                <CajitaAmarilla
                    sx={{width: anchoDeLasCajitasAmarillas}}
                    animacionDeAnimateCss='animate__fadeInRight'
                />
            </Grid>
            {/* FIN CAMBIO GSS-050624 */}

            <Grid item xs={12} sx={{...estiloCentrado}}>
                <img
                    height='180rem'
                    width='200rem'
                    src={GifDeUbicacion}
                />
            </Grid>

            {/* INICIO CAMBIO GSS-050624 */}
            <Grid item mt='1rem' xs={12} sx={{display: 'flex', justifyContent: 'flex-start', overflow: 'hidden'}}>
                <CajitaAmarilla
                    sx={{width: anchoDeLasCajitasAmarillas}}
                    animacionDeAnimateCss='animate__fadeInLeft'
                />
            </Grid>
            {/* FIN CAMBIO GSS-050624 */}

            <Grid mt='1rem' item xs={12} sx={{...estiloCentrado}}>
                <TypographyMediumTitle>
                    ¡Geo Booker es para todos!
                    <br/>
                    ¡Llegas justo a tiempo!
                </TypographyMediumTitle>
            </Grid>

            <Grid mt='1rem' item xs={12} sx={{...estiloCentrado}}>
                <AccessTimeFilledIcon sx={{fontSize: '3rem'}}/>
            </Grid>

            <Grid mt='1rem' mb='1rem' item xs={12} sx={{...estiloCentrado, paddingLeft: '2rem', paddingRight: '2rem'}}>
                <TypographyMediumText sx={{fontWeight: 'bold'}}>
                    Al registrarte, atenderemos y confirmaremos tus datos vía WhatsApp, donde te brindaremos un código
                    de suscripción GRATUITO que podrás usar en nuestra próxima etapa para darte de alta.
                </TypographyMediumText>
            </Grid>

        </Grid>
    )
}
