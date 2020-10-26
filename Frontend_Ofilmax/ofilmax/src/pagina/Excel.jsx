import React from 'react';
import { Link } from 'react-router-dom';
import Flecha from '../imagenes/Flecha.png';
import Excel from '../imagenes/Excel.png'
import Navegacion from '../componentes/Navegacion';
import Footer from '../componentes/Footer';



class excel extends React.Component {
    render() {
        return (
             <div>
        <Navegacion />
        <Link to="/Panel_ev" class="btn"><img src={Flecha} class="" alt="..." /></Link>
        <div className="container text-center">
        <br/>
        <h4>¡Bienvenido a la evaluación de Excel!</h4>

        <div className="container">
        <div className="row">
        <div className="col-md-3 offset-md-3">
        <img src={Excel} className="" alt="..." />
        </div>
        <div className="col-md-3">
        <p className="text-center card-title"><br></br>¡Hola!<br></br>
        Mi nombre es Excel, o tambien me llaman <br></br> Hojas de Calculo, aqui evaluaremos<br></br> tus conocimientos de está <br></br>herramienta ofimatica <br></br>¡ Diviertete!</p>
        </div>
        </div>
        <div className="jumbotron jumbotron-fluid alert-light border border-success">
       <div className="container">
       <h4 className="text-success">Pregunta N°1</h4>
       <p class="text-body">¿La intersección entre una fila y una columna se denomina celda?</p>

       <a href="#" className="btn    btn-outline-success">Verdadero</a> &nbsp;  &nbsp;
       <a href="#" className="btn    btn-outline-danger">Falso</a>
       <br/>
       <br/>
       <img src="https://vivirsalud.cl/wp-content/uploads/2019/11/excel-icons-animation.gif" class="h-65 w-50" alt="..." />
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid alert-light border border-danger mb-3">
       <div className="container">
       <h4 className="text-danger">Pregunta N°2</h4>
       <p class="text-body">¿CTRL+U es el método abreviado para añadir un nuevo documento?</p>

       <a href="#" className="btn    btn-outline-success">Verdadero</a> &nbsp;  &nbsp;
       <a href="#" className="btn    btn-outline-danger">Falso</a>
       <br/>
       <br/>
       <img src="https://expertosis.com/wp-content/uploads/2020/03/hojas-de-calculo-portada.gif" class="h-65 w-50" alt="..." />
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid alert-light border border-danger mb-3">
       <div className="container">
       <h4 className="text-danger">Pregunta N°3</h4>
       <p class="text-body">Cuando se introduce una fórmula en una celda, lo primero que hay que introducir es:</p>

       <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
  <label class="form-check-label" for="exampleRadios1">
    Comillas
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
    Paréntesis
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
  <label class="form-check-label" for="exampleRadios3">
    El signo igual
  </label>
</div>
       <br/>
       <img src="https://www.excelfrog.com/tuto/b/8.gif" class="h-65 w-50" alt="..." />
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid alert-light border border-danger mb-3">
       <div className="container">
       <h4 className="text-danger">Pregunta N°4</h4>
       <p class="text-body">¿Las etiquetas se utlizan para ayudarnos a identificar la información?</p>

       <a href="#" className="btn    btn-outline-success">Verdadero</a> &nbsp;  &nbsp;
       <a href="#" className="btn    btn-outline-danger">Falso</a>
       <br/>
       <br/>
       <img src="https://tecpro-digital.com/wp-content/uploads/2019/12/Video_19-12-03_21-25-46.gif" class="h-65 w-50" alt="..." />
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid alert-light border border-danger mb-3">
       <div className="container">
       <h4 className="text-danger">Pregunta N°5</h4>
       <p class="text-body">¿El icono de la brochita nos sirve para copiar de una celda a otra?</p>

       <a href="#" className="btn    btn-outline-success">Verdadero</a> &nbsp;  &nbsp;
       <a href="#" className="btn    btn-outline-danger">Falso</a>
       <br/>
       <br/>
       <img src="https://i.gifer.com/WonI.gif" alt="..." />
        </div>
        </div>
        <div className="container">
        <Link to="/confirmacion" button className=" btn btn-orange btn btn-info btn-block" type="submit">
                            <strong>Finalizar</strong>
                        </Link>
                        </div>
        </div>
        </div>
        <br/>
        <br/>
        <Footer/>
      </div>
        );
    }
}
export default excel;