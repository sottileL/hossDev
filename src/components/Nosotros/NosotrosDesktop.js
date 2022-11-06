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
    color: 'black'
}));

const SubtitleTypography = styled(Typography)(() => ({
    fontSize: '1.1rem!important',
    fontWeight: 'lighter !important',
    color: 'black',
    letterSpacing: '0.5px'
}));

const NosotrosDesktop = () => (
    <Grid container direction="row" sx={{backgroundColor: '#e6e6e6'}}>
        <Grid
            container
            direction="column"
            sx={{
                backgroundColor: '#ffffff', position: 'relative'
            }}
        >
            <Grid item xs={2} pl={7} pt={1} pb={1}>
                <TitleTypography>
                    NOSOTROS
                </TitleTypography>
            </Grid>
            <Grid item xs={2}>
                <img
                    src={rectangle}
                    alt="rectangle"
                    style={{
                        width: '220px', height: '12px', position: 'absolute', left: 0, bottom: -10
                    }}
                />
            </Grid>
        </Grid>
        <Grid container direction="column">
            <Grid item pt={10} display="flex" justifyContent="center">
                <img
                    src={darklogo}
                    alt="darklogo"
                    style={{
                        width: 'auto', height: '130px'
                    }}
                />
            </Grid>
        </Grid>
        <Grid container direction="column" pt={6}>
            <Grid container direction="column" sx={{backgroundColor: '#dadada'}} pt={3} pb={2}>
                <Grid item textAlign="center">
                    <TitleTypography>
                        HOSS INVERSIONES
                    </TitleTypography>
                </Grid>
                <Grid item textAlign="center" pb={2}>
                    <SubtitleTypography>
                        Somos un agente de inversiones y construimos nuestro trabajo
                        <br/>
                        de manera tecnológica, transparente, seria y ágil.
                        <br/>
                        La educación en el ámbito financiero nos parece fundamental
                        <br/>
                        para incluir a toda la sociedad.
                    </SubtitleTypography>
                </Grid>
            </Grid>
            <Grid container direction="column" pt={3} pb={3}>
                <Grid item textAlign="center">
                    <SubtitleTypography fontWeight="bolder!important">
                        Agente de negociación
                        <br/>
                    </SubtitleTypography>
                </Grid>
                <Grid item textAlign="center">
                    <SubtitleTypography>
                        Mercado registrado ante C.N.V - Matrícula Nº 1097
                        <br/>
                        Mercado argentino de valores - Matrícula Nº 765
                        <br/>
                        Matba Rofex - Matrícula Nº 902
                    </SubtitleTypography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default NosotrosDesktop;
