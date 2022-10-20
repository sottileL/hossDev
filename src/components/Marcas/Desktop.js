/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import rectangle from '../../images/rectangle.png';

const TitleNavbar = styled(Typography)(() => ({
    fontSize: '0.9rem!important',
    fontWeight: 'medium !important',
    color: 'white',
    paddingLeft: '15px',
    letterSpacing: '0px',
    textDecoration: 'none'
}));

const MarcasDesktop = () => (
    <Grid container direction="column">
        <Grid container direction="column" sx={{backgroundColor: '#ffffff'}} spacing={0} >
            <Grid item display="flex" pl={5} pt={1}>
                <Typography fontFamily="Arial" fontWeight="bold" fontSize={20}>
                    NOSOTROS
                </Typography>
            </Grid>
            <Grid item>
                <img
                    src={rectangle}
                    alt="rectangle"
                    style={{
                        width: 'auto', height: '10px'
                    }}
                />
            </Grid>
        </Grid>
        <Grid container sx={{backgroundColor: '#ffffff'}} direction="column">
            <Grid item md={4} pl={20} pt={1.5} pb={1.5} sx={{backgroundColor: '#282a37'}}/>
            <Grid item md={8} pr={20} sx={{backgroundColor: '#282a37'}} display="flex" direction="row" alignItems="center" justifyContent="flex-end"/>
        </Grid>
    </Grid>
);

export default MarcasDesktop;
