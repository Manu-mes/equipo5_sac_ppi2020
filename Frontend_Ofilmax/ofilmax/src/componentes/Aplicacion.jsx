import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PaginaInicial from '../pagina/PaginaInicial';
import Inicio from '../pagina/Inicio';
import Registro from "../pagina/Registro";
import Bienvenida from "../pagina/Bienvenida";
import Panel_ev from "../pagina/Panel_ev";



function Aplicacion() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= '/' component= {PaginaInicial} />
                <Route exact path= '/Inicio' component= {Inicio} />
                <Route exact path= '/Registro' component= {Registro} />
                <Route exact path= '/Bienvenida' component= {Bienvenida} />
                <Route exact path= '/Panel_ev' component= {Panel_ev} />
                
            </Switch>
        </BrowserRouter>

    )
    
}

export default Aplicacion;