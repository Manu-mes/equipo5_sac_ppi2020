import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PaginaInicial from '../pagina/PaginaInicial';
import Inicio from '../pagina/Inicio';
import Panel_ev from "../pagina/Panel_ev";


function Aplicacion() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= '/' component= {PaginaInicial} />
                <Route exact path= '/Inicio' component= {Inicio} />
                <Route exact path= '/Evaluaciones' component= {Panel_ev} />
                
            </Switch>
        </BrowserRouter>

    )
    
}

export default Aplicacion;