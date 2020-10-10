import React from 'react';
import { Link } from 'react-router-dom';
import Flecha from '../imagenes/Flecha.png';
import Word from '../imagenes/Word.png'
import Navegacion from '../componentes/Navegacion';



class Word_ev extends React.Component {
    render() {
        return (
            <div>
                <Navegacion />
                <div>
                    <br></br>
                    <Link to="/Panel_ev" class="btn"><img src={Flecha} class="" alt="..." /></Link>
                    <br></br>
                    <h4 className="text-center ">¡Bienvenido a la evaluación de Word!</h4>
                    <br></br>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2"><img src={Word} className="..." alt="..." /></div>
                            <div className="col-md-auto"><p className="text-center card-title"><br></br>¡Hola!<br></br>
                            Mi nombre es Word, o tmabien me llaman <br></br> Procesador de Texto aqui evaluaremos<br></br> tus conocimientos de esta <br></br>herramienta ofimatica <br></br>¡ Diviertete!</p></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Word_ev;
