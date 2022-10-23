import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import rectangle from '../../images/rectangle.png';

const TitleTypography = styled(Typography)(() => ({
    fontSize: '1.4rem!important',
    fontWeight: 'bold !important',
    color: 'black'
}));

const ContactTypography = styled(Typography)(() => ({
    fontSize: '1.1rem!important',
    fontWeight: 'bold !important',
    color: 'white',
    letterSpacing: '1px'
}));

const SubtitleTypography = styled(Typography)(() => ({
    fontSize: '1.2',
    fontWeight: 'light',
    color: 'lightgray',
    letterSpacing: '0.6px'
}));

const ContactoDesktop = () => (
    <Grid container direction="column" sx={{backgroundColor: '#e6e6e6'}} md={12} pt={1} pb={5}>
        <Grid
            container
            direction="column"
            sx={{backgroundColor: '#ffffff'}}
        >
            <Grid item md={2} pl={7} pt={1}>
                <TitleTypography>
                    CONTACTO
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
        </Grid>
        <Grid container direction="row" display="flex" justifyContent="flex-end" md={4} pt={4}>
            <Grid item sx={{backgroundColor: '#282a37'}} pb={4} pl={4} pt={2} pr={30}>
                <ContactTypography>
                    <LocationOnOutlinedIcon sx={{
                        fontSize: 25, paddingRight: 1, color: '#72a5b3'
                    }}
                    />
                    DIRECCIÓN
                    <br/>
                </ContactTypography>
                <SubtitleTypography>
                    Paraguay 777 piso 10b
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </SubtitleTypography>
                <ContactTypography>
                    <PhoneInTalkIcon sx={{
                        fontSize: 25, paddingRight: 1, color: '#72a5b3'
                    }}
                    />
                    WHATSAPP
                    <br/>
                </ContactTypography>
                <SubtitleTypography>
                    340160601189
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </SubtitleTypography>
                <ContactTypography>
                    <EmailOutlinedIcon sx={{
                        fontSize: 25, paddingRight: 1, color: '#72a5b3'
                    }}
                    />
                    MAIL
                    <br/>
                </ContactTypography>
                <SubtitleTypography>
                    atencionalcliente@hoss.com.ar
                    <br/>
                </SubtitleTypography>
            </Grid>
        </Grid>
    </Grid>
);

export default ContactoDesktop;
