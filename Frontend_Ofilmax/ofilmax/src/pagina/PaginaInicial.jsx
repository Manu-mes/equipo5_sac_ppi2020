import React from 'react';
import Navegacion from '../componentes/Navegacion';
import Header from '../componentes/Header';
import Cards from '../componentes/Cards';
import Footer from '../componentes/Footer';

class PaginaInicial extends React.Component {
  render() {
    return (
      <div>
        <Navegacion />
        <br></br>
        <br></br>
        <div className = "container">
          <Header />
        </div>
        <br></br>
        <div className = "container">
          <Cards />
        </div>
        <Footer />
      </div>
    );
  }
}
export default PaginaInicial;

