import React from 'react';
import { Link } from 'react-router-dom';
import Navegacion from '../componentes/Navegacion';
import Logo from '../imagenes/Logo.png'


class confirmacion extends React.Component {
    render() {
        return (
            <div>
                <Navegacion />
                <br></br>
                <br></br>
                <div className="container">
                <div className="card text-center " >
                    <img src={Logo} 
                    className="rounded col-md-2 offset-md-5" 
                    alt="" width="250" height="250"/>
                    <div className="card-body">
                        <h5 className="card-title">¡Genial!</h5>
                        <p className="card-text">Completaste la evaluación correctamente y ya fue enviada a tu profesor.</p>
                        <p className="card-text">En la parte superior encontraras la barra de navegación, da Click en "Resultados" para ver el puntaje obtenido en cada una de las evaluaciones <br></br></p>
                        <br></br>
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2"> <Link to="/" button className=" btn btn-orange btn btn-info btn-block" type="submit">
                            <strong>Continuar</strong>
                        </Link></div>
                            <div className="col-md-auto"> <Link to="/Panel_ev" button className=" btn btn-orange btn btn-info btn-block" type="submit">
                            <strong>Realizar otra evaluación</strong>
                        </Link></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default confirmacion;