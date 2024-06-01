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
        xs: '1.5rem',
        sm: '5rem',
    },
    mediumTitles: {
        xs: '2rem',
        sm: '3rem',
    },
    largeTitles: {
        xs: '3rem',
        sm: '4rem',
    },
}

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

        const matchMediumMobileSize = useMediaQuery(theme.breakpoints.up('sm'));
        const matchSize = matchMediumMobileSize ? sizes.sm : sizes.xs;

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

        const matchMediumMobileSize = useMediaQuery(theme.breakpoints.up('sm'));
        const matchSize = matchMediumMobileSize ? sizes.sm : sizes.xs;

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

        const matchMediumMobileSize = useMediaQuery(theme.breakpoints.up('sm'));
        const matchSize = matchMediumMobileSize ? sizes.sm : sizes.xs;

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





