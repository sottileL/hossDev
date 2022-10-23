import React, {useRef} from 'react';
import Grid from '@mui/material/Grid';

import Header from '../../components/Header/Desktop';
import Footer from '../../components/Footer/FooterDesktop';
import Contacto from '../../components/Contacto/ContactoDesktop';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-image-lightbox/style.css';

const Desktop = () => {
    const nosotrosRef = useRef(null);
    const comisionesRef = useRef(null);
    const resumenRef = useRef(null);
    const contactoRef = useRef(null);

    // react router?
    const handleClickMenu = section => {
        if (section === 'nosotros') {
            nosotrosRef.current.scrollIntoView({behavior: 'smooth'});
        }

        if (section === 'comisiones') {
            comisionesRef.current.scrollIntoView({behavior: 'smooth'});
        }

        if (section === 'c') {
            resumenRef.current.scrollIntoView({behavior: 'smooth'});
        }

        if (section === 'contacto') {
            contactoRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <Grid direction="column" width="100%" id="inicio" ref={nosotrosRef}>
            <Header handleClickMenu={handleClickMenu}/>
            <Grid item id="contacto" ref={contactoRef}>
                <Contacto/>
            </Grid>
            <Grid item id="footer">
                <Footer/>
            </Grid>
        </Grid>
    );
};

export default Desktop;
