/* eslint-disable lodash/prefer-lodash-method */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import logo from '../../images/logo.png';

const FooterTypography = styled(Typography)(() => ({
    fontSize: '0.6rem!important',
    fontWeight: 'lighter !important',
    color: 'white',
    letterSpacing: '0.1px'
}));

const FooterMobile = () => (
    <Grid container direction="column">
        <Grid container direction="column" backgroundColor="#282a37" pb={5} pt={5}>
            <Grid container direction="column" display="flex" pl={5} pt={2}>
                <Grid item pb={3}>
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: 'auto', height: '45px'
                        }}
                    />
                </Grid>
                <Grid item>
                    <FooterTypography>
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
            <Grid item pt={4} pl={5}>
                <FooterTypography fontWeight="bolder!important">
                    CONTACTO
                    <br/>
                    <br/>
                </FooterTypography>
                <FooterTypography>
                    Dirección: Paraguay 777 piso 10b
                    <br/>
                    Whatsapp: 34160601189
                    <br/>
                    Mail: atencionalcliente@hoss.com.ar
                </FooterTypography>
            </Grid>
        </Grid>
        <Grid item pb={4} sx={{backgroundColor: '#555763'}}/>
    </Grid>
);

export default FooterMobile;
