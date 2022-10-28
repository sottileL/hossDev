import React from 'react';
import Grid from '@mui/material/Grid';

import Header from '../../components/Header/Desktop';
import Footer from '../../components/Footer/FooterDesktop';
import Nosotros from '../../components/Nosotros/NosotrosDesktop';
import Comisiones from '../../components/Comisiones/ComisionesDesktop';
import Resumen from '../../components/Resumen/ResumenDesktop';
import Contacto from '../../components/Contacto/ContactoDesktop';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-image-lightbox/style.css';

const Desktop = () => (
    <Grid direction="column" width="100%" id="inicio">
        <Header/>
        <Grid item id="nosotros">
            <Nosotros/>
        </Grid>
        <Grid id="comisiones">
            <Comisiones/>
        </Grid>
        <Grid item id="resumen">
            <Resumen/>
        </Grid>
        <Grid item id="contacto">
            <Contacto/>
        </Grid>
        <Grid item id="footer">
            <Footer/>
        </Grid>
    </Grid>
);

export default Desktop;
