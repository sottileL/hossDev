import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import rectangle from '../../images/rectangle.webp';

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
    fontWeight: 'lighter !important',
    color: 'lightgray',
    letterSpacing: '0.6px'
}));

const ContactoDesktop = () => (
    <Grid container direction="column" sx={{backgroundColor: '#e6e6e6'}} md={12}>
        <Grid
            container
            direction="column"
            sx={{
                backgroundColor: '#ffffff', position: 'relative'
            }}
        >
            <Grid item md={2} pl={7} pt={1} pb={1}>
                <TitleTypography>
                    CONTACTO
                </TitleTypography>
            </Grid>
            <Grid item md={2}>
                <img
                    src={rectangle}
                    alt="rectangle"
                    style={{
                        width: '220px', height: '12px', position: 'absolute', left: 0, bottom: -10
                    }}
                />
            </Grid>
        </Grid>
        <Grid container direction="row" display="flex" justifyContent="center" pt={4} pb={3}>
            <Grid item md={5} textAlign="center" sx={{backgroundColor: '#282a37'}} pb={4} pt={2}>
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
