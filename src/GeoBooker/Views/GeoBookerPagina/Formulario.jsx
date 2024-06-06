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
import {useState, useContext} from 'react'
import { TextField, Stack, MenuItem, Checkbox, Button, Grid, InputAdornment, useTheme, Box } from '@mui/material';
import UseFormulario from '../../Hooks/UseFormulario';
import { Link } from 'react-router-dom';
import { FormContext } from '../../Context/Index.js';
import BanderaDeMexico from "../../../assets/UnSoloUso/BanderaDeMexico.svg";
import { TypographySmallText, TypographyMediumText, TypographyLargeText } from '../../Theme/TypografiasParaTextos';
import { TypographySmallTitle, TypographyMediumTitle, TypographyLargeTitle } from '../../Theme/TypografiasParaTitulos';

function Formulario() {

    const theme = useTheme();

    const { setFormTerminado, setVistaFinal } = useContext(FormContext);

    // INICIO CAMBIO GSS-050624
    const { formReferencia } = useContext(FormContext);
    // FIN CAMBIO GSS-050624

    const {
        nombre, nombreValido, nombreTocado, setNombreTocado, handleNombre,
        apellidoPaterno, apellidoPaternoValido, apellidoPaternoTocado, setApellidoPaternoTocado, handleApellidoPaterno,
        apellidoMaterno, apellidoMaternoValido, apellidoMaternoTocado, setApellidoMaternoTocado, handleApellidoMaterno,
        edad, edadValida, edadTocada, setEdadTocada, handleEdad,
        genero, generoValido, generoTocado, setGeneroTocado, handleGenero,
        servicio, servicioValido, servicioTocado, setServicioTocado, handleServicio,
        subservicio, subservicioValido, subservicioTocado, setSubservicioTocado, handleSubservicio,
        nombreNegocio, nombreNegocioValido, nombreNegocioTocado, setNombreNegocioTocado, handleNombreNegocio,
        calle, calleValida, calleTocada, setCalleTocada, handleCalle,
        numero, numeroValido, numeroTocado, setNumeroTocado, handleNumero,
        telefono, telefonoValido, telefonoTocado, setTelefonoTocado, handleTelefono,
        correo, correoValido, correoTocado, setCorreoTocado, handleCorreo, mensajeCorreo,
        checkbox, checkboxTocado, checkboxValido, setCheckboxTocado, handleCheckbox,
        codigoPostal, codigoPostalTocado, codigoPostalValido, setCodigoPostalTocado, handleCodigoPostal,
        estado, municipio, colonias, colonia, setColonia, coloniaTocada, setColoniaTocada, coloniaValida, handleColonia
    } = UseFormulario();

    //Array de valores para el select de genero
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
    // console.log(selectColonias);

    const [textoCheckbox, setTextoCheckbox] = useState('');
    const [formValido, setFormValido] = useState(false);

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
            nombreValido && apellidoPaternoValido && apellidoMaternoValido && generoValido && servicioValido && subservicioValido && coloniaValida && nombreNegocioValido && calleValida &&
            numeroValido && telefonoValido && correoValido && checkboxValido && codigoPostalValido
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
            <Box className="bg-dark bg-opacity-50 w-100 py-3" ref={ formReferencia }>
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
                    Registra <span className="fw-bold">YA</span> tu negocio de forma  <span className="fw-bold">GRATUITA</span>.
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
                    <Box
                        sx={{
                            [theme.breakpoints.up('defaultWebSize')]: {
                                display: "grid",
                                gridTemplateColumns: "2fr 4fr",
                                gap: "2rem",
                            },
                        }}
                    >
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
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                            mt={2}
                            sx={{
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    marginTop: "0"
                                }
                            }}
                        >
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
                        </Stack>
                    </Box>
                    <Grid container spacing={2} mb={1}>
                        {/* <Grid item defaultMobileSize={6}>
              <TextField
                id="outlined-basic"
                label="Edad"
                variant="filled"
                onInput={handleEdad}
                value={edad}
                error={edadTocada && !edadValida}
                helperText={edadTocada && !edadValida ? '*Por favor, completa este campo' : ' '}
              />
            </Grid> */}
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
                                className='w-100'
                            >
                                {generos.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>

                    <Box
                        sx={{
                            [theme.breakpoints.up('defaultWebSize')]: {
                                display: "grid",
                                gridTemplateColumns: "",
                            }
                        }}
                    >
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
                        <TypographyMediumText
                            sx={{
                                marginTop: "1rem",
                                textAlign: "left",
                                marginBottom: "1rem"
                            }}
                        >
                            ¿Qué servicio ofertas?
                        </TypographyMediumText>
                        <Grid container spacing={2} mb={2}>
                            <Grid item defaultMobileSize={6}>
                                <TextField
                                    id="outlined-select-servicio"
                                    select
                                    label="Categoría"
                                    value={servicio}
                                    onChange={handleServicio}
                                    helperText={servicioTocado && !servicioValido ? '*Por favor, selecciona una opción' : ''}
                                    error={servicioTocado && !servicioValido}
                                    variant="filled"
                                    className='w-100'
                                >
                                    {categorias.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item defaultMobileSize={6}>
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
                        <Grid container spacing={2}>
                            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                                <TextField
                                    id="codigo-postal"
                                    label="CP"
                                    variant="filled"
                                    value={codigoPostal}
                                    onChange={handleCodigoPostal}
                                    error={codigoPostalTocado && !codigoPostalValido} // Mostrar error solo si el campo ha sido tocado y no es válido
                                    helperText={codigoPostalTocado && !codigoPostalValido ? '*Por favor, completa este campo' : ' '}
                                    inputProps={{ maxLength: 5 }}
                                    className='w-100'
                                />
                            </Grid>
                            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                                <TextField
                                    id="estado"
                                    label="Estado"
                                    variant="filled"
                                    value={estado}
                                    helperText=" "
                                    disabled
                                    className='w-100'
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
                        </Grid>
                    </Box>

                    <Grid container spacing={2} mb={2}>
                        
                        <Grid item defaultMobileSize={6}>
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
                            >{selectColonias.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} mb={2}>
                        <Grid item defaultMobileSize={6}>
                            <TextField
                                id="outlined-basic"
                                label="Calle"
                                variant="filled"
                                value={calle}
                                onChange={handleCalle}
                                helperText={calleTocada && !calleValida ? '*Por favor, completa este campo' : ' '}
                                error={calleTocada && !calleValida}
                                inputProps={{ maxLength: 30 }}
                                className='w-100'
                            />
                        </Grid>
                        <Grid item defaultMobileSize={6}>
                            <TextField
                                id="outlined-basic"
                                label="Número"
                                value={numero}
                                onChange={handleNumero}
                                helperText={numeroTocado && !numeroValido ? '*Por favor, completa este campo' : ' '}
                                error={numeroTocado && !numeroValido}
                                variant="filled"
                                inputProps={{ maxLength: 10 }}
                                className='w-100'
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} mb={2}>
                        <Grid item defaultMobileSize={4}>
                            <TextField
                                id="outlined-helperText"
                                label="LADA"
                                defaultValue="+52"
                                variant='filled'
                                disabled
                                helperText=" "
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={BanderaDeMexico} alt="Bandera de México" height={15} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item defaultMobileSize={8}>
                            <TextField
                                id="outlined-basic"
                                label="Número de Teléfono"
                                value={telefono}
                                onChange={handleTelefono}
                                helperText={telefonoTocado && !telefonoValido ? '*Por favor, completa este campo' : ' '}
                                error={telefonoTocado && !telefonoValido}
                                variant="filled"
                                inputProps={{ maxLength: 10 }}
                                className='w-100'
                            />
                        </Grid>
                    </Grid>
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
                    <Stack
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        mt={2}
                    >
                        <Checkbox
                            className='mb-3'
                            checked={checkbox}
                            onChange={handleCheckbox}
                            inputProps={{ 'aria-label': 'checkbox' }}
                        />
                        <TypographyMediumText
                            sx={{
                                fontSize: "1.05rem",
                            }}
                        >
                            Manifiesto y confirmo ser mayor de edad y acepto las condiciones de uso de datos y políticas de privacidad.
                        </TypographyMediumText>
                    </Stack>
                    {checkboxValido ? null : <p className='text-danger text-center'>{textoCheckbox}</p>}
                    <p className='text-center text-primary'><a href="#"></a></p>

                    <Link to="#">
                        <TypographyMediumText
                            sx={{
                                fontSize: "1.05rem",
                                color: "blue",
                            }}
                        >
                            Ver aviso de privacidad
                        </TypographyMediumText>
                    </Link>

                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        mt={2}
                    >
                        <Link to={formValido ? "/" : ""} state={formValido ? { formTerminado: true } : { formTerminado: false }}>
                            <Button
                                variant='contained'
                                size='large'
                                onClick={validarFormulario}
                            >
                                Registrarme
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Formulario
