import React from 'react';
import Navegacion2 from '../componentes/Navegacion2';
import Footer from '../componentes/Footer';

class Resultados_p extends React.Component {
    render() {
        return (
            <div>
                <Navegacion2 />
                <br/>
                <br/>
                <div className="container ">
                    <div className="p-3 mb-2 bg-white text-dark">
                            <div class="d-flex w-100 justify-content-between ">
                                <h5 class="mb-1">Evaluaciones Realizadas</h5>
                            </div>
                            <p class="mb-1">Aqui encontraras los puntajes obtenidos de tus estudiantes en cada una de las evaluaciones realizadas (Word, PowerPoint y Excel).
                            Los puntajes estan valorados de la siguiente forma:
                            <ul>
                                <li>De 1 a 2 preguntas correctas = BAJO</li>
                                <li>De 3 a 4 preguntas correctas = MEDIO</li>
                                <li>De 5 a 7 preguntas correctas = ALTO</li></ul></p>
                                </div>
                        <br></br>
                                <br></br>
                        <div class="p-3 mb-2 bg-white text-dark card border-primary">
                                <h5 class="text-center text-primary">Word</h5>
                                <br/>
                                <table class="table table-white">
                        <thead>
                            <tr>
                                <th scope="col">Estudiante ID</th>
                                <th scope="col">Evaluación</th>
                                <th scope="col">Puntaje</th>
                                <th scope="col">Ver mas...</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1. Santiago Arias</th>
                                <td>Word</td>
                                <td>ALTO</td>
                                <td><button type="button" class="btn btn-link">Ver</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2. Pablo Tobon</th>
                                <td>Word</td>
                                <td>MEDIO</td>
                                <td><button type="button" class="btn btn-link">Ver</button></td>
                            </tr>
                            <tr>
                                <th scope="row">3. Camila Sanchez</th>
                                <td>Word</td>
                                <td>BAJO</td>
                                <td><button type="button" class="btn btn-link">Ver</button></td>
                            </tr>
                        </tbody>
                    </table>
                        </div>
                        <br></br>
                            <br></br>
                        <div class="p-3 mb-2 bg-white text-dark card border-danger">
                                <h5 class="mb-1 text-danger text-center">PowerPoint</h5>
                                <br/>
                                <table class="table table-white">
                        <thead>
                            <tr>
                                <th scope="col">Estudiante ID</th>
                                <th scope="col">Evaluación</th>
                                <th scope="col">Puntaje</th>
                                <th scope="col">Ver mas...</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1. Santiago Arias</th>
                                <td>PowerPoint</td>
                                <td>MEDIO</td>
                                <td><button type="button" class="btn btn-link">Ver</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2. Pablo Tobon</th>
                                <td>PowerPoint</td>
                                <td>BAJO</td>
                                <td><button type="button" class="btn btn-link">Ver</button></td>
                            </tr>
                            <tr>
                                <th scope="row">3. Camila Sanchez</th>
                                <td>PowerPoint</td>
                                <td>BAJO</td>
                                <td><button type="button" class="btn btn-link">Ver</button></td>
                            </tr>
                        </tbody>
                    </table>
                            
                        </div>
                        <br></br>
                            <br></br>
                        <div class="p-3 mb-2 bg-white text-dark card border-success">
                                <h5 class="mb-1 text-success text-center">Excel</h5>
                                <br/>
                                <table class="table table-white">
                        <thead>
                            <tr>
                                <th scope="col">Estudiante ID</th>
                                <th scope="col">Evaluación</th>
                                <th scope="col">Puntaje</th>
                                <th scope="col">Ver mas...</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1. Santiago Arias </th>
                                <td>Excel</td>
                                <td>MEDIO</td>
                                <td><button type="button" class="btn btn-link">Ver</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2. Pablo Tobon</th>
                                <td>Excel</td>
                                <td>BAJO</td>
                                <td><button type="button" class="btn btn-link">Ver</button></td>
                            </tr>
                            <tr>
                                <th scope="row">3. Camila Sanchez</th>
                                <td>Excel</td>
                                <td>ALTO</td>
                                <td><button type="button" class="btn btn-link">Ver</button></td>
                            </tr>
                        </tbody>
                    </table>
                                </div>
                            </div>
                            <br/>
                            <Footer/>                        </div>
        );
    }
}

export default Resultados_p;
