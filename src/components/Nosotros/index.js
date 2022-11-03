import React from 'react';
import {isMobile} from 'react-device-detect';
import Desktop from './NosotrosDesktop';
import Mobile from './NosotrosMobile';

const Motoplex = () => (
    isMobile ? <Mobile/> : <Desktop/>
);

export default Motoplex;
