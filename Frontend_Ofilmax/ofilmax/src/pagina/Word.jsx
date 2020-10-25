import React from 'react';
import { Link } from 'react-router-dom';
import Flecha from '../imagenes/Flecha.png';
import Word from '../imagenes/Word.png'
import Navegacion from '../componentes/Navegacion';
import Footer from '../componentes/Footer';



class Word_ev extends React.Component {
    render() {
        return (
             <div>
        <Navegacion />
        <Link to="/Panel_ev" class="btn"><img src={Flecha} class="" alt="..." /></Link>
        <div className="container text-center">
        <br/>
        <h4>¡Bienvenido a la evaluación de Word!</h4>

        <div className="container">
        <div className="row">
        <div className="col-md-3 offset-md-3">
        <img src={Word} className="" alt="..." />
        </div>
        <div className="col-md-3">
        <p className="text-center card-title"><br></br>¡Hola!<br></br>
        Mi nombre es Word, o tambien me llaman <br></br> Procesador de Texto, aqui evaluaremos<br></br> tus conocimientos de está <br></br>herramienta ofimatica <br></br>¡ Diviertete!</p>
        </div>
        </div>
        <div className="jumbotron jumbotron-fluid alert-light border border-primary rounded">
       <div className="container">
       <h4 className="text-primary">Pregunta N°1</h4>
       <p class="text-body">¿Microsoft Word es un procesador de texto?</p>

       <a href="#" className="btn    btn-outline-success">Verdadero</a> &nbsp;  &nbsp;
       <a href="#" className="btn    btn-outline-danger">Falso</a>
       <br/>
       <br/>
       <img src="https://steamuserimages-a.akamaihd.net/ugc/364030656455764292/D380E479859895E92F411D8A958043968B116DEA/" class="h-65 w-50" alt="..." />
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid alert-light border border-primary rounded">
       <div className="container">
       <h4 className="text-primary">Pregunta N°2</h4>
       <p class="text-body">¿CTRL+P es el método abreviado para imprimir un documento?</p>

       <a href="#" className="btn    btn-outline-success">Verdadero</a> &nbsp;  &nbsp;
       <a href="#" className="btn    btn-outline-danger">Falso</a>
       <br/>
       <br/>
       <img src="https://support.epson-europe.com/onlineguides/es/sp2100/ref_g/images/21a21.gif" class="h-65 w-50" alt="..." />
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid alert-light border border-primary rounded">
       <div className="container">
       <h4 className="text-primary">Pregunta N°3</h4>
       <p class="text-body">¿Cuál es el comando para pegar texto?</p>

       <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
  <label class="form-check-label" for="exampleRadios1">
    CTRL + D
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
    CTRL + C
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
  <label class="form-check-label" for="exampleRadios3">
    CTRL + V
  </label>
</div>
       <br/>
       <img src="https://4.bp.blogspot.com/-f8jt6o9W0q0/VhlVmgFd4EI/AAAAAAAAACw/zKCp2d3lUGw/s1600/711529_typing-keyboard-dennou-coil.gif" class="h-65 w-50" alt="..." />
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid alert-light border border-primary rounded">
       <div className="container">
       <h4 className="text-primary">Pregunta N°4</h4>
       <p class="text-body">¿En Word, podemos agregar portadas a nuestro trabajos?</p>

       <a href="#" className="btn    btn-outline-success">Verdadero</a> &nbsp;  &nbsp;
       <a href="#" className="btn    btn-outline-danger">Falso</a>
       <br/>
       <br/>
       <img src="https://media0.giphy.com/media/3o7TKUZfJKUKuSWTZe/200.gif" class="h-65 w-50" alt="..." />
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid alert-light border border-primary rounded">
       <div className="container">
       <h4 className="text-primary">Pregunta N°5</h4>
       <p class="text-body">¿En Word nos permite corregir la ortografía y gramática de un documento?</p>

       <a href="#" className="btn    btn-outline-success">Verdadero</a> &nbsp;  &nbsp;
       <a href="#" className="btn    btn-outline-danger">Falso</a>
       <br/>
       <br/>
       <img src="https://static1.squarespace.com/static/5784182c20099ee99d80fc86/t/5c5b01609b747a56b269da4d/1549468075794/giphy.gif?format=1500w" class="h-65 w-50" alt="..." />
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
export default Word_ev;

