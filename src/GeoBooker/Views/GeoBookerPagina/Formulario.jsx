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
//   --# Modificacion        : Se reestructuró el componente en componente mas chicos #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->
// INICIO DE CAMBIO: GSS-110624
import { useState, useContext } from 'react'
// FIN DE CAMBIO: GSS-110624
import { TextField, Stack, MenuItem, Checkbox, Button, Grid, InputAdornment, useTheme, Box } from '@mui/material';
import UseFormulario from '../../Hooks/UseFormulario';
import { Link } from 'react-router-dom';
import { FormContext } from '../../Context/Index.js';
import BanderaDeMexico from "../../../assets/UnSoloUso/BanderaDeMexico.svg";
import { TypographySmallText, TypographyMediumText, TypographyLargeText } from '../../Theme/TypografiasParaTextos';
import { TypographySmallTitle, TypographyMediumTitle, TypographyLargeTitle } from '../../Theme/TypografiasParaTitulos';
// INICIO CAMBIO GSS-110624
import { ModalContext } from '../../Context/Index.js';
// FIN CAMBIO GSS-110624

// INICIO CAMBIO GSS-110624
function Formulario() {

    const theme = useTheme();
    // INICIO CAMBIO GSS-110624
    const variablesDeFormulario = UseFormulario()
    // FIN CAMBIO GSS-110624

    return (
        <>
            <QueremosConocerte />

            <Box className="bg-dark pt-3 bg-opacity-25 pb-5 d-flex justify-content-center">
                <Box className='mx-4 bg-light rounded px-4 pb-4'
                    sx={{
                        [theme.breakpoints.up('defaultMobileSize')]: {
                            width: "29rem",
                        },
                        [theme.breakpoints.up('smallMobileSize')]: {
                            width: "43.5rem",
                        },
                        [theme.breakpoints.up('mediumMobileSize')]: {
                            width: "54.375rem",
                        },
                        [theme.breakpoints.up('defaultWebSize')]: {
                            width: "72rem",
                            marginTop: "2rem",
                        }
                    }}
                >

                    <PreRegistro {...variablesDeFormulario} />

                    <UbicacionYContacto {...variablesDeFormulario} />

                    <Manifiesto {...variablesDeFormulario} />

                </Box>
            </Box>
        </>
    )
}

export default Formulario
// FIN CAMBIO GSS-110624


// INICIO CAMBIO: GSS-110624
const QueremosConocerte = () => {

    const { formReferencia } = useContext(FormContext);
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

    const theme = useTheme();

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
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Nombre(s)"
                    variant="filled"
                    onInput={handleNombre}
                    value={nombre}
                    error={nombreTocado && !nombreValido}
                    helperText={nombreTocado && !nombreValido ? '*Por favor, completa este campo' : ' '}
                    inputProps={{ maxLength: 20 }}
                    sx={{
                        [theme.breakpoints.up('smallMobileSize')]: {
                            fontSize: "1.8rem",
                        },
                        [theme.breakpoints.up('mediumMobileSize')]: {
                            fontSize: "2.25rem",
                        },
                        [theme.breakpoints.up('defaultWebSize')]: {
                            paddingRight: "0.5rem"
                        }
                    }}
                />
            </Grid>

            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Apellido Paterno"
                    variant="filled"
                    onInput={handleApellidoPaterno}
                    value={apellidoPaterno}
                    error={apellidoPaternoTocado && !apellidoPaternoValido}
                    helperText={apellidoPaternoTocado && !apellidoPaternoValido ? '*Por favor, completa este campo' : ' '}
                    inputProps={{ maxLength: 20 }}
                    sx={{
                        [theme.breakpoints.up('defaultWebSize')]: {
                            paddingRight: "1rem"
                        }
                    }}
                />
            </Grid>

            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Apellido Materno"
                    variant="filled"
                    onChange={handleApellidoMaterno}
                    value={apellidoMaterno}
                    error={apellidoMaternoTocado && !apellidoMaternoValido}
                    helperText={apellidoMaternoTocado && !apellidoMaternoValido ? '*Por favor, completa este campo' : ' '}
                    inputProps={{ maxLength: 20 }}
                />
            </Grid>

            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <TextField
                    id="outlined-basic"
                    select
                    label="Género"
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

            <Grid item defaultWebSize={8} /> { /* No se como esto funciona */}

            <Grid
                item defaultMobileSize={12}
                defaultWebSize={12}
                container spacing={2} sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                }}>
                <Grid item defaultMobileSize={12} defaultWebSize={4}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Nombre del negocio a registrar"
                        value={nombreNegocio}
                        onChange={handleNombreNegocio}
                        helperText={nombreNegocioTocado && !nombreNegocioValido ? '*Por favor, completa este campo' : ''}
                        error={nombreNegocioTocado && !nombreNegocioValido}
                        variant="filled"
                        inputProps={{ maxLength: 20 }}
                    />
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <Grid container direction="column">
                        <Grid item>
                            <TypographyMediumText
                                sx={{
                                    marginTop: "1rem",
                                    marginBottom: "1rem",
                                    textAlign: "left",
                                    display: 'inline-block', // Añadido
                                    verticalAlign: 'middle', // Añadido
                                }}
                            >
                                ¿Qué servicio ofertas?
                            </TypographyMediumText>
                        </Grid>

                        <Grid item>
                            <TextField
                                fullWidth
                                id="outlined-select-servicio"
                                select
                                label="Categoría"
                                value={servicio}
                                onChange={handleServicio}
                                helperText={servicioTocado && !servicioValido ? '*Por favor, selecciona una opción' : ''}
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
                    </Grid>
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <TextField
                        id="outlined-select-subservicio"
                        select
                        label="Servicio"
                        value={subservicio}
                        onChange={handleSubservicio}
                        helperText={subservicioTocado && !subservicioValido ? '*Por favor, selecciona una opción' : ''}
                        error={subservicioTocado && !subservicioValido}
                        variant="filled"
                        className='w-100'
                    >
                        {subservicios.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
        </Grid>
    )
}

const UbicacionYContacto = (props) => {
    const theme = useTheme();
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
    return (
        <>
            <Grid container defaultMobileSize={12} defaultWebSize={12} spacing={1}>
                <Grid item defaultMobileSize={12} defaultWebSize={12}>
                    <TypographyMediumText
                        sx={{
                            marginTop: "1rem",
                            textAlign: "left",
                            marginBottom: "1rem",
                            [theme.breakpoints.up('defaultWebSize')]: {
                                textAlign: "center",
                            }
                        }}
                    >
                        Ubicación y contacto de tu negocio
                    </TypographyMediumText>
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
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
                    <TextField
                        fullWidth
                        id="estado"
                        label="Estado"
                        variant="filled"
                        value={estado}
                        helperText=" "
                        disabled

                    />
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <TextField
                        id="municipio"
                        label="Municipio"
                        variant="filled"
                        value={municipio}
                        helperText=" "
                        disabled
                        className='w-100'
                    />
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <TextField
                        select
                        id="colonia"
                        label="Colonia"
                        variant="filled"
                        value={colonia}
                        fullWidth
                        onChange={handleColonia}
                        helperText={coloniaTocada && !coloniaValida ? '*Por favor, selecciona una opción' : ''}
                        error={coloniaTocada && !coloniaValida}
                        className='w-100'
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
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Calle"
                        variant="filled"
                        value={calle}
                        onChange={handleCalle}
                        helperText={calleTocada && !calleValida ? '*Por favor, completa este campo' : ' '}
                        error={calleTocada && !calleValida}
                        inputProps={{maxLength: 30}}
                    />
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Número"
                        value={numero}
                        onChange={handleNumero}
                        helperText={numeroTocado && !numeroValido ? '*Por favor, completa este campo' : ' '}
                        error={numeroTocado && !numeroValido}
                        variant="filled"
                        inputProps={{maxLength: 10}}
                    />
                </Grid>

                <Grid item defaultMobileSize={4} defaultWebSize={2}>
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
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Número de Teléfono"
                        value={telefono}
                        onChange={handleTelefono}
                        helperText={telefonoTocado && !telefonoValido ? '*Por favor, completa este campo' : ' '}
                        error={telefonoTocado && !telefonoValido}
                        variant="filled"
                        inputProps={{maxLength: 10}}
                    />
                </Grid>

                <Grid item defaultMobileSize={12} defaultWebSize={5}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="E-mail"
                        variant="filled"
                        onInput={handleCorreo}
                        value={correo}
                        error={correoTocado && !correoValido}
                        helperText={correoTocado && !correoValido ? mensajeCorreo : ''}
                    />
                </Grid>
            </Grid>
        </>
    )
}

const Manifiesto = (props) => {
    const { setMostrarAvisoDePrivacidadModal } = useContext(ModalContext);
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

    const [textoCheckbox, setTextoCheckbox] = useState('');
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
                    <TypographyMediumText
                        sx={{
                            fontSize: "1.05rem",
                        }}
                    >
                        Manifiesto y confirmo ser mayor de edad y acepto las condiciones de uso de datos y políticas
                        de privacidad.
                    </TypographyMediumText>
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