import React from 'react';
import { Link } from 'react-router-dom';
import Flecha from '../imagenes/Flecha.png';
import Powerpoint from '../imagenes/Powerpoint.png'
import Navegacion from '../componentes/Navegacion';



class PowerPoint extends React.Component {
    render() {
        return (
            <div>
                <Navegacion />
                <div>
                    <br></br>
                    <Link to="/Panel_ev" class="btn"><img src={Flecha} class="" alt="..." /></Link>
                    <br></br>
                    <h4 className="text-center ">¡Bienvenido a la evaluación de Power Point!</h4>
                    <br></br>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2"><img src={Powerpoint} className="..." alt="..." /></div>
                            <div className="col-md-auto"><p className="text-center card-title"><br></br>¡Hola!<br></br>
                            Mi nombre es Power Point, o tambien me llaman <br></br> Diapositivas, aqui evaluaremos<br></br> tus conocimientos de está <br></br>herramienta ofimatica <br></br>¡ Diviertete!</p></div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-7">
                        <div className="container ">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center  ">
                                    <div className="card w-50 text-center card border-danger mb-3">
                                        <div className="card-body ">
                                            <h5 className="card-title text-danger">Pregunta N°1</h5>
                                            <p className="card-text">¿Power Point es un prograna diseñado para hacer presentaciones?</p>
                                            <a href="#" className="btn btn-outline-success">Verdadero</a>
                                            <a href="#" className="btn btn-outline-danger">Falso</a>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://4.bp.blogspot.com/-6pwF-lQ3OrU/XBWcmQcYGWI/AAAAAAAAA2o/nxi7RbD4ysAQH_aIe_rOqau6xYPYTccDQCLcBGAs/s1600/pp.gif" class="h-65 w-50" alt="..." />
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
                                    <div className="card w-50 text-center card border-danger mb-3">
                                        <div className="card-body ">
                                            <h5 className="card-title text-primary">Pregunta N°2</h5>
                                            <p className="card-text">¿Como añado una nueva diapositiva?</p>
                                            <div className="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> Menú ARCHIVO
                                            </div>
                                            <div class="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option2" aria-label="..." /> Menú REVISAR
                                            </div>
                                            <div className="form-check">
                                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option3" aria-label="..." /> Menú INICIO-NUEVA DIAPOSTIVA
                                            </div>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://wideo.co/wp-content/uploads/2017/11/Gif-Presentation-mode.gif" class="h-65 w-50" alt="..." />
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
                                    <div className="card w-50 text-center card border-danger mb-3">
                                        <div className="card-body ">
                                            <h5 className="card-title text-primary">Pregunta N°3</h5>
                                            <p className="card-text">¿Para agragar una transión debo de dar clic en la ficha diseño?</p>
                                            <a href="#" className="btn btn-outline-success">Verdadero</a>
                                            <a href="#" className="btn btn-outline-danger">Falso</a>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://media.tenor.com/images/b86e84b7138cdbb20e42e86e161c2fdb/tenor.gif" className="h-65 w-50" alt="..." />
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
                                    <div className="card w-50 text-center card border-danger mb-3">
                                        <div className="card-body ">
                                            <h5 className="card-title text-primary">Pregunta N°4</h5>
                                            <p className="card-text">¿Cuál es la tecla que activa la presentacion?</p>
                                            <div className="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> La tecla de presentacion
                                            </div>
                                            <div class="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option2" aria-label="..." /> Vista de lectura
                                            </div>
                                            <div className="form-check">
                                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option3" aria-label="..." />  Clasificador
                                            </div>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://media1.tenor.com/images/9614339ec0eae1bcfdaa976f3b7b0cac/tenor.gif?itemid=14535347" className="h-65 w-50" alt="..." />
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
                                    <div className="card w-50 text-center card border-danger mb-3">
                                        <div className="card-body ">
                                            <h5 className="card-title text-primary">Pregunta N°5</h5>
                                            <p className="card-text">¿En Power Point, podemos personalizar nuestra presentación?</p>
                                            <a href="#" className="btn btn-outline-success">Verdadero</a>
                                            <a href="#" className="btn btn-outline-danger">Falso</a>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://atrevete.academy/blog/wp-content/uploads/2020/03/giphy-3.gif" className="h-65 w-50" alt="..." />
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
                                    <div className="card w-50 text-center card border-danger mb-3">
                                        <div className="card-body ">
                                            <h5 className="card-title text-primary">Pregunta N°6</h5>
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
                    <div className="col col-lg-7">
                        <div className="container">
                            <div className="col-md-auto ">
                                <div className=" card-deck row justify-content-md-center ">
                                    <div className="card w-50 text-center card border-danger mb-3">
                                        <div className="card-body ">
                                            <h5 className="card-title text-primary">Pregunta N°7</h5>
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
export default PowerPoint;

