/* eslint-disable lodash/prefer-lodash-method */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import {Table} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableContainer, {tableContainerClasses} from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import rectangle from '../../images/rectangle.png';

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

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        fontSize: 20,
        paddingBottom: 14,
        color: 'black',
        paddingTop: 25,
        letterSpacing: 1.2,
        paddingLeft: 30,
        borderBottom: '4px solid #6996ab'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
        paddingLeft: 30,
        padding: '3px',
        borderBottom: '2px solid gray'
    }
}));

const StyledTableRowHeader = styled(TableRow)(({theme}) => ({'&:nth-of-type(odd)': {backgroundColor: theme.palette.action.hover}}));

const TitleTypography = styled(Typography)(() => ({
    fontSize: '1rem!important',
    fontWeight: 'bold !important',
    color: 'black',
    letterSpacing: '1px'
}));

const ComisionesDesktop = () => (

    <Grid container direction="row" sx={{backgroundColor: '#e6e6e6'}} pt={1} pb={3}>
        <Grid
            container
            direction="column"
            sx={{
                backgroundColor: '#ffffff', position: 'relative'
            }}
        >
            <Grid item xs={2} pl={5} pt={1} pb={1}>
                <TitleTypography>
                    COMISIONES
                </TitleTypography>
            </Grid>
            <Grid item xs={2}>
                <img
                    src={rectangle}
                    alt="rectangle"
                    style={{
                        width: '150px', height: '8px', position: 'absolute', left: 0, bottom: -4
                    }}
                />
            </Grid>
        </Grid>
        <Grid container direction="row" xs={12} display="flex" justifyContent="center">
            <Grid item xs={11} pt={6} pb={7}>
                <TableContainer component={Paper}>
                    <Table
                        size="small"
                        aria-label="a dense table"
                    >
                        <TableHead>
                            <StyledTableRowHeader>
                                <StyledTableCell width="50%">COMISIONES</StyledTableCell>
                                <StyledTableCell width="20%">ARANCEL</StyledTableCell>
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
            </Grid>
        </Grid>
    </Grid>
);

export default ComisionesDesktop;
