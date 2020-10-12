import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PaginaInicial from '../pagina/PaginaInicial';
import Inicio from '../pagina/Inicio';
import Registro from "../pagina/Registro";
import Bienvenida from "../pagina/Bienvenida";
import Panel_ev from "../pagina/Panel_ev";
import Word from '../pagina/Word';
import confirmacion from '../pagina/confirmacion';
import Resultados from "../pagina/Resultados";
import PaginaInicial2 from '../pagina/PaginaInicial2';
import Bienvenida2 from '../pagina/Bienvenida2';




function Aplicacion() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= '/' component= {PaginaInicial} />
                <Route exact path= '/Inicio' component= {Inicio} />
                <Route exact path= '/Registro' component= {Registro} />
                <Route exact path= '/Bienvenida' component= {Bienvenida} />
                <Route exact path= '/Panel_ev' component= {Panel_ev} />
                <Route exact path= '/Word' component= {Word} />
                <Route exact path= '/confirmacion' component= {confirmacion} />
                <Route exact path= '/Resultados' component= {Resultados} />
                <Route exact path= '/PaginaInicial2' component= {PaginaInicial2} />
                <Route exact path= '/Bienvenida2' component= {Bienvenida2} />
                
            </Switch>
        </BrowserRouter>

    )
    
}

export default Aplicacion;