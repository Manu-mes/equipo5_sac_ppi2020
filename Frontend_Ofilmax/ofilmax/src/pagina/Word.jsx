import React from 'react';
import { Link } from 'react-router-dom';
import Flecha from '../imagenes/Flecha.png';
import Word from '../imagenes/Word.png'
import W_1 from '../imagenes/W_1.gif';
import Navegacion from '../componentes/Navegacion';



class Word_ev extends React.Component {
    render() {
        return (
            <div>
                <Navegacion />
                <div>
                    <br></br>
                    <Link to="/Panel_ev" class="btn"><img src={Flecha} class="" alt="..." /></Link>
                    <br></br>
                    <h4 className="text-center ">¡Bienvenido a la evaluación de Word!</h4>
                    <br></br>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2"><img src={Word} className="..." alt="..." /></div>
                            <div className="col-md-auto"><p className="text-center card-title"><br></br>¡Hola!<br></br>
                            Mi nombre es Word, o tambien me llaman <br></br> Procesador de Texto, aqui evaluaremos<br></br> tus conocimientos de está <br></br>herramienta ofimatica <br></br>¡ Diviertete!</p></div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-6">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center">
                                        <div className="card-body ">
                                            <h5 className="card-title">Pregunta N°1</h5>
                                            <p className="card-text">¿Microsoft Word es un procesador de texto?</p>
                                            <a href="#" className="btn btn-outline-success">Verdadero</a>
                                            <a href="#" className="btn btn-outline-danger">Falso</a>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src={W_1} class="h-65 w-50" alt="..." />
                                        </div>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-6">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center">
                                        <div className="card-body ">
                                            <h5 className="card-title">Pregunta N°2</h5>
                                            <p className="card-text">¿Desde que menú podemos insertar una imagen?</p>
                                            <div className="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> Menú INICIO
                                            </div>
                                            <div class="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option2" aria-label="..." /> Menú VISTA
                                            </div>
                                            <div className="form-check">
                                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option3" aria-label="..." /> Menú INSERTAR
                                            </div>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://armepaquetesdesoftware.files.wordpress.com/2016/11/auydwkqyw3h24dgpv7sx.jpg?w=800" class="h-65 w-50" alt="..." />
                                        </div>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-6">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center">
                                        <div className="card-body ">
                                            <h5 className="card-title">Pregunta N°3</h5>
                                            <p className="card-text">¿CTRL+P es el método abreviado para imprimir un documento?</p>
                                            <a href="#" className="btn btn-outline-success">Verdadero</a>
                                            <a href="#" className="btn btn-outline-danger">Falso</a>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://support.epson-europe.com/onlineguides/es/sp2100/ref_g/images/21a21.gif" className="h-65 w-50" alt="..." />
                                        </div>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-6">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center">
                                        <div className="card-body ">
                                            <h5 className="card-title">Pregunta N°4</h5>
                                            <p className="card-text">¿Cuál es el comando para pegar texto?</p>
                                            <div className="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> CTRL + D
                                            </div>
                                            <div class="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option2" aria-label="..." /> CTRL + C
                                            </div>
                                            <div className="form-check">
                                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option3" aria-label="..." />  CTRL + V
                                            </div>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://4.bp.blogspot.com/-f8jt6o9W0q0/VhlVmgFd4EI/AAAAAAAAACw/zKCp2d3lUGw/s1600/711529_typing-keyboard-dennou-coil.gif" className="h-65 w-50" alt="..." />
                                        </div>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-6">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center">
                                        <div className="card-body ">
                                            <h5 className="card-title">Pregunta N°5</h5>
                                            <p className="card-text">¿En Word, podemos agregar portadas a nuestro trabajos?</p>
                                            <a href="#" className="btn btn-outline-success">Verdadero</a>
                                            <a href="#" className="btn btn-outline-danger">Falso</a>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://media0.giphy.com/media/3o7TKUZfJKUKuSWTZe/200.gif" className="h-65 w-50" alt="..." />
                                        </div>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-6">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center">
                                        <div className="card-body ">
                                            <h5 className="card-title">Pregunta N°6</h5>
                                            <p className="card-text">¿Cual es el Atajo de teclado para guardar un documento de Word?</p>
                                            <div className="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> CTRL + S
                                            </div>
                                            <div class="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option2" aria-label="..." /> CTRL + G
                                            </div>
                                            <div className="form-check">
                                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option3" aria-label="..." />  CTRL + D
                                            </div>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://media.tenor.com/images/9a2ad8441f0c9d719ac9d7eaa58cdf11/tenor.gif" className="h-65 w-50" alt="..." />
                                        </div>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-6">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center">
                                        <div className="card-body ">
                                            <h5 className="card-title">Pregunta N°7</h5>
                                            <p className="card-text">¿En Word nos permite corregir la ortografía y gramática de un documento?</p>
                                            <a href="#" className="btn btn-outline-success">Verdadero</a>
                                            <a href="#" className="btn btn-outline-danger">Falso</a>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://static1.squarespace.com/static/5784182c20099ee99d80fc86/t/5c5b01609b747a56b269da4d/1549468075794/giphy.gif?format=1500w" className="h-65 w-50" alt="..." />
                                        </div>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="container col-md-5">
                <Link to="/confirmacion" button className=" btn btn-orange btn btn-info btn-block" type="submit">
                            <strong>Finalizar</strong>
                        </Link>
                </div>
                <br></br>
                <br></br>
            </div>
        );
    }
}
export default Word_ev;

