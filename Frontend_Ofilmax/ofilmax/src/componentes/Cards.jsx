import React from 'react'
import Word from '../imagenes/Word.png';
import Excel from '../imagenes/Excel.png';
import Powerpoint from '../imagenes/Powerpoint.png';
// import '../src/index.css'


class Cards extends React.Component {
  render() {
    return (
      <div>
        <div className='Cards'>
          <div className="card-deck">
            <div class="card">
              <img src="https://anthoncode.com/wp-content/uploads/2020/02/logo-word-office.png?v=1581371183" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Word</h5>
                <p className="card-text">Microsoft Word es un procesador de textos que forma parte de un paquete llamado Office. Es en la actualidad, la solución ofimática más utilizada a nivel administrativo junto con otra herramienta del paquete Office: la hoja de cálculo Microsoft Excel.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted"></small>
              </div>
            </div>
            <div className="card">
              <img src="https://anthoncode.com/wp-content/uploads/2020/02/logo-excel-office.png?v=1581371224" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Excel</h5>
                <p className="card-text">Excel  un programa informático desarrollado y distribuido por Microsoft Corp. Se trata de un software que permite realizar tareas contables y financieras gracias a sus funciones, desarrolladas específicamente para ayudar a crear y trabajar con hojas de cálculo.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted"></small>
              </div>
            </div>
            <div className="card">
              <img src="https://anthoncode.com/wp-content/uploads/2020/02/logo-power-point.png" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">PowerPoint</h5>
                <p className="card-text">Es un programa diseñado para hacer presentaciones con texto esquematizado, así como presentaciones en diapositivas, animaciones de texto e imágenes prediseñadas o importadas desde imágenes de la computadora. Se le pueden aplicar distintos diseños de fuente, plantilla y dibujos.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted"></small>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}
export default Cards;