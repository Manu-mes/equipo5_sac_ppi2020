import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Logo from '../imagenes/Logo.png';
// import '../src/index.css'

class Navegacion2 extends React.Component {
  render() {
    return (
      <div>
       <div>
       <Navbar bg="light" expand="lg">
       <div className="container">
  <Navbar.Brand href="#home">
   <img
        alt=""
        src={Logo}
        width="33"
        height="35"
        className="d-inline-block align-top"
      />{' '} Ofilmax</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/PaginaInicial2">Inicio</Nav.Link>
      <Nav.Link href="/EditaryCrear">Editar y Crear</Nav.Link>
      <Nav.Link href="/Resultados_p">Resultados</Nav.Link>
      <Nav.Link href="/Bienvenida2">Bienvenida</Nav.Link>
    </Nav>
    
      <Button href="/Inicio" variant="light">Cerrar Sesión</Button>
  </Navbar.Collapse>
  </div>
</Navbar>
      </div>
      </div>
    );
  }
}

export default Navegacion2;