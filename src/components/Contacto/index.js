import React from 'react';
import {isMobile} from 'react-device-detect';
import Desktop from './ContactoDesktop';
import Mobile from './ContactoMobile';

const Motoplex = () => (
    isMobile ? <Mobile/> : <Desktop/>
);

export default Motoplex;
