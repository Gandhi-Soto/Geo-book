// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 31/05/2024      #
//   --# Descripcion General : Tipografia de titulos para toda la app                 #
//   ---------------------------------------------------------------------------------#-->

import {Typography, useMediaQuery, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const TypographyTitleSizes = {
    smallTitle: {
        defaultMobileSize: '1.5rem',
        smallMobileSize: '2.25rem',
        mediumMobileSize: "2.8125rem",
        defaultWebSize: "1.7rem",
        smallWebSize: "",
        mediumWebSize: "",
        largeWebSize: "",
        wideWebSize: ""
    },
    mediumTitles: {
        defaultMobileSize: '2rem',
        smallMobileSize: '3rem',
        mediumMobileSize: "3.75rem",
        defaultWebSize: "2.5rem",
        smallWebSize: "",
        mediumWebSize: "",
        largeWebSize: "",
        wideWebSize: ""
    },
    largeTitles: {
        defaultMobileSize: '3rem',
        smallMobileSize: '4.5rem',
        mediumMobileSize: "5.625rem",
        defaultWebSize: "",
        smallWebSize: "",
        mediumWebSize: "",
        largeWebSize: "",
        wideWebSize: ""
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
 * @param overrideSizes objeto con las propiedades de los breakpoints que definen el tamaño de la tipografía, por defecto se
 * usa un tamaño especificado, sobreescribe el tamaño por defecto si se pasa un objeto con propiedades de breakpoints
 * @returns {JSX.Element}
 * @constructor
 */
export const TypographySmallTitle =
    ({
         sx, children,
         overrideSizes = {},
     }) => {

        const theme = useTheme();

        const defaultSizes = TypographyTitleSizes.smallTitle;
        const sizes = {...defaultSizes, ...overrideSizes};

        // const matchMediumMobileSize = useMediaQuery(theme.breakpoints.up('sm'));
        // const matchSize = matchMediumMobileSize ? sizes.sm : sizes.xs;
        const matchSize = getFontSize(theme, sizes);

        return (
            <Typography
                className='fw-bolder'
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
export const TypographyMediumTitle =
    ({
         sx, children,
         overrideSizes = {},
     }) => {

        const theme = useTheme();

        const defaultSizes = TypographyTitleSizes.mediumTitles;
        const sizes = {...defaultSizes, ...overrideSizes};

        // const matchMediumMobileSize = useMediaQuery(theme.breakpoints.up('sm'));
        // const matchSize = matchMediumMobileSize ? sizes.sm : sizes.xs;
        const matchSize = getFontSize(theme, sizes);

        return (
            <Typography
                className='fw-bold'
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
export const TypographyLargeTitle =
    ({
         sx, children,
         overrideSizes = {},
     }) => {

        const theme = useTheme();

        const defaultSizes = TypographyTitleSizes.largeTitles;
        const sizes = {...defaultSizes, ...overrideSizes};

        // const matchMediumMobileSize = useMediaQuery(theme.breakpoints.up('sm'));
        // const matchSize = matchMediumMobileSize ? sizes.sm : sizes.xs;
        const matchSize = getFontSize(theme, sizes);

        return (
            <Typography
                className='fw-bold'
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

TypographySmallTitle.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node.isRequired,
    overrideSizes: PropTypes.object,
}

TypographyMediumTitle.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node.isRequired,
    overrideSizes: PropTypes.object,
}

TypographyLargeTitle.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node.isRequired,
    overrideSizes: PropTypes.object,
}





