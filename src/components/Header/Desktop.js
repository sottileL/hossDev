/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';

import {styled} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import Logo from '../../images/logo.webp';

const TitleNavbar = styled(Typography)(() => ({
    fontSize: '1.2rem!important',
    fontWeight: 'medium !important',
    color: 'white',
    letterSpacing: '0px',
    textDecoration: 'none'
}));

const SubtitleTypography = styled(Typography)(() => ({
    fontSize: '1.2',
    fontWeight: 'medium',
    color: 'gray',
    letterSpacing: '0.6px'
}));

const HeaderDesktop = ({handleClickMenu}) => (
    <Grid container direction="column" sx={{backgroundColor: '#e6e6e6'}} pb={2}>
        <Grid item display="flex" justifyContent="flex-end" pr={3} pt={0.2} pb={0.2}>
            <PhoneInTalkIcon sx={{
                fontSize: 20, paddingRight: 1, color: 'gray'
            }}
            />
            <SubtitleTypography fontSize={15}>
                341-6061189 -
            </SubtitleTypography>
            <EmailOutlinedIcon sx={{
                fontSize: 20, paddingRight: 1, paddingLeft: 1, color: 'gray'
            }}
            />
            <SubtitleTypography fontSize={15}>
                atencionalcliente@hoss.com.ar
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
            <Grid container md={9} direction="row" display="flex" alignItems="center" justifyContent="flex-end" spacing={3} pt={1}>
                <Grid item display="flex" alignItems="center" justifyContent="flex-end">
                    <TitleNavbar component={Link} to="/" className="underlined-button">
                        NOSOTROS
                    </TitleNavbar>
                </Grid>
                <Grid item display="flex" alignItems="center" justifyContent="flex-end">
                    <TitleNavbar component={Link} to="comisiones" className="underlined-button">
                        COMISIONES
                    </TitleNavbar>
                </Grid>
                <Grid item display="flex" alignItems="center" justifyContent="flex-end">
                    <TitleNavbar component={Link} to="resumen" className="underlined-button">
                        RESUMEN DE CUENTA
                    </TitleNavbar>
                </Grid>
                <Grid item display="flex" alignItems="center" justifyContent="flex-end">
                    <TitleNavbar component={Link} to="contacto" className="underlined-button">
                        CONTACTO
                    </TitleNavbar>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default HeaderDesktop;
