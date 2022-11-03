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
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Nosotros from './components/Nosotros/index';
import Comisiones from './components/Comisiones/index';
import Resumen from './components/Resumen/index';
import Contacto from './components/Contacto/index';

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
