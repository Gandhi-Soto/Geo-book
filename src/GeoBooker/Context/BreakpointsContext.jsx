// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 29/05/2024      #
//   --# Descripcion General : Context para detectar breakpoints                      #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 13/06/2024                                             #
//   --# Modificacion        : Referencias de todos los breakpoints a toda la app     #
//   --# Marca de cambio     : GSS-130624                                             #
//   ---------------------------------------------------------------------------------#-->
import React, { createContext, useState, useEffect } from 'react';
import {useMediaQuery, useTheme} from "@mui/material";
import PropTypes from "prop-types";

export const BreakpointsContext = createContext();

export const BreakpointsProvider = ({ children }) => {
    const [isWeb, setIsWeb] = useState(window.matchMedia('(min-width: 768px)').matches);
    const theme = useTheme();

    const isUpDefaultMobileSize = useMediaQuery(theme.breakpoints.up('defaultMobileSize'));
    const isUpSmallMobile = useMediaQuery(theme.breakpoints.up('smallMobileSize'));
    const isUpMediumMobile = useMediaQuery(theme.breakpoints.up('mediumMobileSize'));
    const isUpDefaultWebSize = useMediaQuery(theme.breakpoints.up('defaultWebSize'));
    const isUpSmallWebSize = useMediaQuery(theme.breakpoints.up('smallWebSize'));
    const isUpMediumWebSize = useMediaQuery(theme.breakpoints.up('mediumWebSize'));
    const isUpLargeWebSize = useMediaQuery(theme.breakpoints.up('largeWebSize'));
    const isUpWideWebSize = useMediaQuery(theme.breakpoints.up('wideWebSize'));

    // const isDownDefaultMobileSize = useMediaQuery(theme.breakpoints.down('defaultMobileSize')); // Inservible
    const isDownSmallMobile = useMediaQuery(theme.breakpoints.down('smallMobileSize'));
    const isDownMediumMobile = useMediaQuery(theme.breakpoints.down('mediumMobileSize'));
    const isDownDefaultWebSize = useMediaQuery(theme.breakpoints.down('defaultWebSize'));
    const isDownSmallWebSize = useMediaQuery(theme.breakpoints.down('smallWebSize'));
    const isDownMediumWebSize = useMediaQuery(theme.breakpoints.down('mediumWebSize'));
    const isDownLargeWebSize = useMediaQuery(theme.breakpoints.down('largeWebSize'));
    const isDownWideWebSize = useMediaQuery(theme.breakpoints.down('wideWebSize'));

    
    useEffect(() => {
        const desktopMediaQuery = window.matchMedia('(min-width: 768px)');

        const handleChange = (e) => {
            setIsWeb(e.matches);
        };

        desktopMediaQuery.addEventListener('change', handleChange);

        return () => {
            desktopMediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    // INICIO CAMBIO GSS-130624
    return (
        <BreakpointsContext.Provider value={{
            theme,

            isUpDefaultMobileSize,
            isUpSmallMobile,
            isUpMediumMobile,
            isUpDefaultWebSize,
            isUpSmallWebSize,
            isUpMediumWebSize,
            isUpLargeWebSize,
            isUpWideWebSize,

            isDownSmallMobile,
            isDownMediumMobile,
            isDownDefaultWebSize,
            isDownSmallWebSize,
            isDownMediumWebSize,
            isDownLargeWebSize,
            isDownWideWebSize,

            isWeb
        }}>
            {children}
        </BreakpointsContext.Provider>
    );
    // FIN CAMBIO GSS-130624

};

BreakpointsProvider.propTypes = {
    children: PropTypes.node.isRequired
}