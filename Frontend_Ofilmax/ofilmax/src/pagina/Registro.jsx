import React from 'react';
import Logo from '../imagenes/Logo.png';
import {Link} from 'react-router-dom';


class Registro extends React.Component {
    render() {
        return (
            <div className="container vh-100  mt-4">
            <div className="row container vh-100  mt-4">
              <div className="col"></div>
              <div className="col-6 container vh-100  mt-4 text-center">
              <img src={Logo} className="rounded" alt="" width= "170" height="160"/>
                <h5 className="text-center mt-4">Registrate</h5>
                <br />
                <form >
                  <div className="form-group">
                    <label className="inputEmail">Correo Electronico</label>
                    <input
                      type="email"
                      name="email"
                      id="inputEmail"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Crea una Contraseña</label>
                    <input
                      type="password"
                      name="contrasena"
                      id="inputPassword"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirma tu Contraseña</label>
                    <input
                      type="password"
                      name="contrasena"
                      id="inputPassword"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                      <label for="exampleFormControlSelect1">Elige tu Rol</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                          <option>Estudiante</option>
                          <option>Docente</option>
                          </select>
                </div>
                  <Link to="/Bienvenida" button className=" btn btn-orange btn btn-info btn-block" type="submit">
                    <strong>Registrarme</strong>
                  </Link>
                </form>
                <br />
                <h6>¿Ya tienes una cuenta?  <Link to="/Inicio" button className=" btn btn-orange" type="submit">
                    <strong>Inicia Sesion</strong>
                  </Link></h6>
                <br />
              </div>
              <div className="col"></div>
            </div>
          </div>
        );
    }
}
export default Registro;