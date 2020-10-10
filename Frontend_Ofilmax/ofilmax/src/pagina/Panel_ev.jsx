import React from 'react';
import { Link } from 'react-router-dom';
import Word from '../imagenes/Word.png';
import Excel from '../imagenes/Excel.png';
import Powerpoint from '../imagenes/Powerpoint.png';
import Navegacion from '../componentes/Navegacion';



class Panel_ev extends React.Component {
    render() {
        return (
            <div>
                <Navegacion />
                <br></br>
                <br></br>
                    <h4 className="text-center">¡Elige una Evaluación!</h4>
                    <br></br>
                    <br></br>
                    <div className="container">
                        <div className="card-deck row justify-content-md-center">
                            <div className="col-md-auto">
                                <div className="card-body">
                                    <h4 className="text-center">Word</h4>
                                <Link to ="/Word" button type="button" class="btn btn-outline-info" ><img src={Word} class="card-img-top " alt="..." /></Link>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <div className="card-body">
                                    <h4 className="text-center">Excel</h4>
                                <Link to ="" button type="button" class="btn btn-outline-success" ><img src={Excel} class="card-img-top" alt="..." /></Link>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <div className="card-body">
                                    <h4 className="text-center">PowerPoint</h4>
                                <Link to ="" button type="button" class="btn btn-outline-danger" ><img src={Powerpoint} class="card-img-top" alt="..." /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Panel_ev;
