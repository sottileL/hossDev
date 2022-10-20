/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import rectangle from '../../images/rectangle.png';
import darklogo from '../../images/darklogo.png';

const TitleNavbar = styled(Typography)(() => ({
    fontSize: '0.9rem!important',
    fontWeight: 'medium !important',
    color: 'white',
    paddingLeft: '15px',
    letterSpacing: '0px',
    textDecoration: 'none'
}));

const MarcasDesktop = () => (
    <Grid container direction="row">
        <Grid container direction="column" sx={{backgroundColor: '#ffffff'}}>
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
        <Grid container direction="column" sx={{backgroundColor: '#cccccc'}}>
            <Grid item pl={5} pt={2}>
                <img
                    src={darklogo}
                    alt="darklogo"
                    style={{
                        width: 'auto', height: '150px'
                    }}
                />
            </Grid>
            <Grid item>
                <Typography fontFamily="Arial" fontWeight="bold" fontSize={20}>
                    NOSOTROS
                </Typography>
            </Grid>
        </Grid>
    </Grid>
);

export default MarcasDesktop;
