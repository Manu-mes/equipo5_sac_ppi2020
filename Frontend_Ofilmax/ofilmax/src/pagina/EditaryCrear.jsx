import React from 'react';
import Navegacion2 from '../componentes/Navegacion2';

class EditaryCrear extends React.Component {
    render() {
        return (
            <div>
                <Navegacion2 />
                <br></br>
                <br></br>
                <div className="container">
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Editar y Crear Evaluaciones</h5>
                            </div>
                            <p class="mb-1">Aquí podras agregar preguntas a las respectivas Evaluaciones (Word, PowerPoint y Excel) para que puedas personalizarlas a tu gusto y poder evaluar temas más concretos a tus estudiantes.
                            </p>
                        </a>
                        <br></br>
                        <br></br>
                        <a href="#" class="list-group-item list-group-item-action card border-primary">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1 text-primary">Word</h5>
                                <br></br>
                                <br></br>
                                <div className="container">
                                    <form class="was-validated">
                                        <br></br>
                                        <br></br>
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
                        </a>
                        <br></br>
                        <br></br>
                        <a href="#" class="list-group-item list-group-item-action card border-danger">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1 text-danger">PowerPoint</h5>
                                <div className="container">
                                    <form class="was-validated">
                                        <br></br>
                                        <br></br>
                                        <div class="mb-3">
                                            <label for="validationTextarea">Agrega una Nueva Pregunta</label>
                                            <textarea class="form-control is-invalid" id="validationTextarea" placeholder="..." required></textarea>
                                            <div class="invalid-feedback">
                                                100 caracteres disponibles</div>
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

                        </a>
                        <br></br>
                        <br></br>
                        <a href="#" class="list-group-item list-group-item-action card border-success">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1 text-success">Excel</h5>
                                <div className="container">
                                    <form class="was-validated">
                                        <br></br>
                                        <br></br>
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
                        </a>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>

        );
    }
}

export default EditaryCrear;