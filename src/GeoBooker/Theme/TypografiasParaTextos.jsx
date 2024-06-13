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
// <!--################################################################################
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 13/06/2024                                             #
//   --# Modificacion        : Fuentes para breakpoints ultraanchos                   #
//   --# Marca de cambio     : BCMC-130624                                            #
//   ---------------------------------------------------------------------------------#-->

import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useFontSizes} from "../Hooks/Index.js";


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
        // INICIO DE CAMBIO: BCMC-130624
        wideWebSize: "4rem"
        // FIN DE CAMBIO: BCMC-130624
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
            // INICIO DE CAMBIO: BCMC-130624
        wideWebSize: "5rem"
            // FIN DE CAMBIO: BCMC-130624
        // FIN DE CAMBIO: BCMC-110624
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
        const defaultSizes = TypographyTextSizes.smallText;
        const sizes = {...defaultSizes, ...overrideSizes};
        const matchSize = useFontSizes(sizes);

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
export const TypographyMediumText =
    ({
         sx, children,
         className = '',
         overrideSizes = {},
     }) => {
        const defaultSizes = TypographyTextSizes.mediumText;
        const sizes = {...defaultSizes, ...overrideSizes};

        const matchSize = useFontSizes(sizes);

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
        const defaultSizes = TypographyTextSizes.largeText;
        const sizes = {...defaultSizes, ...overrideSizes};

        const matchSize = useFontSizes(sizes);

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