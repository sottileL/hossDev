import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import './fonts/FSEmeric/stylesheet.css';
import ThemeProvider from './theme/ThemeProvider';
import {LightTheme} from './theme/theme';
import Header from './components/Header/Mobile';
import Footer from './components/Footer/FooterMobile';
import Nosotros from './components/Nosotros/NosotrosMobile';
import Comisiones from './components/Comisiones/ComisionesDesktop';
import Resumen from './components/Resumen/ResumenDesktop';
import Contacto from './components/ContactForm/Mobile';

const App = () => (
    <ThemeProvider theme={LightTheme}>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Nosotros}/>
                <Route path="/comisiones" component={Comisiones}/>
                <Route path="/resumen" component={Resumen}/>
                <Route path="/contacto" component={Contacto}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
