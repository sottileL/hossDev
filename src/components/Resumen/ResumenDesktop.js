import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import rectangle from '../../images/rectangle.png';

const TitleTypography = styled(Typography)(() => ({
    fontSize: '1.4rem!important',
    fontWeight: 'bold !important',
    color: 'black',
    letterSpacing: '1.2px'
}));

const ResumenDesktop = () => (

    <Grid container direction="column" sx={{backgroundColor: '#ffffff'}} pt={4}>
        <Grid item display="flex" pl={7} pt={1}>
            <TitleTypography fontFamily="Arial">
                RESUMEN DE CUENTA
            </TitleTypography>
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
);

export default ResumenDesktop;
