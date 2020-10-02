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
                                <Link to ="" button type="button" class="btn btn-outline-info" ><img src="https://lh3.googleusercontent.com/IO0WOwN-KxtJ_NVZ8Gj0RoMf4_bQEINwKIC2og-OC3tjhyUuUxuBiMeEftZ3fXCl2Cp0vglfp9xOjqn0tjdnBTvPawa4gHPMTakqziY1dPB-CJ3ZYmc=w1280" class="card-img-top " alt="..." /></Link>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Excel</h5>
                                <Link to ="" button type="button" class="btn btn-outline-success" ><img src="https://lh3.googleusercontent.com/h9wFPX4PgoCqKABrcC0W1J9XmPdb7vzsc9cBAcdDrw05a1F0q-plyIPn9erK1kHiTQcB8CFAjG6COZznOYUyEOlORCFlRRgAukDJDMgIh37mNzgE2AM=w1280" class="card-img-top" alt="..." /></Link>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <div className="card-body">
                                    <h5 className="card-title text-center">PowerPoint</h5>
                                <Link to ="" button type="button" class="btn btn-outline-danger" ><img src="" class="card-img-top" alt="..." /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Panel_ev;
