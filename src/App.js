import React from 'react';
import './App.css';
import './fonts/FSEmeric/stylesheet.css';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import {LightTheme} from './theme/theme';
import Header from './components/Header/Mobile';
import Footer from './components/Footer/FooterMobile';
import Nosotros from './components/Nosotros/NosotrosMobile';
import Comisiones from './components/Comisiones/ComisionesMobile';
import Resumen from './components/Resumen/ResumenMobile';
import Contacto from './components/Contacto/ContactoMobile';

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
