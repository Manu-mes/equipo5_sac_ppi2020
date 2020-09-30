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
                <div className="container text-center">
                <div className="card " >
                    <img src="https://lh6.googleusercontent.com/rt53oXjeawqI6mpaIezKcy3DFcy2Dp-PIHl6sAopmrispAmvYn5GedeQn7L6klGNO4fbqdcSHg=w1280" className="rounded" alt="" width="250" height="250" />
                    <div className="card-body">
                        <h5 className="card-title">Bienvenidos a Ofilamax</h5>
                        <p className="card-text">Aquí evaluaremos tus conocimientos sobre las herramientas Ofilmaticas,Word, PowerPoint y Excel</p>
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
