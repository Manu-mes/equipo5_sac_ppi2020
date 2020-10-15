import React from 'react';
import { Link } from 'react-router-dom';
import Flecha from '../imagenes/Flecha.png';
import Excel from '../imagenes/Excel.png';
import Navegacion from '../componentes/Navegacion';



class excel extends React.Component {
    render() {
        return (
            <div>
                <Navegacion />
                <div>
                    <br></br>
                    <Link to="/Panel_ev" class="btn"><img src={Flecha} class="" alt="..." /></Link>
                    <br></br>
                    <h4 className="text-center ">¡Bienvenido a la evaluación de Excel!</h4>
                    <br></br>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2"><img src={Excel} className="..." alt="..." /></div>
                            <div className="col-md-auto"><p className="text-center card-title"><br></br>¡Hola!<br></br>
                            Mi nombre es Excel, o tambien me llaman <br></br> Hojas de Calculo, aqui evaluaremos<br></br> tus conocimientos de está <br></br>herramienta ofimatica <br></br>¡ Diviertete!</p></div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-7">
                        <div className="container ">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center  ">
                                    <div className="card w-50 text-center card border-success">
                                        <div className="card-body ">
                                            <h5 className="card-title text-success">Pregunta N°1</h5>
                                            <p className="card-text">¿La intersección entre una fila y una columna se denomina celda?</p>
                                            <a href="#" className="btn btn-outline-success">Verdadero</a>
                                            <a href="#" className="btn btn-outline-danger">Falso</a>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://vivirsalud.cl/wp-content/uploads/2019/11/excel-icons-animation.gif" class="h-65 w-50" alt="..." />
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
                    <div className="col col-lg-7">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center card border-success">
                                        <div className="card-body ">
                                            <h5 className="card-title text-success">Pregunta N°2</h5>
                                            <p className="card-text">Cuando se introduce una fórmula en una celda, lo primero que hay que introducir es:</p>
                                            <div className="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> Comillas
                                            </div>
                                            <div class="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option2" aria-label="..." /> Paréntesis
                                            </div>
                                            <div className="form-check">
                                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option3" aria-label="..." /> El signo igual
                                            </div>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://www.excelfrog.com/tuto/b/8.gif" class="h-65 w-50" alt="..." />
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
                    <div className="col col-lg-7">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center card border-success">
                                        <div className="card-body ">
                                            <h5 className="card-title text-success">Pregunta N°3</h5>
                                            <p className="card-text">¿Las etiquetas se utlizan para ayudarnos a identificar la información?</p>
                                            <a href="#" className="btn btn-outline-success">Verdadero</a>
                                            <a href="#" className="btn btn-outline-danger">Falso</a>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://tecpro-digital.com/wp-content/uploads/2019/12/Video_19-12-03_21-25-46.gif" className="h-65 w-50" alt="..." />
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
                    <div className="col col-lg-7">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center card border-success">
                                        <div className="card-body ">
                                            <h5 className="card-title text-success">Pregunta N°4</h5>
                                            <p className="card-text">En una hoja de cálculo hay tres tipos de datos fundamentales:</p>
                                            <div className="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> Datos, palabras y números.
                                            </div>
                                            <div class="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option2" aria-label="..." /> Ecuaciones, datos y números.
                                            </div>
                                            <div className="form-check">
                                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option3" aria-label="..." />  Números, fórmulas y etiquetas
                                            </div>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://rte.mx/wp-content/uploads/2020/05/LinesCreatives_animation-9.gif" className="h-65 w-50" alt="..." />
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
                    <div className="col col-lg-7">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center card border-success">
                                        <div className="card-body ">
                                            <h5 className="card-title text-success">Pregunta N°5</h5>
                                            <p className="card-text">¿CTRL+U es el método abreviado para añadir un nuevo documento?</p>
                                            <a href="#" className="btn btn-outline-success">Verdadero</a>
                                            <a href="#" className="btn btn-outline-danger">Falso</a>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://expertosis.com/wp-content/uploads/2020/03/hojas-de-calculo-portada.gif" className="h-65 w-50" alt="..." />
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
                    <div className="col col-lg-7">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center card border-success">
                                        <div className="card-body ">
                                            <h5 className="card-title text-success">Pregunta N°6</h5>
                                            <p className="card-text">¿Qué tecla se debe mantener pulsada para seleccionar un rango de celdas dispersas?</p>
                                            <div className="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> AltGr
                                            </div>
                                            <div class="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option2" aria-label="..." /> Ctrl
                                            </div>
                                            <div className="form-check">
                                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option3" aria-label="..." />  Tabular
                                            </div>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://pa1.narvii.com/6493/f405acca9eb4935d059868250758ee3abe62d3f9_hq.gif" className="h-65 w-50" alt="..." />
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
                    <div className="col col-lg-7">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center card border-success">
                                        <div className="card-body ">
                                            <h5 className="card-title text-success">Pregunta N°7</h5>
                                            <p className="card-text">¿El icono de la brochita nos sirve para copiar de una celda a otra?</p>
                                            <a href="#" className="btn btn-outline-success">Verdadero</a>
                                            <a href="#" className="btn btn-outline-danger">Falso</a>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://i.gifer.com/WonI.gif" className="h-65 w-50" alt="..." />
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
                        <strong>inalizar</strong>
                    </Link>
                </div>
                <br></br>
                <br></br>
            </div>
        );
    }
}
export default excel;

