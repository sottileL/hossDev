import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import rectangle from '../../images/rectangle.png';
import resumen from '../../images/resumen.png';

const TitleTypography = styled(Typography)(() => ({
    fontSize: '1rem!important',
    fontWeight: 'bold !important',
    color: 'black',
    letterSpacing: '1px'
}));

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const ResumenMobile = () => (
    <Router>
        <Grid container direction="column" sx={{backgroundColor: '#e6e6e6'}} pt={1} pb={10}>
            <Grid
                container
                direction="column"
                sx={{
                    backgroundColor: '#ffffff', position: 'relative'
                }}
                md={12}
            >
                <Grid item xs={2} pl={7} pt={1} pb={1}>
                    <TitleTypography fontFamily="Arial">
                        RESUMEN DE CUENTA
                    </TitleTypography>
                </Grid>
                <Grid item xs={2}>
                    <img
                        src={rectangle}
                        alt="rectangle"
                        style={{
                            width: '150px', height: '8px', position: 'absolute', left: 0, bottom: -4
                        }}
                    />
                </Grid>
                <Grid item md={5}/>
            </Grid>
            <Grid item display="flex" justifyContent="center" xs={5} pt={5}>
                <Link to="" onClick={() => openInNewTab('https://www.youtube.com/watch?v=RvhMXIV28XE')}>
                    <img
                        src={resumen}
                        alt="resumen"
                        style={{
                            width: 'auto', height: '30px', justifyContent: 'center'
                        }}
                    />
                </Link>
            </Grid>
        </Grid>
    </Router>
);

export default ResumenMobile;
