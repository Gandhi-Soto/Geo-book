// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 29/05/2024      #
//   --# Descripcion General : Context para el cambio de vista del formulario         #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Referencia para scrollear al formulario                #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->

import React, {createContext, useState, useEffect, useRef} from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formTerminado, setFormTerminado] = useState(localStorage.getItem('formTerminado') || 'false');
    const [vistaFinal, setVistaFinal] = useState(localStorage.getItem('vistaFinal') || 'false');

    // INICIO CAMBIO GSS-050624
    // referencia para scrollear al formulario
    const formReferencia = useRef(null);
    // FIN CAMBIO GSS-050624

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
        <FormContext.Provider value={{ formTerminado, setFormTerminado, vistaFinal, setVistaFinal, formReferencia }}>
            {children}
        </FormContext.Provider>
    );
};
