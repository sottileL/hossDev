import React from 'react';
import {isMobile} from 'react-device-detect';
import Desktop from './ComisionesDesktop';
import Mobile from './ComisionesMobile';

const Motoplex = () => (
    isMobile ? <Mobile/> : <Desktop/>
);

export default Motoplex;
