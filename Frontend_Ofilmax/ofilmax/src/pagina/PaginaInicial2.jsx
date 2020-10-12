import React from 'react';
import Navegacion2 from '../componentes/Navegacion2'
import Header from '../componentes/Header'
import Cards from '../componentes/Cards'

class PaginaInicial2 extends React.Component {
  render() {
    return (
      <div>
        <Navegacion2 />
        <br></br>
        <br></br>
        <div className = "container">
          <Header />
        </div>
        <br></br>
        <div className = "container">
          <Cards />
        </div>
        
      </div>
    );
  }
}
export default PaginaInicial2;
