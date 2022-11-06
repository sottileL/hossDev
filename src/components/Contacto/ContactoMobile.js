import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/styles';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import rectangle from '../../images/rectangle.webp';

const TitleTypography = styled(Typography)(() => ({
    fontSize: '1rem!important',
    fontWeight: 'bold !important',
    color: 'black',
    letterSpacing: '1px'
}));

const ContactTypography = styled(Typography)(() => ({
    fontSize: '1rem!important',
    fontWeight: 'bold !important',
    color: 'white',
    letterSpacing: '1px'
}));

const SubtitleTypography = styled(Typography)(() => ({
    fontSize: '0.8rem!important',
    fontWeight: 'lighter !important',
    color: 'lightgray',
    letterSpacing: '0.6px'
}));

const ContactoMobile = () => (
    <Grid container direction="column" sx={{backgroundColor: '#e6e6e6'}} md={12} pt={1} pb={5}>
        <Grid
            container
            direction="column"
            sx={{
                backgroundColor: '#ffffff', position: 'relative'
            }}
        >
            <Grid item xs={2} pl={5} pt={1} pb={1}>
                <TitleTypography>
                    CONTACTO
                </TitleTypography>
            </Grid>
            <Grid item xs={2}>
                <img
                    src={rectangle}
                    alt="rectangle"
                    style={{
                        width: '150px', height: '8px', position: 'absolute', left: 0, bottom: -4
                    }}
                />
            </Grid>
        </Grid>
        <Grid container direction="row" display="flex" justifyContent="center" pt={4} pb={3}>
            <Grid item xs={9} textAlign="left" sx={{backgroundColor: '#282a37'}} pb={4} pt={2} pl={2}>
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

export default ContactoMobile;
