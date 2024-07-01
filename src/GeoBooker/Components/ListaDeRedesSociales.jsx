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
//   --# Modificacion        : Se aplico un efecto zoom a los iconos                  #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Estilos responsivos para los iconos de RRSS            #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 13/06/2024                                             #
//   --# Modificacion        : La lista es responsiva en todos los breakpoints        #
//   --# Marca de cambio     : GSS-130624                                             #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 25/06/2024                                             #
//   --# Modificacion        : Correctos links de geobooker                           #
//   --# Marca de cambio     : GSS-250624                                             #
//   ---------------------------------------------------------------------------------#-->

// INICIO CAMBIO GSS-110624
import {ImageList, ImageListItem, Link, useTheme} from "@mui/material";
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
import {useContext} from "react";
import {BreakpointsContext} from "../Context/Index.js";

// INICIO CAMBIO GSS-310524
export const ListaDeRedesSociales = () => {

    const theme = useTheme();
    const {
        isUpSmallMobile,
        isUpMediumMobile,
        isUpDefaultWebSize,
        isUpSmallWebSize,
        isUpMediumWebSize,
        isUpLargeWebSize,
        isUpWideWebSize,
    } = useContext(BreakpointsContext);
    

    // INICIO CAMBIO GSS-110624
    // INICIO CAMBIO GSS-130624
    const gap = isUpWideWebSize ? 190
            : isUpLargeWebSize ? 110
                : isUpMediumWebSize ? 100
                    : isUpSmallWebSize ? 85
                        : isUpDefaultWebSize ? 70
                            : isUpMediumMobile ? 40
                                : isUpSmallMobile ? 30 : 20;
    // FIN CAMBIO GSS-130624
    // FIN CAMBIO GSS-110624

    // INICIO CAMBIO GSS-110624
    return (

        // INICIO CAMBIO GSS-060524
        <ImageList cols={7} gap={gap} style={{overflow: 'visible'}}>
            {
                itemData.map(item =>
                    <ImageListItem
                        key={item.icon}
                        sx={{
                            // INICIO CAMBIO GSS-130624
                            overflow: 'visible',
                            [theme.breakpoints.up('defaultMobileSize')]: {
                                width: 20, height: 20
                            },
                            [theme.breakpoints.up('smallMobileSize')]: {
                                width: 30, height: 30
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                width: 35, height: 35
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                width: 30, height: 30
                            },
                            [theme.breakpoints.up('smallWebSize')]: {
                                width: 40, height: 40
                            },
                            [theme.breakpoints.up('largeWebSize')]: {
                                width: 50, height: 50
                            },
                            [theme.breakpoints.up('wideWebSize')]: {
                                width: 65, height: 65
                            }
                            // FIN CAMBIO GSS-130624
                        }}
                    >

                        <Link href={item.link} target="_blank">
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

// INICIO CAMBIO GSS-250624
const itemData = [
    {
        icon: FacebookIcon,
        alt: 'Facebook',
        link: "https://www.facebook.com/profile.php?id=61560350821668"
    },
    {
        icon: InstagramIcon,
        alt: 'Instagram',
        link: "https://www.instagram.com/geobookermx/"
    },
    {
        icon: TikTokIcon,
        alt: 'TikTok',
        link: "https://www.tiktok.com/@geobookermx"
    },
    {
        icon: TwitterIcon,
        alt: 'Twitter',
        link: "https://x.com/GeoBookermx"
    },
    {
        icon: YouTubeIcon,
        alt: 'YouTube',
        link: "https://www.youtube.com/channel/UCqYxcEGtVeo34101HqFT6IA"
    },
    {
        icon: LinkedInIcon,
        alt: 'LinkedIn',
        link: "https://www.linkedin.com/showcase/97211783/admin/feed/posts/"
    },
    {
        icon: WhatsappIcon,
        alt: 'Whatsapp',
        link: "https://www.whatsapp.com/catalog/5215533977053/?app_absent=0"
    }
]
// FIN CAMBIO GSS-250624