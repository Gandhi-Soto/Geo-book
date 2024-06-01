// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 31/05/2024      #
//   --# Descripcion General : Tipografia de textos para toda la app                  #
//   ---------------------------------------------------------------------------------#-->

import {Typography, useMediaQuery, useTheme} from "@mui/material";
import PropTypes from "prop-types";


const TypographyTextSizes = {
    smallText: {
        xs: '1rem',
        sm: '1.5rem',
    },
    mediumText: {
        xs: '1.2rem',
        sm: '2rem',
    },
    largeText: {
        xs: '1.5rem',
        sm: '2.3rem',
    },
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
export const TypographySmallText =
    ({
         sx, children,
         className = '',
         overrideSizes = {},
     }) => {

        const theme = useTheme();

        const defaultSizes = TypographyTextSizes.smallText;
        const sizes = {...defaultSizes, ...overrideSizes};

        const matchMediumMobileSize = useMediaQuery(theme.breakpoints.up('sm'));
        const matchSize = matchMediumMobileSize ? sizes.sm : sizes.xs;

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

        const matchMediumMobileSize = useMediaQuery(theme.breakpoints.up('sm'));
        const matchSize = matchMediumMobileSize ? sizes.sm : sizes.xs;

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

        const matchMediumMobileSize = useMediaQuery(theme.breakpoints.up('sm'));
        const matchSize = matchMediumMobileSize ? sizes.sm : sizes.xs;

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