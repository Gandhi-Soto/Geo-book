// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 16/05/2024      #
//   --# Descripcion General : Componente modal de politica de usos de cookies        #
//   ---------------------------------------------------------------------------------#-->
//-------------------------------- MODIFICACIONES ------------------------------------#
// <!--################################################################################
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Fecha               : 11/06/2024                                             #
//   --# Modificacion        : Cambios menores de estilos responsivos                 #
//   --# Marca de cambio     : GSS-110624                                             #
//   ---------------------------------------------------------------------------------#-->

import {ModalLayout} from "../../Layout/Index.js";
import {ModalContext} from "../../Context/Index.js";
import {useContext} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {IconButton, Typography} from "@mui/material";
import UndoIcon from '@mui/icons-material/Undo';
// INICIO CAMBIO GSS-110624
import {TypographySmallText} from "../../Theme/index.js";
// FIN CAMBIO GSS-110624


export const PoliticaDeUsoDeCookiesModal = () => {
    // INICIO CAMBIO GSS-110624
    const {mostrarPoliticasDeUsoDeCookiesModal} = useContext(ModalContext);
    // FIN CAMBIO GSS-110624
    return (
        <ModalLayout
            titulo={<Titulo/>}
            cuerpo={<Cuerpo/>}
            footer={<Footer/>}
            mostrarModal={mostrarPoliticasDeUsoDeCookiesModal}
        />
    )
}

// INICIO CAMBIO GSS-110624
const Titulo = () => {
    return (
        <h2 className='fs-1'> Política de uso de cookies</h2>
    )
}
// FIN CAMBIO GSS-110624

// INICIO CAMBIO GSS-110624
const Cuerpo = () => {
    return (
        <TypographySmallText sx={{textAlign: 'start'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias autem, commodi corporis ducimus et
            fuga fugit hic impedit laboriosam necessitatibus perspiciatis quibusdam sapiente. Aperiam dolorum facere
            inventore ipsam itaque minus omnis, reprehenderit sapiente sit vero. Ab, aperiam aut enim explicabo minima
            molestias nisi perferendis. Animi aspernatur earum ex expedita fugiat fugit harum iusto laborum laudantium
            maxime nam officia, perspiciatis placeat quas quia ratione repellat tempora tempore ut voluptatem,
            voluptatum!
        </TypographySmallText>
    )
}
// FIN CAMBIO GSS-110624

const Footer = () => {
    const {setMostrarPoliticasDeUsoDeCookiesModal, setMostrarAdministradorDeCookiesModal} = useContext(ModalContext);
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Row>
                {/* INICIO CAMBIO GSS-110624 */}
                <Col>
                    <IconButton
                        style={{marginTop: '1rem', marginBottom: '10rem'}}
                        onClick={() => {
                            setMostrarPoliticasDeUsoDeCookiesModal(false);
                            setMostrarAdministradorDeCookiesModal(true)
                        }}>
                        <UndoIcon style={{fontSize: '3rem'}}/>
                    </IconButton>
                </Col>
                {/* FIN CAMBIO GSS-110624 */}
            </Row>
        </Container>
    )
}