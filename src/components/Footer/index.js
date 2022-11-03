import React from 'react';
import {isMobile} from 'react-device-detect';
import Desktop from './FooterDesktop';
import Mobile from './FooterMobile';

const Motoplex = () => (
    isMobile ? <Mobile/> : <Desktop/>
);

export default Motoplex;
