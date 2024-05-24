// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 16/05/2024      #
//   --# Descripcion General : Hook para apagar y encender N cantidad de Switches     #
//   ---------------------------------------------------------------------------------#-->


import {useState} from "react";

export const useSwitch = (initialForm = {}) => {
    const [state, setState] = useState( initialForm )

    const onInputChange = ({ name, value }) => {
        setState({
            ...state,
            [ name ]: value
        })
    }

    const onResetState = () => {
        setState( initialForm )
    }

    const onAcceptAll = () => {
        const newState = Object.keys(state).reduce((acc, key) => {
            acc[key] = true;
            return acc;
        }, {});

        setState(newState);
    }

    return {
        ...state,
        state,
        onInputChange,
        onResetState,
        onAcceptAll
    }
}