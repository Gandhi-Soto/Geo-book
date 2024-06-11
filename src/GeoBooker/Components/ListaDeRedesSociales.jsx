// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 20/05/2024      #
//   --# Descripcion General : Componente de la lista redes sociales de Codigo Geek   #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 31/05/2024                                             #
//   --# Modificacion        : Se agrego el componente                                #
//   --# Marca de cambio     : GSS-310524                                             #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Se aplico un efecto zoom a los iconos                 #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Estilos responsivos para los iconos de RRSS            #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->

// INICIO CAMBIO GSS-110624
import {ImageList, ImageListItem, Link, useMediaQuery, useTheme} from "@mui/material";
// FIN CAMBIO GSS-110624
import {
    FacebookIcon,
    InstagramIcon,
    TikTokIcon,
    TwitterIcon, // X Icon
    YouTubeIcon,
    LinkedInIcon,
    WhatsappIcon
} from '../../assets/RedesSociales/Index.js';

// INICIO CAMBIO GSS-310524
export const ListaDeRedesSociales = () => {

    const theme = useTheme();
    // INICIO CAMBIO GSS-110624
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('mediumMobileSize'));
    const isMediumMobile = useMediaQuery(theme.breakpoints.up('mediumMobileSize'));
    const isWeb = useMediaQuery(theme.breakpoints.up('defaultWebSize'));
    // FIN CAMBIO GSS-110624

    // INICIO CAMBIO GSS-110624
    const gap = isSmallMobile ? 10 : isMediumMobile ? 40 : isWeb ? 60 : 15;
    // FIN CAMBIO GSS-110624

    // INICIO CAMBIO GSS-110624
    return (

        // INICIO CAMBIO GSS-060524
        <ImageList cols={7} gap={gap} style={{ overflow: 'visible' }} >
            {
                itemData.map( item =>
                    <ImageListItem
                        key={item.icon}
                        sx={{
                            overflow: 'visible',
                            [theme.breakpoints.up('defaultMobileSize')]: {
                                width: 30, height: 30
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                width: 40, height: 40
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                width: 25, height: 25
                            }
                        }}
                    >
                        <Link href={ item.link } target="_blank" >
                            <img
                                src={item.icon}
                                alt={item.alt}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.3)'} // Añade esta línea
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} // Añade esta línea
                                style={{
                                    transition: 'transform 0.3s ease-in-out', // Añade esta línea

                                }}
                            />
                        </Link>
                    </ImageListItem>
                )
            }
        </ImageList>
        // FIN CAMBIO GSS-060524
    )
    // FIN CAMBIO GSS-110624
}
// INICIO FIN GSS-310524

const itemData = [
    {
        icon: FacebookIcon,
        alt: 'Facebook',
        link: "https://www.facebook.com/codigogeekmx"
    },
    {
        icon: InstagramIcon,
        alt: 'Instagram',
        link: "https://www.instagram.com/codigogeekmx/"
    },
    {
        icon: TikTokIcon,
        alt: 'TikTok',
        link: "https://www.tiktok.com/@codigogeek?_t=8dJEB7rmInl&_r=1"
    },
    {
        icon: TwitterIcon,
        alt: 'Twitter',
        link: "https://twitter.com/codigogeekmx?lang=es"
    },
    {
        icon: YouTubeIcon,
        alt: 'YouTube',
        link: "https://www.youtube.com/channel/UCsfdvyXWQafA6FvHTVmVEGQ"
    },
    {
        icon: LinkedInIcon,
        alt: 'LinkedIn',
        link: "https://mx.linkedin.com/company/codigo-geek"
    },
    {
        icon: WhatsappIcon,
        alt: 'Whatsapp',
        link: "https://www.whatsapp.com/catalog/5215527076098/?app_absent=0"
    }
]