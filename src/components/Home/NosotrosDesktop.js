/* eslint-disable lodash/prefer-lodash-method */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import rectangle from '../../images/rectangle.png';
import darklogo from '../../images/darklogo.png';

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

const NosotrosDesktop = () => (
    <Grid container direction="row" sx={{backgroundColor: '#e6e6e6'}}>
        <Grid
            container
            direction="column"
            sx={{backgroundColor: '#ffffff'}}
        >
            <Grid item xs={2} pl={7} pt={1}>
                <TitleTypography fontFamily="Arial">
                    NOSOTROS
                </TitleTypography>
            </Grid>
            <Grid item xs={2}>
                <img
                    src={rectangle}
                    alt="rectangle"
                    style={{
                        width: '220px', height: '12px'
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
                        width: 'auto', height: '150px'
                    }}
                />
            </Grid>
        </Grid>
        <Grid container direction="row" md={10} justifyContent="center" width="80%" pl={7} pt={7} pb={8}>
            <Grid item md={5}>
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
                    toda la sociedad.
                </SubtitleTypography>
            </Grid>
            <Grid item md={5} pt={5} >
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
            <Grid item md={2}/>
        </Grid>
    </Grid>
);

export default NosotrosDesktop;
