import React from 'react';
import { Link } from 'react-router-dom';

class Bienvenida extends React.Component {
    render() {
        return (
            <div className="card" style="width: 18rem;">
  <img src="https://lh6.googleusercontent.com/rt53oXjeawqI6mpaIezKcy3DFcy2Dp-PIHl6sAopmrispAmvYn5GedeQn7L6klGNO4fbqdcSHg=w1280" className="rounded" alt="" width= "170" height="160"/>
  <div className="card-body">
    <h5 className="card-title">Bienvenidos a Ofilama</h5>
    <p className="card-text">Aquí evaluaremos tus conocimientos sobre las herramientas Ofilmaticas,Word, PowerPoint y Excel</p>
    <a href="#" class="btn btn-primary">Siguiente</a>
  </div>
</div>

        );
    }
}

export default Bienvenida;
