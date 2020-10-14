import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PaginaInicial from '../pagina/PaginaInicial';
import Inicio from '../pagina/Inicio';
import Registro from "../pagina/Registro";
import Bienvenida from "../pagina/Bienvenida";
import Panel_ev from "../pagina/Panel_ev";
import Word from '../pagina/Word';
import PowerPoint from '../pagina/PowerPoint';
import Excel from '../pagina/Excel';
import confirmacion from '../pagina/confirmacion';
import Resultados from "../pagina/Resultados";
import PaginaInicial2 from '../pagina/PaginaInicial2';
import Bienvenida2 from '../pagina/Bienvenida2';
import Resultados_p from '../pagina/Resultados_p';
import Rol from "../pagina/Rol";
import EditaryCrear from "../pagina/EditaryCrear";




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
                <Route exact path= '/PowerPoint' component= {PowerPoint} />
                <Route exact path= '/Excel' component= {Excel} />
                <Route exact path= '/confirmacion' component= {confirmacion} />
                <Route exact path= '/Resultados' component= {Resultados} />
                <Route exact path= '/PaginaInicial2' component= {PaginaInicial2} />
                <Route exact path= '/Bienvenida2' component= {Bienvenida2} />
                <Route exact path= '/Resultados_p' component= {Resultados_p} />
                <Route exact path= '/Rol' component= {Rol} />
                <Route exact path= '/EditaryCrear' component= {EditaryCrear} />
                
            </Switch>
        </BrowserRouter>

    )
    
}

export default Aplicacion;