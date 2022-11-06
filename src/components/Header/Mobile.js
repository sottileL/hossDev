/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import {styled} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {useHistory} from 'react-router-dom';

import logo from '../../images/logo.webp';

import Menu from '../MenuComponent';

const TitleNavbar = styled(Typography)(() => ({
    fontSize: '1.30rem!important',
    fontWeight: 'bold !important',
    color: 'white',
    paddingLeft: 25,
    letterSpacing: '2px',
    textDecoration: 'none'
}));

const SubtitleTypography = styled(Typography)(() => ({
    fontSize: '0.8rem!important',
    fontWeight: 'medium',
    color: 'gray',
    letterSpacing: '0.6px',
    verticalAlign: 'middle'
}));

const HeaderMobile = () => {
    const history = useHistory();

    const handleClickMenu = section => {
        if (section === 'nosotros') {
            history.push('/');
        }
        if (section === 'comisiones') {
            history.push('/comisiones');
        }
        if (section === 'resumen') {
            history.push('/resumen');
        }
        if (section === 'contacto') {
            history.push('/contacto');
        }
    };

    return (
        <Grid container direction="column" sx={{backgroundColor: '#e6e6e6'}} pt={1} pb={1}>
            <Grid item display="flex" justifyContent="flex-end" alignItems="center" pr={3}>
                <PhoneInTalkIcon sx={{
                    fontSize: 20, paddingRight: 1, color: 'gray'
                }}
                />
                <SubtitleTypography>
                    341-6061189
                </SubtitleTypography>
                <EmailOutlinedIcon sx={{
                    fontSize: 20, paddingRight: 1, paddingLeft: 1, color: 'gray'
                }}
                />
                <SubtitleTypography>
                    atencionalcliente@hoss.com.ar
                </SubtitleTypography>
            </Grid>
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
        </Grid>
    );
};

export default HeaderMobile;
