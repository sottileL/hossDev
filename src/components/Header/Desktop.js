/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';

import {styled} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Logo from '../../images/logo.png';

const TitleNavbar = styled(Typography)(() => ({
    fontSize: '0.9rem!important',
    fontWeight: 'medium !important',
    color: 'white',
    paddingLeft: '15px',
    letterSpacing: '0px',
    textDecoration: 'none'
}));

const HeaderDesktop = ({handleClickMenu}) => (
    <Grid container direction="column">
        <Grid item md={2} sx={{backgroundColor: '#cccccc'}} display="flex" justifyContent="flex-end" pr={8}>
            <Typography fontFamily="Arial" fontWeight="light" fontSize={15}>
                341-6061189- atencionalcliente@hoss.com.ar
            </Typography>
        </Grid>
        <Grid container sx={{backgroundColor: '#cccccc'}} direction="row" pb={2}>
            <Grid item md={4} pl={15} pt={3} pb={3} sx={{backgroundColor: '#282a37'}}>
                <img
                    src={Logo}
                    alt="logo"
                    style={{
                        width: 'auto', height: '50px'
                    }}
                />
            </Grid>
            <Grid item md={8} pr={8} sx={{backgroundColor: '#282a37'}} display="flex" direction="row" alignItems="center" justifyContent="flex-end">
                <TitleNavbar component={Link} to="#nosotros" onClick={() => handleClickMenu('nosotros')}>
                    NOSOTROS
                </TitleNavbar>
                <TitleNavbar component={Link} to="#comisiones" onClick={() => handleClickMenu('comisiones')}>
                    COMISIONES
                </TitleNavbar>
                <TitleNavbar component={Link} to="#resumencuenta" onClick={() => handleClickMenu('resumencuenta')}>
                    RESUMEN DE CUENTA
                </TitleNavbar>
                <TitleNavbar component={Link} to="#contacto" onClick={() => handleClickMenu('contacto')}>
                    CONTACTO
                </TitleNavbar>
            </Grid>
        </Grid>
    </Grid>
);

export default HeaderDesktop;
