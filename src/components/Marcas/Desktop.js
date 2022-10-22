/* eslint-disable lodash/prefer-lodash-method */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import {Divider, Table} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import rectangle from '../../images/rectangle.png';
import verresumen from '../../images/verresumen.png';
import darklogo from '../../images/darklogo.png';
import logo from '../../images/logo.png';

function createData(
    concepto,
    arancel
) {
    return {
        concepto, arancel
    };
}

const rows = [
    createData('Acciones y CEDEARS - Compra/Venta', '1.00% + I.V.A'),
    createData('Acciones del Exterior e ETF - Compra/Venta', '1,00% + I.V.A + u$s 0.0 p/Tit.'),
    createData('Títulos públicos - Compra/Venta en Pesos', '0,65%'),
    createData('Títulos públicos - Compra/Venta en USD', '1,00% al Tipo de Cambio Oficial'),
    createData('Cauciones Colocadores en Pesos', '1,50% anual'),
    createData('Cauciones Colocadores en USD', '0,25% anual'),
    createData('Cauciones Tomadoras en Pesos', '3,60% anual'),
    createData('Cauciones Tomadoras en USD', '1,50% anual'),
    createData('Cheques de Pago Diferido - Compra', '1,50% + I.V.A anual'),
    createData('Cheques de Pago Diferido - Venta', '1,50% + I.V.A anual.'),
    createData('Dólar Futuro ROFEX - Compra $50,00 + IVA', '0,25% (IVA INCLUIDO)'),
    createData('Dólar Futuro ROFEX - Venta $50,00 + IVA', '0,25% (IVA INCLUIDO)'),
    createData('Licitación de Fideicomisos', '0,50%'),
    createData('Opciones sobre Acciones - Compra/Venta', '1,50% + I.V.A'),
    createData('Opciones sobre Títulos Públicos - Compra/Venta', '1,50%'),
    createData('Opciones - Ejercicio', '1,00% + I.V.A'),
    createData('Plazo Firme - Compra/Venta', '1,00% + I.V.A'),
    createData('Contacto con Liquidación', '1,50% al Tipo de Cambio Oficial')
];

const TitleTypography = styled(Typography)(() => ({
    fontSize: '1.4rem!important',
    fontWeight: 'bold !important',
    color: 'black',
    letterSpacing: '1.2px'
}));

const SubtitleTypography = styled(Typography)(() => ({
    fontSize: '1.1rem!important',
    fontWeight: 'light',
    color: 'black',
    letterSpacing: '0.5px'
}));

const FooterTypography = styled(Typography)(() => ({
    fontSize: '1.0',
    fontWeight: 'light !important',
    color: 'white',
    letterSpacing: '0.6px'
}));

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        fontSize: 22, paddingBottom: 10
    },
    [`&.${tableCellClasses.body}`]: {fontSize: 18}
}));

const StyledTableRowHeader = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {backgroundColor: theme.palette.action.hover},
    // hide last border
    '&:last-child td, &:last-child th': {border: 0},
    '&:first-child td, &:first-child th': {border: 0}
}));

const StyledImageTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {backgroundColor: theme.palette.action.hover},
    // hide last border
    '&:last-child td, &:last-child th': {border: 0},
    '&:first-child td, &:first-child th': {border: 0}
}));

const MarcasDesktop = () => (
    <Grid container direction="row" sx={{backgroundColor: '#cccccc'}}>
        <Grid container direction="column" sx={{backgroundColor: '#ffffff'}}>
            <Grid item display="flex" pl={7} pt={1}>
                <TitleTypography fontFamily="Arial">
                    NOSOTROS
                </TitleTypography>
            </Grid>
            <Grid item>
                <img
                    src={rectangle}
                    alt="rectangle"
                    style={{
                        width: '11%', height: '10px'
                    }}
                />
            </Grid>
        </Grid>
        <Grid container direction="column" xs={6}>
            <Grid item pl={7} pt={8}>
                <img
                    src={darklogo}
                    alt="darklogo"
                    style={{
                        width: '60%', height: 'auto'
                    }}
                />
            </Grid>
        </Grid>
        <Grid container direction="row" xs={10} justifyContent="center" width="80%" pl={7} pt={7} pb={8}>
            <Grid item xs={4}>
                <TitleTypography>
                    HOSS INVERSIONES
                </TitleTypography>
                <SubtitleTypography>
                    <br/>
                    Somos un agente de inversiones y
                    <br/>
                    construimos nuestro trabajo de manera
                    <br/>
                    tecnológica, transparente seria y ágil.
                    <br/>
                    La educación en el ámbito financiero
                    <br/>
                    nos parece fundamentel para incluir a
                    <br/>
                    toda la sociedad,
                </SubtitleTypography>
            </Grid>
            <Grid item xs={8} pt={5} >
                <SubtitleTypography fontWeight="bold">
                    Agente de negociación
                    <br/>
                </SubtitleTypography>
                <SubtitleTypography>
                    Mercado registrado ante C.N.V - Matrícula Nº 1097
                    <br/>
                    Mercado argentino de valores - Matrícula Nº 765
                    <br/>
                    Matba Rofex - Matrícula Nº 902
                </SubtitleTypography>
            </Grid>
            <Divider orientation="horizontal" width="200%" flexItem sx={{mr: '-1px'}}/>
        </Grid>
        <Grid container direction="row" backgroundColor="#282a37" pb={10} pt={5}>
            <Grid container direction="column" xs={7} spacing={3} display="flex" pl={7} pt={2}>
                <Grid item xs={2}>
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: 'auto', height: '40px'
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FooterTypography fontFamily="Arial">
                        Somos un agente de inversiones y construimos nuestro
                        <br/>
                        trabajo de manera tecnológica, transparente, seria y ágil
                        <br/>
                        La educación en el ámbito financiero nos parece
                        <br/>
                        fundamental para incluir a toda la sociedad.
                    </FooterTypography>
                </Grid>
            </Grid>
            <Grid item xs={5} pt={9}>
                <FooterTypography fontFamily="Arial" fontWeight="bold">
                    CONTACTO
                    <br/>
                    <br/>
                </FooterTypography>
                <FooterTypography fontFamily="Arial">
                    Dirección: Paraguay 777 piso 10b
                    <br/>
                    Whatsapp: 34160601189
                    <br/>
                    Mail: atencionalcliente@hoss.com.ar
                </FooterTypography>
            </Grid>
        </Grid>
        <TableContainer component={Paper}>
            <Table
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <StyledTableRowHeader>
                        <StyledTableCell width="40%">COMISIONES POR OPERACIONES CONCEPTO</StyledTableCell>
                        <StyledTableCell>ARANCEL</StyledTableCell>
                    </StyledTableRowHeader>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow
                            key={row.concepto}
                        >
                            <StyledTableCell>{row.concepto}</StyledTableCell>
                            <StyledTableCell>{row.arancel}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Grid container direction="column" sx={{backgroundColor: '#ffffff'}} pt={4}>
            <Grid item display="flex" pl={7} pt={1}>
                <TitleTypography fontFamily="Arial">
                    RESUMEN DE CUENTA
                </TitleTypography>
            </Grid>
            <Grid item>
                <img
                    src={rectangle}
                    alt="rectangle"
                    style={{
                        width: 'auto', height: '10px'
                    }}
                />
            </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" xs={12} pt={5} pb={10}>
            <Grid item pl={7} pt={8}>
                <img
                    src={verresumen}
                    alt="verresumen"
                    style={{
                        width: 'auto', height: '70px'
                    }}
                />
            </Grid>
        </Grid>
    </Grid>
);

export default MarcasDesktop;
