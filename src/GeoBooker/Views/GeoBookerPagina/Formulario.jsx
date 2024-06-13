// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 20/05/2024      #
//   --# Descripcion General : Componente del formulario de pre registro              #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 05/06/2024                                             #
//   --# Modificacion        : Se agrego la referencia para scrollear al formulario   #
//   --# Marca de cambio     : GSS-050624                                             #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Se reestructuró el componente en componentes mas chicos #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 13/06/2024                                             #
//   --# Modificacion        : Se agrego labels para cada textfield                   #
//   --# Marca de cambio     : GSS-130624                                             #
//   ---------------------------------------------------------------------------------#-->
// INICIO DE CAMBIO: GSS-110624
import {useState, useContext} from 'react'
// FIN DE CAMBIO: GSS-110624

// INICIO DE CAMBIO: GSS-130624
import {
    TextField,
    MenuItem,
    Checkbox,
    Button,
    Grid,
    InputAdornment,
    useTheme,
    Box,
    InputLabel
} from '@mui/material';
// FIN DE CAMBIO: GSS-130624

import UseFormulario from '../../Hooks/UseFormulario';
import {Link} from 'react-router-dom';
import {BreakpointsContext, FormContext} from '../../Context/Index.js';
import BanderaDeMexico from "../../../assets/UnSoloUso/BanderaDeMexico.svg";
import {
    TypographySmallText,
    TypographyMediumText,
    TypographySmallTitle,
    TypographyMediumTitle
} from '../../Theme/index.js';
// INICIO CAMBIO GSS-110624
import {ModalContext} from '../../Context/Index.js';
// FIN CAMBIO GSS-110624

const sxParaLosTypographyDeLosInputLabels = {
    textAlign: 'start',
    marginLeft: '1rem',
}
const overrideSizesParaLosTypographyDeLosInputLabels = {
    defaultMobileSize: '1.5rem',
    smallMobileSize: '1.8rem',
    mediumMobileSize: '2.25rem',
    defaultWebSize: '2.25rem',
    smallWebSize: '2.25rem',
    mediumWebSize: '2.5rem',
    largeWebSize: '2.5rem',
    wideWebSize: '2.5rem'
}

// INICIO CAMBIO GSS-110624
function Formulario() {

    // INICIO CAMBIO GSS-110624
    const variablesDeFormulario = UseFormulario()
    // FIN CAMBIO GSS-110624

    return (
        <>
            <QueremosConocerte/>

            {/* INICIO CAMBIO GSS-130624 */}
            <Box className="bg-dark pt-3 bg-opacity-25 pb-5 d-flex justify-content-center">

                <Grid container defaultMobileSize={11} className='mx-4 bg-light rounded px-4 pb-4'>
                    <PreRegistro {...variablesDeFormulario} />

                    <UbicacionYContacto {...variablesDeFormulario} />

                    <Manifiesto {...variablesDeFormulario} />
                </Grid>
            </Box>
            {/* INICIO CAMBIO GSS-130624 */}

        </>
    )
}

export default Formulario
// FIN CAMBIO GSS-110624


// INICIO CAMBIO: GSS-110624
const QueremosConocerte = () => {

    const {formReferencia} = useContext(FormContext);
    const theme = useTheme();

    return (
        <>
            <Box className="bg-dark bg-opacity-50 w-100 py-3" ref={formReferencia}>
                <TypographyMediumTitle>
                    ¡Queremos conocerte!
                </TypographyMediumTitle>

                <TypographySmallTitle
                    sx={{
                        width: '24rem',
                        margin: "auto",
                        fontWeight: '400!important',
                        marginTop: "1rem",
                        [theme.breakpoints.up('smallMobileSize')]: {
                            width: '37rem'
                        },
                        [theme.breakpoints.up('mediumMobileSize')]: {
                            width: '46rem'
                        },
                    }}
                >
                    Registra <span className="fw-bold">YA</span> tu negocio de forma <span
                    className="fw-bold">GRATUITA</span>.
                </TypographySmallTitle>

                <TypographySmallTitle
                    sx={{
                        fontWeight: "bold!important",
                        marginTop: "1rem",
                        [theme.breakpoints.up('defaultWebSize')]: {
                            marginBottom: "1rem",
                        }
                    }}
                >
                    Solo tomará 2 minutos. ¡Vamos!
                </TypographySmallTitle>
            </Box>
        </>
    )
}

const PreRegistro = (props) => {

    const {
        handleNombre,
        nombre,
        nombreValido,
        nombreTocado,
        handleApellidoPaterno,
        apellidoPaterno,
        apellidoPaternoTocado,
        apellidoPaternoValido,
        handleApellidoMaterno,
        apellidoMaterno,
        apellidoMaternoTocado,
        apellidoMaternoValido,
        genero,
        generoValido,
        handleGenero,
        generoTocado,
        nombreNegocio,
        handleNombreNegocio,
        nombreNegocioTocado,
        nombreNegocioValido,
        servicio,
        handleServicio,
        servicioTocado,
        servicioValido,
        subservicio,
        handleSubservicio,
        subservicioTocado,
        subservicioValido
    } = props;
    const {
        theme,
        isUpDefaultWebSize
    } = useContext(BreakpointsContext);

    const sxParaLosInputLabels = {
        marginBottom: isUpDefaultWebSize ? '-1rem' : '-0.5rem'
    }

    // INICIO CAMBIO GSS-130624
    return (
        <Grid defaultMobileSize={12} defaultWebSize={12} container spacing={1}>
            <Grid item defaultMobileSize={12} defaultWebSize={12}>
                <TypographyMediumTitle
                    sx={{
                        fontWeight: "400!important",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        paddingTop: "2rem",
                        [theme.breakpoints.up('defaultWebSize')]: {
                            fontWeight: "bold!important",
                        }
                    }}
                >
                    Pre-registro
                </TypographyMediumTitle>
            </Grid>

            <Grid item defaultMobileSize={12} defaultWebSize={4}>
                <InputLabel shrink htmlFor='nombre' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        Nombre(s)
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    label="Agregue su nombre(s)"
                    id='nombre'
                    fullWidth
                    variant="filled"
                    onInput={handleNombre}
                    value={nombre}
                    error={nombreTocado && !nombreValido}
                    helperText={nombreTocado && !nombreValido ? '*Por favor, completa este campo' : ' '}
                    inputProps={{maxLength: 20}}
                />
            </Grid>

            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <InputLabel shrink htmlFor='apellido-paterno' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        Apellido Paterno
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    fullWidth
                    id="apellido-paterno"
                    label="Agregue su apellido paterno"
                    variant="filled"
                    onInput={handleApellidoPaterno}
                    value={apellidoPaterno}
                    error={apellidoPaternoTocado && !apellidoPaternoValido}
                    helperText={apellidoPaternoTocado && !apellidoPaternoValido ? '*Por favor, completa este campo' : ' '}
                    inputProps={{maxLength: 20}}
                />
            </Grid>

            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <InputLabel shrink htmlFor='apellido-materno' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        Apellido Materno
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    fullWidth
                    id="apellido-materno"
                    label='Agregue su apellido materno'
                    variant="filled"
                    onChange={handleApellidoMaterno}
                    value={apellidoMaterno}
                    error={apellidoMaternoTocado && !apellidoMaternoValido}
                    helperText={apellidoMaternoTocado && !apellidoMaternoValido ? '*Por favor, completa este campo' : ' '}
                    inputProps={{maxLength: 20}}
                />
            </Grid>

            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <InputLabel shrink htmlFor='genero' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        Género
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    id="genero"
                    select
                    label="Seleccione su género"
                    value={genero}
                    onChange={handleGenero}
                    helperText={generoTocado && !generoValido ? '*Por favor, selecciona una opción' : ' '}
                    error={generoTocado && !generoValido}
                    variant="filled"
                    fullWidth
                >
                    {generos.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item defaultWebSize={8}/> { /* No se como esto funciona */}

            <Grid item defaultMobileSize={12} defaultWebSize={4}>
                <InputLabel shrink htmlFor='nombre-del-negocio' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        Nombre del negocio a registrar
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    fullWidth
                    id="nombre-del-negocio"
                    label="Nombre del negocio"
                    value={nombreNegocio}
                    onChange={handleNombreNegocio}
                    helperText={nombreNegocioTocado && !nombreNegocioValido ? '*Por favor, completa este campo' : ' '}
                    error={nombreNegocioTocado && !nombreNegocioValido}
                    variant="filled"
                    inputProps={{maxLength: 20}}
                />
            </Grid>

            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <InputLabel shrink htmlFor='categoria' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        ¿Qué servicio ofertas?
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    fullWidth
                    id="categoria"
                    select
                    label="Seleccione la categoria"
                    value={servicio}
                    onChange={handleServicio}
                    helperText={servicioTocado && !servicioValido ? '*Por favor, selecciona una opción' : ' '}
                    error={servicioTocado && !servicioValido}
                    variant="filled"
                    sx={{
                        verticalAlign: 'middle', // Añadido
                    }}
                >
                    {categorias.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <InputLabel shrink htmlFor='servicio' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        &nbsp;
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    id="servicio"
                    select
                    label="Seleccione el servicio"
                    value={subservicio}
                    onChange={handleSubservicio}
                    helperText={subservicioTocado && !subservicioValido ? '*Por favor, selecciona una opción' : ' '}
                    error={subservicioTocado && !subservicioValido}
                    variant="filled"
                    fullWidth
                >
                    {subservicios.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

        </Grid>
    )
    // FIN CAMBIO GSS-130624
}

const UbicacionYContacto = (props) => {
    const {
        theme,
        isUpDefaultWebSize
    } = useContext(BreakpointsContext);

    const sxParaLosInputLabels = {
        marginBottom: isUpDefaultWebSize ? '-1rem' : '-0.5rem'
    }

    const {
        codigoPostal,
        handleCodigoPostal,
        codigoPostalTocado,
        codigoPostalValido,
        estado,
        municipio,
        colonia,
        handleColonia,
        coloniaTocada,
        coloniaValida,
        colonias,
        calle,
        handleCalle,
        calleTocada,
        calleValida,
        numero,
        handleNumero,
        numeroTocado,
        numeroValido,
        telefono,
        handleTelefono,
        telefonoTocado,
        telefonoValido,
        handleCorreo,
        correo,
        correoTocado,
        correoValido,
        mensajeCorreo
    } = props;
    //Array de valores para el select de colonias
    const selectColonias = (
        //Iterar sobre el array de colonias que viene de UseFormulario
        colonias.map((colonia) => {
                return {
                    value: colonia,
                    label: colonia
                }
            }
        )
    );
    // INICIO CAMBIO GSS-130624
    return (
        <>
            <Grid container defaultMobileSize={12} defaultWebSize={12} spacing={1}>
                <Grid item defaultMobileSize={12} defaultWebSize={12}>
                    <TypographySmallTitle
                        sx={{
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            [theme.breakpoints.down('defaultWebSize')]: {
                                textAlign: "left",
                            }
                        }}
                        overrideSizes={{
                            smallMobileSize: '1.5rem',
                            mediumMobileSize: '1.5rem',
                            defaultWebSize: '2rem',
                        }}
                    >
                        Ubicación y contacto de tu negocio
                    </TypographySmallTitle>
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <InputLabel shrink htmlFor='codigo-postal' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Código Postal
                        </TypographySmallText>
                    </InputLabel>

                    <TextField
                        fullWidth
                        id="codigo-postal"
                        label="CP"
                        variant="filled"
                        value={codigoPostal}
                        onChange={handleCodigoPostal}
                        error={codigoPostalTocado && !codigoPostalValido} // Mostrar error solo si el campo ha sido tocado y no es válido
                        helperText={codigoPostalTocado && !codigoPostalValido ? '*Por favor, completa este campo' : ' '}
                        inputProps={{maxLength: 5}}

                    />
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <InputLabel shrink htmlFor='estado' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Estado
                        </TypographySmallText>
                    </InputLabel>

                    <TextField
                        fullWidth
                        id="estado"
                        variant="filled"
                        value={estado}
                        helperText=" "
                        disabled

                    />
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <InputLabel shrink htmlFor='municipio' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Municipio
                        </TypographySmallText>
                    </InputLabel>

                    <TextField
                        id="municipio"
                        variant="filled"
                        value={municipio}
                        helperText=" "
                        disabled
                        fullWidth
                    />
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <InputLabel shrink htmlFor='colonia' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Colonia
                        </TypographySmallText>
                    </InputLabel>

                    {/*aumentar el height de este componente*/}
                    <TextField
                        select
                        id="colonia"
                        label="Seleccione su colonia"
                        variant="filled"
                        value={colonia}
                        fullWidth
                        onChange={handleColonia}
                        helperText={coloniaTocada && !coloniaValida ? '*Por favor, selecciona una opción' : ' '}
                        error={coloniaTocada && !coloniaValida}
                    >
                        {
                            selectColonias.map((option) =>
                                (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                )
                            )
                        }
                    </TextField>
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <InputLabel shrink htmlFor='calle' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Calle
                        </TypographySmallText>
                    </InputLabel>

                    <TextField
                        fullWidth
                        id="calle"
                        label="Escriba su calle"
                        variant="filled"
                        value={calle}
                        onChange={handleCalle}
                        helperText={calleTocada && !calleValida ? '*Por favor, completa este campo' : ' '}
                        error={calleTocada && !calleValida}
                        inputProps={{maxLength: 30}}
                    />
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <InputLabel shrink htmlFor='numero' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Número
                        </TypographySmallText>
                    </InputLabel>

                    <TextField
                        fullWidth
                        id="numero"
                        label="##"
                        value={numero}
                        onChange={handleNumero}
                        helperText={numeroTocado && !numeroValido ? '*Por favor, completa este campo' : ' '}
                        error={numeroTocado && !numeroValido}
                        variant="filled"
                        inputProps={{maxLength: 10}}
                    />
                </Grid>

                <Grid item defaultMobileSize={4} defaultWebSize={2}>
                    <InputLabel shrink htmlFor='numero' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            &nbsp;
                        </TypographySmallText>
                    </InputLabel>
                    <TextField
                        fullWidth
                        id="outlined-helperText"
                        label="LADA"
                        defaultValue="+52"
                        variant='filled'
                        disabled
                        helperText=" "
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <img src={BanderaDeMexico} alt="Bandera de México" height={15}/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item defaultMobileSize={8} defaultWebSize={5}>
                    <InputLabel shrink htmlFor='numero' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Número de Teléfono
                        </TypographySmallText>
                    </InputLabel>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Agregue su número de teléfono"
                        value={telefono}
                        onChange={handleTelefono}
                        helperText={telefonoTocado && !telefonoValido ? '*Por favor, completa este campo' : ' '}
                        error={telefonoTocado && !telefonoValido}
                        variant="filled"
                        inputProps={{maxLength: 10}}
                    />
                </Grid>

                <Grid item defaultMobileSize={12} defaultWebSize={5}>
                    <InputLabel shrink htmlFor='numero' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            E-mail
                        </TypographySmallText>
                    </InputLabel>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="correo@gmail.com"
                        variant="filled"
                        onInput={handleCorreo}
                        value={correo}
                        error={correoTocado && !correoValido}
                        helperText={correoTocado && !correoValido ? mensajeCorreo : ' '}
                    />
                </Grid>
            </Grid>
        </>
    )
    // FIN CAMBIO GSS-130624
}

const Manifiesto = (props) => {
    const {setMostrarAvisoDePrivacidadModal} = useContext(ModalContext);

    const {
        checkbox,
        handleCheckbox,
        checkboxValido,
        setNombreTocado,
        setApellidoPaternoTocado,
        setApellidoMaternoTocado,
        setEdadTocada,
        setGeneroTocado,
        setServicioTocado,
        setSubservicioTocado,
        setNombreNegocioTocado,
        setColoniaTocada,
        setCalleTocada,
        setNumeroTocado,
        setTelefonoTocado,
        setCorreoTocado,
        setCheckboxTocado,
        setCodigoPostalTocado,
        nombreValido, apellidoPaternoValido, apellidoMaternoValido, generoValido,
        servicioValido, subservicioValido, coloniaValida, nombreNegocioValido,
        calleValida, numeroValido, telefonoValido, correoValido, codigoPostalValido
    } = props;

    const [textoCheckbox, setTextoCheckbox] = useState(' ');
    const [formValido] = useState(false);
    const {setFormTerminado, setVistaFinal} = useContext(FormContext);

    const validarFormulario = () => {
        // Marcar como tocados los campos que no se hayan tocado previamente
        setNombreTocado(true);
        setApellidoPaternoTocado(true);
        setApellidoMaternoTocado(true);
        setEdadTocada(true);
        setGeneroTocado(true);
        setServicioTocado(true);
        setSubservicioTocado(true);
        setNombreNegocioTocado(true);
        setColoniaTocada(true);
        setCalleTocada(true);
        setNumeroTocado(true);
        setTelefonoTocado(true);
        setCorreoTocado(true);
        setCheckboxTocado(true);
        setCodigoPostalTocado(true);

        // Verificar si todos los campos son válidos
        if (
            nombreValido && apellidoPaternoValido && apellidoMaternoValido && generoValido &&
            servicioValido && subservicioValido && coloniaValida && nombreNegocioValido &&
            calleValida && numeroValido && telefonoValido && correoValido && checkboxValido && codigoPostalValido
        ) {
            // Mostrar mensaje en la consola si el formulario es válido
            // console.log('Formulario válido');
            localStorage.setItem('formTerminado', 'true');
            localStorage.setItem("vistaFinal", "true");
            setFormTerminado('true');
            setVistaFinal('true');
        } else {
            // Mostrar mensaje en la consola si el formulario no es válido
            if (checkboxValido) {
                // Lógica de registro aquí
                setTextoCheckbox("");
            } else {
                // No hacer nada si el checkbox no está marcado
                setTextoCheckbox('Debes aceptar los términos y condiciones');
            }
            // console.log('Formulario inválido');
            localStorage.setItem('formTerminado', 'false');
            localStorage.setItem("vistaFinal", "false");
            setFormTerminado('false');
            setVistaFinal('false');
        }
    };

    return (
        <>
            <Grid container>

                <Grid item mt={2} defaultMobileSize={12} sx={{
                    display: 'flex',
                    direction: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Checkbox
                        checked={checkbox}
                        onChange={handleCheckbox}
                        inputProps={{'aria-label': 'checkbox'}}
                    />
                    {/* INICIO CAMBIO GSS-130624 */}
                    <TypographyMediumText>
                        Manifiesto y confirmo ser mayor de edad y acepto las condiciones de uso de datos y políticas
                        de privacidad.
                    </TypographyMediumText>
                    {/* FIN CAMBIO GSS-130624 */}
                </Grid>

                <Grid item defaultMobileSize={12}>
                    {checkboxValido ? null : <p className='text-danger text-center'>{textoCheckbox}</p>}
                    <p className='text-center text-primary'><a href="#"></a></p>
                </Grid>

                <Grid item defaultMobileSize={12}>
                    <Link href='#' onClick={(event) => {
                        event.preventDefault();
                        setMostrarAvisoDePrivacidadModal(true);
                    }}>
                        <TypographyMediumText
                            sx={{
                                fontSize: "1.05rem",
                                color: "blue",
                            }}
                        >
                            Ver aviso de privacidad
                        </TypographyMediumText>
                    </Link>
                </Grid>

                <Grid item mt={2} defaultMobileSize={12} defaultWebSize={12} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Link to={formValido ? "/" : ""}
                          state={formValido ? {formTerminado: true} : {formTerminado: false}}>
                        <Button
                            variant='contained'
                            size='large'
                            onClick={validarFormulario}
                        >
                            Registrarme
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}

const generos = [
    {
        value: 'Masculino',
        label: 'Masculino',
    },
    {
        value: 'Femenino',
        label: 'Femenino',
    },
    {
        value: 'Otro',
        label: 'Otro',
    }
];

//array de valores para el select de categoria
const categorias = [
    {
        value: 'Atención médica',
        label: 'Atención médica',
    },
    {
        value: 'Salud y belleza',
        label: 'Salud y belleza',
    },
    {
        value: 'Alimentos y bebidas',
        label: 'Alimentos y bebidas',
    },
    {
        value: 'Diversión y entretenimiento',
        label: 'Diversión y entretenimiento',
    },
    {
        value: 'Servicios profesionales',
        label: 'Servicios profesionales',
    },
    {
        value: 'Servicios vehiculares',
        label: 'Servicios vehiculares',
    },
    {
        value: 'Mantenimiento y construcción',
        label: 'Mantenimiento y construcción',
    },
    {
        value: 'Educación y capacitación',
        label: 'Educación y capacitación',
    },
    {
        value: 'Comercios - mayoreo y menudeo',
        label: 'Comercios - mayoreo y menudeo',
    }
];

//array de valores para el select de subservicios
const subservicios = [
    {
        value: 'Subservicio 1',
        label: 'SS1',
    },
    {
        value: 'Subservicio 2',
        label: 'SS2',
    },
    {
        value: 'Subservicio 3',
        label: 'SS3',
    },
    {
        value: 'Subservicio 4',
        label: 'SS4',
    },
];
// FIN CAMBIO: GSS-110624