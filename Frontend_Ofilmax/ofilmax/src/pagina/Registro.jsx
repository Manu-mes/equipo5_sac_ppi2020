import React from 'react';
import Logo from '../imagenes/Logo.png';
import { Link } from 'react-router-dom';


class Registro extends React.Component {
  render() {
    return (
      <div className="container vh-100  mt-4">
        <div className="row container vh-100  mt-4">
          <div className="col"></div>
          <div className="col-6 container vh-100  mt-4 text-center">
            <img src={Logo} className="rounded" alt="" width="170" height="160" />
            <h5 className="text-center mt-4">Regístrate</h5>
            <br />
            <form >
              <div className="form-group">
                <label className="inputEmail">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="inputEmail"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Creá tu Contraseña</label>
                <input
                  type="password"
                  name="contrasena"
                  id="inputPassword"
                  className="form-control"
                  required
                />
                <small id="passwordHelpInline" class="text-muted">
                  8-20 caracteres</small>
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
              <Link to="/Rol" button className=" btn btn-orange btn btn-info btn-block" type="submit">
                <strong>Registrarme</strong>
              </Link>
            </form>
            <br />
            <h6>¿Ya tienes una cuenta?  <Link to="/Inicio" button className=" btn btn-orange" type="submit">
              <strong>Inicia Sesión</strong>
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