// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 29/05/2024      #
//   --# Descripcion General : Context para detectar breakpoints                      #
//   ---------------------------------------------------------------------------------#-->

import React, { createContext, useState, useEffect } from 'react';

export const BreakpointsContext = createContext();

export const BreakpointsProvider = ({ children }) => {
    const [isWeb, setIsWeb] = useState(window.matchMedia('(min-width: 768px)').matches);

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

    return (
        <BreakpointsContext.Provider value={{ isWeb }}>
            {children}
        </BreakpointsContext.Provider>
    );
};
