import React from 'react'
import { Link } from 'react-router-dom';
// import '../src/index.css'

class Navegacion extends React.Component {
  render() {
    return (
      <div>
        <div className="Navbar">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
              <a className="navbar-brand" href="#">
                <img
                  alt=""
                  src="https://lh5.googleusercontent.com/TU9XRhF2VGXOk6P7P0Yf4rNM1qTFZPhhoK0y10gy3OBI1zCWB1ocRsS6vFViON3PZPiaBpIvYw=w1280"
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                /> &nbsp;
            Ofilmax</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Inicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Evaluaciones</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Resultados</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Bienvenida</a>
                  </li>
                </ul>
                <a className="nav-link btn btn-light" href="#">Nosotros</a>
                <Link to="/Inicio" className="nav-link btn btn-light" href="#">Salir</Link>
                <button className=" btn btn-light navbar-button">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navegacion;