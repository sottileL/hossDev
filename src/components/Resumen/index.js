import React from 'react';
import {isMobile} from 'react-device-detect';
import Desktop from './ResumenDesktop';
import Mobile from './ResumenMobile';

const Motoplex = () => (
    isMobile ? <Mobile/> : <Desktop/>
);

export default Motoplex;
