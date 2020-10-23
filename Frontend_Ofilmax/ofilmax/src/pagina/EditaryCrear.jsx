import React from 'react';
import Navegacion2 from '../componentes/Navegacion2';
import Footer from '../componentes/Footer';

class EditaryCrear extends React.Component {
    render() {
        return (
            <div>
                <Navegacion2 />
                <br></br>
                <br></br>
                <div className="container">
                    <div class="list-group">
                        <div class="p-3 mb-2 bg-white text-dark ">
                                <h5 class="mb-1">Editar y Crear Evaluaciones</h5>
                            <p class="mb-1">Aquí podras agregar preguntas a las respectivas Evaluaciones (Word, PowerPoint y Excel) para que puedas personalizarlas a tu gusto y poder evaluar temas más concretos a tus estudiantes.
                            </p>
                        </div>
                        <br></br>
                        <br></br>
                        <div class="p-3 mb-2 bg-white text-dark card border-primary">
                                <h5 class="mb-1 text-primary text-center">Word</h5>
                                <div className="container">
                                    <form class="was-validated">
                                    <br/>
                                        <div class="mb-3">
                                            <label for="validationTextarea">Agrega una Nueva Pregunta</label>
                                            <textarea class="form-control is-invalid" id="validationTextarea" placeholder="..." required></textarea>
                                            <div class="invalid-feedback">
                                                1000 caracteres disponibles</div>
                                        </div>
                                        <label for="validationTextarea">Agrega y Selecciona la Respuesta correcta</label>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customControlValidation1" required />
                                            <label class="custom-control-label" for="customControlValidation1">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="..." required></textarea>
                                            </label>
                                            <br></br>
                                            <br></br>
                                            <label class="custom-control-label" for="customControlValidation1">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="..." required></textarea>
                                            </label>
                                            <br></br>
                                            <br></br>
                                            <label class="custom-control-label" for="customControlValidation1">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="..." required></textarea>
                                            </label>
                                        </div>
                                        <button class="btn btn-primary border-0" type="submit">Subir</button>
                                    </form>
                                    <br></br>
                                    <br></br>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div class="p-3 mb-2 bg-white text-dark card border-danger">
                                <h5 class="mb-1 text-danger text-center">PowerPoint</h5>
                                <div className="container">
                                    <form class="was-validated">
                                        <br></br>
                                        <div class="mb-3">
                                            <label for="validationTextarea">Agrega una Nueva Pregunta</label>
                                            <textarea class="form-control is-invalid" id="validationTextarea2" placeholder="..." required></textarea>
                                            <div class="invalid-feedback">
                                                1000 caracteres disponibles</div>
                                        </div>
                                        <label for="validationTextarea">Agrega y Selecciona la Respuesta correcta</label>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customControlValidation2" required />
                                            <label class="custom-control-label" for="customControlValidation2">
                                            <textarea class="form-control is-invalid " id="validationTextarea2" placeholder="..." required></textarea>
                                            </label>
                                            <br></br>
                                            <br></br>
                                            <label class="custom-control-label" for="customControlValidation2">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="..." required></textarea>
                                            </label>
                                            <br></br>
                                            <br></br>
                                            <label class="custom-control-label" for="customControlValidation2">
                                            <textarea class="form-control is-invalid " id="validationTextarea2" placeholder="..." required></textarea>
                                            </label>
                                        </div>
                                        <button class="btn btn-primary border-0" type="submit">Subir</button>
                                    </form>
                                    <br></br>
                                    <br></br>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div class="p-3 mb-2 bg-white text-dark card border-success">
                                <h5 class="mb-1 text-center text-success">Excel</h5>
                                <div className="container">
                                    <form class="was-validated">
                                        <br></br>
                                        <div class="mb-3">
                                            <label for="validationTextarea">Agrega una Nueva Pregunta</label>
                                            <textarea class="form-control is-invalid" id="validationTextarea3" placeholder="..." required></textarea>
                                            <div class="invalid-feedback">
                                                1000 caracteres disponibles</div>
                                        </div>
                                        <label for="validationTextarea">Agrega y Selecciona la Respuesta correcta</label>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customControlValidation3" required />
                                            <label class="custom-control-label" for="customControlValidation3">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="..." required></textarea>
                                            </label>
                                            <br></br>
                                            <br></br>
                                            <label class="custom-control-label" for="customControlValidation3">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="..." required></textarea>
                                            </label>
                                            <br></br>
                                            <br></br>
                                            <label class="custom-control-label" for="customControlValidation1">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="..." required></textarea>
                                            </label>
                                        </div>
                                        <button class="btn btn-primary border-0" type="submit">Subir</button>
                                    </form>
                                    <br></br>
                                    <br></br>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default EditaryCrear;