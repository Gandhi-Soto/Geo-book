// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 04/06/2024      #
//   --# Descripcion General : Context para almacenar todos los otros context         #
//   ---------------------------------------------------------------------------------#-->

import {createContext} from "react";
import {ModalProvider} from "./ModalProvider.jsx";
import {BreakpointsProvider} from "./BreakpointsContext.jsx";
import {FormProvider} from "./FormTerminadoContext.jsx";
import PropTypes from "prop-types";

export const MainContext = createContext()

export const MainProvider = ({children}) => {
    return (
        <MainContext.Provider value={{}}>
            <ModalProvider>
                <BreakpointsProvider>
                    <FormProvider>
                        {children}
                    </FormProvider>
                </BreakpointsProvider>
            </ModalProvider>
        </MainContext.Provider>
    );
}

MainProvider.propTypes = {
    children: PropTypes.node.isRequired
}