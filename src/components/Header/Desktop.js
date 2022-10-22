/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';

import {styled} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Logo from '../../images/logo.png';

const TitleNavbar = styled(Typography)(() => ({
    fontSize: '1rem!important',
    fontWeight: 'medium !important',
    color: 'white',
    paddingLeft: '20px',
    letterSpacing: '0px',
    textDecoration: 'none'
}));

const SubtitleTypography = styled(Typography)(() => ({
    fontSize: '1.2',
    fontWeight: 'light',
    color: 'gray',
    letterSpacing: '0.6px'
}));

const HeaderDesktop = ({handleClickMenu}) => (
    <Grid container direction="column" sx={{backgroundColor: '#cccccc'}} >
        <Grid item display="flex" justifyContent="flex-end" pr={8}>
            <SubtitleTypography fontFamily="Arial" fontSize={15}>
                341-6061189- atencionalcliente@hoss.com.ar
            </SubtitleTypography>
        </Grid>
        <Grid container direction="row" pb={2}>
            <Grid item xs={4} pl={7} pt={3} pb={3} sx={{backgroundColor: '#282a37'}}>
                <img
                    src={Logo}
                    alt="logo"
                    style={{
                        width: 'auto', height: '50px'
                    }}
                />
            </Grid>
            <Grid item xs={8} pr={8} sx={{backgroundColor: '#282a37'}} display="flex" direction="row" alignItems="center" justifyContent="flex-end">
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
