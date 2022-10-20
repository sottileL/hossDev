/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';

import {styled} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Logo from '../../images/logo.png';

const Home = ({handleClickMenu}) => (
    <Grid container direction="column">
        <Grid item md={2} sx={{backgroundColor: '#ffffff'}} display="flex" justifyContent="flex-end" pr={20}>
            <Typography fontFamily="Arial" fontWeight="light" fontSize={15}>
                341
            </Typography>
        </Grid>
        <Grid container sx={{backgroundColor: '#cccccc'}} direction="row" pb={2}>
            <Grid item md={4} pl={20} pt={1.5} pb={1.5} sx={{backgroundColor: '#282a37'}}>
                <img
                    src={Logo}
                    alt="logo"
                    style={{
                        width: 'auto', height: '55px'
                    }}
                />
            </Grid>
            <Grid item md={8} pr={20} sx={{backgroundColor: '#282a37'}} display="flex" direction="row" alignItems="center" justifyContent="flex-end"/>
        </Grid>
    </Grid>
);

export default Home;
