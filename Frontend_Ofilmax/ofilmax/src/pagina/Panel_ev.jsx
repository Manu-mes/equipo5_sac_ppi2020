import React from 'react';
import { Link } from 'react-router-dom';
import Navegacion from '../componentes/Navegacion';



class Panel_ev extends React.Component {
    render() {
        return (
            <div>
                <Navegacion />
                <br></br>
                <br></br>
                <h5 className="text-center">¡Elige una Evaluación!</h5>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="card-deck row justify-content-md-center">
                        <div className="col-md-auto">
                            <div className="card-body">
                                <h5 className="card-title text-center">Word</h5>
                                <Link to="" button type="button" class="btn btn-outline-info" ><img src="https://lh3.googleusercontent.com/ScAtTXCkC4ebF46l56s5w0DcokZn7eyXn-hY87li44vfcdl9e4jcv3--X8ZYsJacIfnCvkxhbKfJOpO4D6KkHqtPxDmh5Q53KQzDCvMIwhVQpsjIGsk=w1280" class="card-img-top " alt="..." /></Link>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <div className="card-body">
                                <h5 className="card-title text-center">Excel</h5>
                                <Link to="" button type="button" class="btn btn-outline-success" ><img src="https://lh6.googleusercontent.com/t1h-TvmykITR0dS_JwoGOvM0yn5QIT_QrtvGIN_HDWAD3urfC4h8037KkRgViaBz58ylLD0zXyob1IOpe3DDJ0qk0zLexJBKHxxSiJEARvY26CmwAw0=w1280" class="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <div className="card-body">
                                <h5 className="card-title text-center">PowerPoint</h5>
                                <Link to="" button type="button" class="btn btn-outline-danger" ><img src="https://lh4.googleusercontent.com/9kGuY6MJNLMr4QHJoyV9iFtpVya1CautZIY6mxUH4hyxUN64eXWCUEv-gZlAg77-xkRMTmY0x7y8MINfUa04VdF-AV1-bjjipFYCsgi6WmBiiXPVcsc=w1280" class="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Panel_ev;