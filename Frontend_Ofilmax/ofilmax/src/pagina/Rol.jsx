import React from 'react';
import Logo from '../imagenes/Logo.png';
import { Link } from 'react-router-dom';


class Rol extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row container vh-100  mt-4">
                    <div className="col"></div>
                    <div className="col-6 container vh-100  mt-4 text-center">
                        <br></br>
                        <br></br>
                        <br></br>
                        <img src={Logo} className="rounded" alt="" width="170" height="160" />
                        <h5 className="text-center mt-4">Por último...</h5>
                        <br />
                        <form >
                            <div className="form-group">
                                <label for="exampleFormControlSelect1">Elige tu Rol</label>
                                <br></br>
                                <br></br>
                                <div className="row justify-content-md-center">
                                    <div className="col col-lg-5"> <Link to="/Bienvenida" button className=" btn btn-orange btn btn-info btn-block" type="submit">
                                        <strong>Estudiante</strong>
                                    </Link></div><br/>
                                    <br/>
                                    <div className="col-md-5"> <Link to="/Bienvenida2" button className=" btn btn-orange btn btn-info btn-block" type="submit">
                                        <strong>Docente</strong>
                                    </Link></div>
                                </div>
                            </div>
                        </form>
                        <br />
                        <h6>¿Ya tienes una cuenta?  <Link to="/Inicio" button className=" btn btn-orange" type="submit">
                            <strong>inicia Sesión</strong>
                        </Link></h6>
                        <br />
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        );
    }
}
export default Rol;