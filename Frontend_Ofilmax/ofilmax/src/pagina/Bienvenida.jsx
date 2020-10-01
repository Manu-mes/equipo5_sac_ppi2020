import React from 'react';
import { Link } from 'react-router-dom';
import Navegacion from '../componentes/Navegacion';

class Bienvenida extends React.Component {
    render() {
        return (
            <div>
                <Navegacion />
                <br></br>
                <br></br>
                <div className="container">
                <div className="card text-center " >
                    <img src="https://lh5.googleusercontent.com/-qiQnVrnubNKsI5NJbUzcMwHMdj1cRVdHYulLaVH3iA3EjGrqPQ_yZk1Lb1dp-uzIxQg2paFGg=w1280" className="rounded col-md-2 offset-md-5" alt="" width="250" height="250"/>
                    <div className="card-body">
                        <h5 className="card-title">¡Bienvenidos a Ofilmax!</h5>
                        <p className="card-text">Aquí evaluaremos tus conocimientos sobre las herramientas Ofimaticas,Word, PowerPoint y Excel.</p>
                        <p className="card-text">En la parte superior encontraras la barra de navegación, con los servicios disponibles <br></br> según el Rol que elegiste en tu registro.</p>
                        <Link to="/" button className=" btn btn-orange btn btn-info btn-block" type="submit">
                            <strong>Siguiente</strong>
                        </Link>
                    </div>
                </div>
            </div>
            </div>

        );
    }
}

export default Bienvenida;
