// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 31/05/2024      #
//   --# Descripcion General : Tipografia de textos para toda la app                  #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Se agregaron tamaños de fuente para tipografias        #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->
// <!--################################################################################
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Se agregaron tamaños de fuente para tipografias        #
//   --# Marca de cambio     : BCMC-110624                                             #
//   ---------------------------------------------------------------------------------#-->

import {Typography, useMediaQuery, useTheme} from "@mui/material";
import PropTypes from "prop-types";


const TypographyTextSizes = {
    smallText: {
        defaultMobileSize: '1rem',
        smallMobileSize: '1.5rem',
        // INICIO DE CAMBIO: GSS-110624
        mediumMobileSize: '1.5rem',
        defaultWebSize: '1.8rem',
        smallWebSize: '1.8rem',
        mediumWebSize: "2rem",
        largeWebSize: "2rem",
        wideWebSize: "2.2rem"
        // FIN DE CAMBIO: GSS-110624
    },
    mediumText: {
        defaultMobileSize: '1.2rem',
        smallMobileSize: '1.8rem',
        mediumMobileSize: "2.25rem",
        // INICIO DE CAMBIO: BCMC-110624
        defaultWebSize: "1.4rem",
        smallWebSize: "1.75rem",
        mediumWebSize: "2rem",
        largeWebSize: "2.2rem",
        // FIN DE CAMBIO: BCMC-110624
        wideWebSize: ""
    },
    largeText: {
        defaultMobileSize: '1.5rem',
        smallMobileSize: '2.25rem',
        mediumMobileSize: "2.8125rem",
        defaultWebSize: "1.75rem",
        // INICIO DE CAMBIO: BCMC-110624
        smallWebSize: "2rem",
        mediumWebSize: "2.25rem",
        largeWebSize: "2.5rem",
        wideWebSize: "3rem"
        // FIN DE CAMBIO: BCMC-110624
    },
}

const getFontSize = (theme, sizes) => {
    const matches = {
        wideWebSize: useMediaQuery(theme.breakpoints.up('wideWebSize')),
        largeWebSize: useMediaQuery(theme.breakpoints.up('largeWebSize')),
        mediumWebSize: useMediaQuery(theme.breakpoints.up('mediumWebSize')),
        smallWebSize: useMediaQuery(theme.breakpoints.up('smallWebSize')),
        defaultWebSize: useMediaQuery(theme.breakpoints.up('defaultWebSize')),
        mediumMobileSize: useMediaQuery(theme.breakpoints.up('mediumMobileSize')),
        smallMobileSize: useMediaQuery(theme.breakpoints.up('smallMobileSize')),
    };

    if (matches.wideWebSize) return sizes.wideWebSize;
    if (matches.largeWebSize) return sizes.largeWebSize;
    if (matches.mediumWebSize) return sizes.mediumWebSize;
    if (matches.smallWebSize) return sizes.smallWebSize;
    if (matches.defaultWebSize) return sizes.defaultWebSize;
    if (matches.mediumMobileSize) return sizes.mediumMobileSize;
    if (matches.smallMobileSize) return sizes.smallMobileSize;

    return sizes.defaultMobileSize;
};

/**
 * @param sx
 * @param children
 * @param className
 * @param overrideSizes objeto con las propiedades de los breakpoints que definen el tamaño de la tipografía, por defecto se
 * usa un tamaño especificado, sobreescribe el tamaño por defecto si se pasa un objeto con propiedades de breakpoints
 * @returns {JSX.Element}
 * @constructor
 */
export const TypographySmallText =
    ({
         sx, children,
         className = '',
         overrideSizes = {},
     }) => {

        const theme = useTheme();

        const defaultSizes = TypographyTextSizes.smallText;
        const sizes = {...defaultSizes, ...overrideSizes};

        // const matchMediumMobileSize = useMediaQuery(theme.breakpoints.up('sm'));
        // const matchSize = matchMediumMobileSize ? sizes.sm : sizes.xs;
        const matchSize = getFontSize(theme, sizes);

        return (
            <Typography
                className={className}
                sx={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: matchSize,
                    ...sx
                }}
            >
                {children}
            </Typography>
        )
    }

/**
 * @param sx
 * @param children
 * @param overrideSizes objeto con las propiedades de los breakpoints que definen el tamaño de la tipografía, por defecto se
 * usa un tamaño especificado, sobreescribe el tamaño por defecto si se pasa un objeto con propiedades de breakpoints
 * @returns {JSX.Element}
 * @constructor
 */
export const TypographyMediumText =
    ({
         sx, children,
         className = '',
         overrideSizes = {},
     }) => {

        const theme = useTheme();

        const defaultSizes = TypographyTextSizes.mediumText;
        const sizes = {...defaultSizes, ...overrideSizes};

        // const matchMediumMobileSize = useMediaQuery(theme.breakpoints.up('sm'));
        // const matchSize = matchMediumMobileSize ? sizes.sm : sizes.xs;
        const matchSize = getFontSize(theme, sizes);

        return (
            <Typography
                className={className}
                sx={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: matchSize,
                    ...sx
                }}
            >
                {children}
            </Typography>
        )
    }

/**
 * @param sx
 * @param children
 * @param className
 * @param overrideSizes objeto con las propiedades de los breakpoints que definen el tamaño de la tipografía, por defecto se
 * usa un tamaño especificado, sobreescribe el tamaño por defecto si se pasa un objeto con propiedades de breakpoints
 * @returns {JSX.Element}
 * @constructor
 */
export const TypographyLargeText =
    ({
         sx, children,
         className = '',
         overrideSizes = {},
     }) => {

        const theme = useTheme();

        const defaultSizes = TypographyTextSizes.largeText;
        const sizes = {...defaultSizes, ...overrideSizes};

        // const matchMediumMobileSize = useMediaQuery(theme.breakpoints.up('sm'));
        // const matchSize = matchMediumMobileSize ? sizes.sm : sizes.xs;
        const matchSize = getFontSize(theme, sizes);

        return (
            <Typography
                className={className}
                sx={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: matchSize,
                    ...sx
                }}
            >
                {children}
            </Typography>
        )
    }

TypographySmallText.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    overrideSizes: PropTypes.object
}
TypographyMediumText.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    overrideSizes: PropTypes.object
}

TypographyLargeText.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    overrideSizes: PropTypes.object
}