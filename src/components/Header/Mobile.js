/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import {styled} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import logo from '../../images/logo.png';

import Menu from '../MenuComponent';

const TitleNavbar = styled(Typography)(() => ({
    fontSize: '1.30rem!important',
    fontWeight: 'bold !important',
    color: 'white',
    paddingLeft: 25,
    letterSpacing: '2px',
    textDecoration: 'none'
}));

const HeaderMobile = ({handleClickMenu}) => (
    <Grid container direction="row" py={2} alignItems="center" sx={{backgroundColor: '#282a37'}} justifyContent="center">
        <Grid item xs={4} pl={2}>
            <Menu
                _id="menu"
                menuActions={[
                    {
                        label: 'Nosotros',
                        onClick: () => handleClickMenu('nosotros')
                    },
                    {
                        label: 'Comisiones',
                        onClick: () => handleClickMenu('comisiones')
                    },
                    {
                        label: 'Resumen',
                        onClick: () => handleClickMenu('resumen')
                    },
                    {
                        label: 'Contacto',
                        onClick: () => handleClickMenu('contacto')
                    }
                ]}
            />
        </Grid>
        <Grid item xs={4}>
            <img
                src={logo}
                alt="logo"
                style={{
                    width: 'auto', height: '45px'
                }}
            />
        </Grid>
        <Grid item xs={4}/>
    </Grid>
);

export default HeaderMobile;
