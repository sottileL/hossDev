import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import rectangle from '../../images/rectangle.png';
import resumen from '../../images/resumen.png';

const TitleTypography = styled(Typography)(() => ({
    fontSize: '1.4rem!important',
    fontWeight: 'bold !important',
    color: 'black',
    letterSpacing: '1.2px'
}));

const ResumenDesktop = () => (

    <Grid container direction="column" sx={{backgroundColor: '#e6e6e6'}} pt={1} pb={3}>
        <Grid
            container
            direction="column"
            sx={{backgroundColor: '#ffffff'}}
            md={12}
        >
            <Grid item md={2} pl={7} pt={1}>
                <TitleTypography fontFamily="Arial">
                    RESUMEN DE CUENTA
                </TitleTypography>
            </Grid>
            <Grid item md={2}>
                <img
                    src={rectangle}
                    alt="rectangle"
                    style={{
                        width: '220px', height: '12px'
                    }}
                />
            </Grid>
            <Grid item md={5}/>
        </Grid>
        <Grid item display="flex" justifyContent="center" kmd={5} pt={5} pb={8}>
            <img
                src={resumen}
                alt="resumen"
                style={{
                    width: 'auto', height: '60px', justifyContent: 'center'
                }}
            />
        </Grid>
    </Grid>
);

export default ResumenDesktop;
