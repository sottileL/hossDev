import React, {useRef} from 'react';
import Grid from '@mui/material/Grid';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from '../../components/Header/Desktop';
import Footer from '../../components/Footer/FooterDesktop';
import Nosotros from '../../components/Nosotros/NosotrosDesktop';
import Comisiones from '../../components/Comisiones/ComisionesDesktop';
import Resumen from '../../components/Resumen/ResumenDesktop';
import Contacto from '../../components/Contacto/ContactoDesktop';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-image-lightbox/style.css';

const Desktop = () => {
    const nosotrosRef = useRef(null);
    const comisionesRef = useRef(null);
    const resumenRef = useRef(null);
    const contactoRef = useRef(null);

    const handleClickMenu = section => {
        if (section === 'nosotros') {
            nosotrosRef.current.scrollIntoView({behavior: 'smooth'});
        }

        if (section === 'comisiones') {
            comisionesRef.current.scrollIntoView({behavior: 'smooth'});
        }

        if (section === 'resumen') {
            resumenRef.current.scrollIntoView({behavior: 'smooth'});
        }

        if (section === 'contacto') {
            contactoRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <Router>
            <Grid direction="column" width="100%" id="inicio" ref={nosotrosRef}>
                <Header handleClickMenu={handleClickMenu}/>
                <Switch>
                    <Route exact path="/">
                        <Grid item id="nosotros">
                            <Nosotros/>
                        </Grid>
                    </Route>
                    <Route path="/comisiones">
                        <Grid item id="comisiones">
                            <Comisiones/>
                        </Grid>
                    </Route>
                    <Route path="/resumen">
                        <Grid item id="resumen">
                            <Resumen/>
                        </Grid>
                    </Route>
                    <Route path="/contacto">
                        <Grid item id="contacto">
                            <Contacto/>
                        </Grid>
                    </Route>
                    <Grid item id="footer">
                        <Footer/>
                    </Grid>
                </Switch>
            </Grid>
        </Router>
    );
};

export default Desktop;
