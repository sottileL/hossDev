/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';

import {styled} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

import Logo from '../../images/logo.png';

const TitleNavbar = styled(Typography)(() => ({
    fontSize: '1.2rem!important',
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
    <Grid container direction="column" sx={{backgroundColor: '#cccccc'}} pb={2}>
        <Grid item display="flex" justifyContent="flex-end" pr={8} pt={0.2} pb={0.2}>
            <PhoneInTalkIcon sx={{
                fontSize: 20, paddingRight: 1, color: 'gray'
            }}
            />
            <SubtitleTypography fontSize={15}>
                341-6061189- atencionalcliente@hoss.com.ar
            </SubtitleTypography>
        </Grid>
        <Grid container direction="row" pb={2} sx={{backgroundColor: '#282a37'}}>
            <Grid item md={3} pl={7} pt={3} pb={0.5}>
                <img
                    src={Logo}
                    alt="logo"
                    style={{
                        width: 'auto', height: '55px'
                    }}
                />
            </Grid>
            <Grid item md={9} direction="row" display="flex" alignItems="center" justifyContent="flex-end" pr={8} pt={1.5}>
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
