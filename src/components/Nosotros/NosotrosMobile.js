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
    fontSize: '1rem!important',
    fontWeight: 'bold !important',
    color: 'black',
    letterSpacing: '1px'
}));

const SubtitleTypography = styled(Typography)(() => ({
    fontSize: '0.8rem!important',
    fontWeight: 'lighter !important',
    color: 'black',
    letterSpacing: '0.5px'
}));

const NosotrosMobile = () => (
    <Grid container direction="row" sx={{backgroundColor: '#e6e6e6'}}>
        <Grid
            container
            direction="column"
            sx={{
                backgroundColor: '#ffffff', position: 'relative'
            }}
        >
            <Grid item xs={2} pl={5} pt={1} pb={1}>
                <TitleTypography>
                    NOSOTROS
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
        <Grid container direction="column">
            <Grid item pt={5} pl={5} display="flex" justifyContent="flex-start">
                <img
                    src={darklogo}
                    alt="darklogo"
                    style={{
                        width: 'auto', height: '80px'
                    }}
                />
            </Grid>
        </Grid>
        <Grid container direction="column" pt={2} pl={5}>
            <Grid container direction="column" pt={3}>
                <Grid item textAlign="left" pb={0.8}>
                    <TitleTypography>
                        HOSS INVERSIONES
                    </TitleTypography>
                </Grid>
                <Grid item textAlign="left">
                    <SubtitleTypography>
                        Somos un agente de inversiones y construimos nuestro
                        <br/>
                        trabajo de manera tecnológica, transparente, seria y ágil.
                        <br/>
                        La educación en el ámbito financiero nos parece
                        <br/>
                        fundamental para incluir a toda la sociedad.
                    </SubtitleTypography>
                </Grid>
            </Grid>
            <Grid container direction="column" pt={3} pb={3}>
                <Grid item textAlign="left">
                    <SubtitleTypography fontWeight="bolder!important">
                        Agente de negociación
                        <br/>
                    </SubtitleTypography>
                </Grid>
                <Grid item textAlign="left">
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

export default NosotrosMobile;
