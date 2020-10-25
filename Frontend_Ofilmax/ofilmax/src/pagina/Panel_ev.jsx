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
            <div className="container text-center">
            <div className = "row">
            <div className = "col-md-12">
            <h4>¡Elige una Evaluación!</h4>
            <br/>
            <br/>
            </div>
            </div>
            <div className = "row">
            <div className = "col-md-4">
            <h4>Word</h4>
            <Link to ="/Word" button  type="button" className="btn btn-outline-info" ><img src={Word} className="card-img-top" alt="..." /></Link>
            <br/>
            <br/>
            <br/>
            </div>
            <div className = "col-md-4">
            <h4>Excel</h4>
            <Link to ="/Excel" button  type="button" className="btn btn-outline-success" ><img src={Excel} className="card-img-top" alt="..." /></Link>
            <br/>
            <br/>
            <br/>
            </div>
            <div className = "col-md-4">
            <h4>PowerPoint</h4>
            <Link to ="/PowerPoint" button  type="button" className="btn btn-outline-danger" ><img src={Powerpoint} className="card-img-top" alt="..." /></Link>
            <br/>
            <br/>
            <br/>
            </div>
            </div>
            </div>
            </div>
        );
    }
}
export default Panel_ev;
