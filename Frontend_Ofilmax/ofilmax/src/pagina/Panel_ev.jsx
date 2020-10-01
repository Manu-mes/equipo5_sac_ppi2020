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
                                <Link to="" button type="button" class="btn btn-outline-info" ><img src="https://lh4.googleusercontent.com/MiNOXnaSvwG3FmUcQYtX_v8QqBBSjrEbDtXppYmfs5k0GLRupNpnKbrFQbC3SfV_oyOTVRdc8ADE7S8jAL8IhEqfQxhiQAa4XZkymSZ2lhLnGfv-SL0=w1280" class="card-img-top " alt="..." /></Link>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <div className="card-body">
                                <h5 className="card-title text-center">Excel</h5>
                                <Link to="" button type="button" class="btn btn-outline-success" ><img src="https://lh5.googleusercontent.com/VaST_4FLS0DhOUzBgwMIvTQQBBcRJPVhc7p5kkLfgmpfuHYWKI8LRnn_fe5op4uGhq4OHE4tZwWo7rxKz_rZdFs4yrzWdexXtJu5P0yJKc6slQQhowI=w1280" class="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <div className="card-body">
                                <h5 className="card-title text-center">PowerPoint</h5>
                                <Link to="" button type="button" class="btn btn-outline-danger" ><img src="" class="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Panel_ev;