// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 29/05/2024      #
//   --# Descripcion General : Context para el cambio de vista del formulario         #
//   ---------------------------------------------------------------------------------#-->

import React, { createContext, useState, useEffect } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formTerminado, setFormTerminado] = useState(localStorage.getItem('formTerminado') || 'false');
    const [vistaFinal, setVistaFinal] = useState(localStorage.getItem('vistaFinal') || 'false');

    useEffect(() => {
        const handleStorageChange = () => {
            setFormTerminado(localStorage.getItem('formTerminado') || 'false');
            setVistaFinal(localStorage.getItem('vistaFinal') || 'false');
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    useEffect(() => {
        if (formTerminado === 'true' || formTerminado === 'false') {
            localStorage.setItem('formTerminado', formTerminado);
        }
    }, [formTerminado]);

    useEffect(() => {
        if (vistaFinal === 'true' || vistaFinal === 'false') {
            localStorage.setItem('vistaFinal', vistaFinal);
        }
    }, [vistaFinal]);

    return (
        <FormContext.Provider value={{ formTerminado, setFormTerminado, vistaFinal, setVistaFinal }}>
            {children}
        </FormContext.Provider>
    );
};
