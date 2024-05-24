// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 20/05/2024      #
//   --# Descripcion General : Componente de la lista redes sociales de Codigo Geek   #
//   ---------------------------------------------------------------------------------#-->


import {ImageList, ImageListItem, Link} from "@mui/material";
import {
    FacebookIcon,
    InstagramIcon,
    TikTokIcon,
    TwitterIcon, // X Icon
    YouTubeIcon,
    LinkedInIcon,
    WhatsappIcon
} from '../../assets/RedesSociales/Index.js';

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
export const ListaDeRedesSociales = () => {
    return (
        <ImageList cols={7} gap={15}>
            {
                itemData.map( item =>
                    <ImageListItem
                        key={item.icon}
                        sx={{width: 20, height: 20 }}
                    >
                        <Link href={ item.link } target="_blank" >
                            <img src={item.icon} alt="Facebook"/>
                        </Link>
                    </ImageListItem>
                )
            }
        </ImageList>
    )
}
