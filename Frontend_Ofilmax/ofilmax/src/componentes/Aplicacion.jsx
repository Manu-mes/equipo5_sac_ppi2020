import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PaginaInicial from '../pagina/PaginaInicial';
import Inicio from '../pagina/Inicio';
import Registro from "../pagina/Registro";



function Aplicacion() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= '/' component= {PaginaInicial} />
                <Route exact path= '/Inicio' component= {Inicio} />
                <Route exact path= '/Registro' component= {Registro} />
                
            </Switch>
        </BrowserRouter>

    )
    
}

export default Aplicacion;