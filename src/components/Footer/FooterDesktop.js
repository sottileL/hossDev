/* eslint-disable lodash/prefer-lodash-method */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import {Divider} from '@mui/material';
import logo from '../../images/logo.png';

const FooterTypography = styled(Typography)(() => ({
    fontSize: '1.0',
    fontWeight: 'lighter !important',
    color: 'white',
    letterSpacing: '0.6px'
}));

const FooterDesktop = () => (
    <Grid container direction="column">
        <Grid item>
            <Divider
                style={{
                    width: '100%', height: '4px', background: '#74757d'
                }}
                orientation="horizontal"
            />
        </Grid>
        <Grid container direction="column" sx={{backgroundColor: '#e6e6e6'}} pt={2}>
            <Grid container direction="row" backgroundColor="#282a37" pb={12} pt={8}>
                <Grid container direction="column" md={7} display="flex" pl={10} pt={2}>
                    <Grid item md={2} pb={3}>
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                width: 'auto', height: '45px'
                            }}
                        />
                    </Grid>
                    <Grid item md={2}>
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
                <Grid item md={5} pt={9}>
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
            <Grid item pb={6} sx={{backgroundColor: '#555763'}}/>
        </Grid>
    </Grid>
);

export default FooterDesktop;
