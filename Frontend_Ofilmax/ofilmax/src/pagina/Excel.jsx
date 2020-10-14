import React from 'react';
import { Link } from 'react-router-dom';
import Flecha from '../imagenes/Flecha.png';
import Excel from '../imagenes/Excel.png'
import Navegacion from '../componentes/Navegacion';



class Excel extends React.Component {
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
                            <div className="col col-lg-2"><img src={Powerpoint} className="..." alt="..." /></div>
                            <div className="col-md-auto"><p className="text-center card-title"><br></br>¡Hola!<br></br>
                            Mi nombre es Excel, o tambien me llaman <br></br> Hoja de Calculo, aqui evaluaremos<br></br> tus conocimientos de está <br></br>herramienta ofimatica <br></br>¡ Diviertete!</p></div>
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
                                            <h5 className="card-title text-danger">Pregunta N°2</h5>
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
                                            <h5 className="card-title text-danger">Pregunta N°3</h5>
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
                                            <h5 className="card-title text-danger">Pregunta N°4</h5>
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
                                            <h5 className="card-title text-danger">Pregunta N°5</h5>
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
                                            <h5 className="card-title text-danger">Pregunta N°6</h5>
                                            <p className="card-text">¿Como se agrega audio a una presentación?</p>
                                            <div className="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> Menú INSERTAR-PELÍCULAS Y SONIDOS
                                            </div>
                                            <div class="form-check">
                                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option2" aria-label="..." /> Menú REVISAR
                                            </div>
                                            <div className="form-check">
                                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option3" aria-label="..." />  Menú ARCHIVO
                                            </div>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1530516099/content-items/002/408/710/LOCUCION_FONDO_720-original.gif?1530516099" className="h-65 w-50" alt="..." />
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
                                            <h5 className="card-title text-danger">Pregunta N°7</h5>
                                            <p className="card-text">¿Es posible colar la cantidad de diapositivas que necesitamos antes de colocar el contenido en cada una?</p>
                                            <a href="#" className="btn btn-outline-success">Verdadero</a>
                                            <a href="#" className="btn btn-outline-danger">Falso</a>
                                        </div>
                                        <div className="col-md-auto card-img-ride ">
                                            <img src="https://lh3.googleusercontent.com/proxy/34rN5J2R8mXm3zplAHkIgrpNSqRptobFf7sos3a9bNGr8erWZ4aCqHMmevq0K7dtt06OZIsYWPT2GTevb9JltcWL4iYDMfk0Y4ayU5z0ZqeRAO1u0gemS1tCbnUQMYKdxek" className="h-65 w-50" alt="..." />
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
export default Excel;