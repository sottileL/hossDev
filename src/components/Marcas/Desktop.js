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
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import rectangle from '../../images/rectangle.png';
import darklogo from '../../images/darklogo.png';
import logo from '../../images/logo.png';

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
];

const TitleTypography = styled(Typography)(() => ({
    fontSize: '1.2rem!important',
    fontWeight: 'bold !important',
    color: 'black',
    letterSpacing: '1px'
}));

const SubtitleTypography = styled(Typography)(() => ({
    fontSize: '1.2',
    fontWeight: 'light',
    color: 'black',
    letterSpacing: '0.6px'
}));

const FooterTypography = styled(Typography)(() => ({
    fontSize: '1.0',
    fontWeight: 'light !important',
    color: 'white',
    letterSpacing: '0.6px'
}));

const MarcasDesktop = () => (
    <Grid container direction="row" sx={{backgroundColor: '#cccccc'}}>
        <Grid container direction="column" sx={{backgroundColor: '#ffffff'}}>
            <Grid item display="flex" pl={7} pt={1}>
                <TitleTypography fontFamily="Arial" fontWeight="bold" fontSize={20}>
                    NOSOTROS
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
        <Grid container direction="column" xs={12}>
            <Grid item pl={7} pt={8}>
                <img
                    src={darklogo}
                    alt="darklogo"
                    style={{
                        width: 'auto', height: '120px'
                    }}
                />
            </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" width="80%" pl={7} pt={7} pb={8}>
            <Grid item xs={6}>
                <TitleTypography fontFamily="Arial">
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
            <Grid item xs={6} pt={5} >
                <SubtitleTypography fontFamily="Arial" fontWeight="bold">
                    Agente de negociación
                    <br/>
                </SubtitleTypography>
                <SubtitleTypography fontFamily="Arial">
                    Mercado registrado ante C.N.V - Matrícula Nº 1097
                    <br/>
                    Mercado argentino de valores - Matrícula Nº 765
                    <br/>
                    Matba Rofex - Matrícula Nº 902
                </SubtitleTypography>
            </Grid>
        </Grid>
        <Divider orientation="horizontal" flexItem sx={{mr: '-1px'}}/>
        <Grid container direction="row" backgroundColor="#282a37" pb={10} pt={5}>
            <Grid container direction="column" xs={7} spacing={3} display="flex" pl={10} pt={2}>
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
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Grid>
);

export default MarcasDesktop;
