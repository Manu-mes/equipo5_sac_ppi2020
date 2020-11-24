import React from 'react';
import Logo from '../imagenes/Logo.png';
import {API_BACKEND_OFILMAX} from './../constantes'
import {Link} from 'react-router-dom';

class Inicio extends React.Component {
   constructor(){
        super()
        console.log(API_BACKEND_OFILMAX)
        this.state = {
            cargando : false,
            Correo : null,
            Contrasena : null
        }
    }
      cambioEntradaCampo = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });        
    }

    iniciarsesion= (event) =>{
      if(document.querySelector("#frmlogin").reportValidity()){
        fetch(`${API_BACKEND_OFILMAX}api/estudiantes/Inicio`,{
          method : "POST",
          body : JSON.stringify({
            "Contrasena" : this.state.Contrasena,
	          "Correo" : this.state.Correo
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
            .then(respuesta => respuesta.json())
            .then(data => {
              if(data.login){
                  this.props.history.push('/PaginaInicial')
              }else{
                alert("Error iniciando sesión")
              }
                /*if(usuario.length > 0){
                    usuario = usuario[0]
                    const token=(length)=>(this.rand()+this.rand()+this.rand()+this.rand()).substr(0,length);
                    localStorage.setItem("usuario", JSON.stringify({
                            idUsuario : usuario.id,
                            nombreUsuario : usuario.correo,
                            nombre : usuario.nombres,
                            correo : usuario.correo,
                            apellido : usuario.apellidos,
                            token : token,
                            data : usuario
                        })
                    )
                    this.props.history.push('/inicio')
                }else{
                    NotificationManager.error('Error en el inicio de sesión', 'Error', 2000);
                }
                this.setState({ cargando: false })*/
            })

      }
    }
    render() {
        return (
            <div className="container vh-100  mt-4">
            <div className="row container vh-100  mt-4">
              <div className="col"></div>
              <div className="col-6 container vh-100  mt-4 text-center">
              <img src={Logo} className="rounded" alt="" width= "170" height="160"/>
                <h5 className="text-center mt-4">Inicia Sesión</h5>
                <br />
                <form id= "frmlogin">
                  <div className="form-group">
                    <label className="inputEmail">Correo Electrónico</label>
                    <input
                      type="email"
                      name="Correo"
                      id="inputEmail"
                      className="form-control"
                      onChange={this.cambioEntradaCampo}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Contraseña</label>
                    <input
                      type="password"
                      name="Contrasena"
                      id="inputPassword"
                      className="form-control"
                      onChange={this.cambioEntradaCampo}
                      required
                    />
                  </div>
                  <Link onClick={this.iniciarsesion} button className=" btn btn-orange btn btn-info btn-block" type="submit">
                    <strong>Iniciar Sesión</strong>
                  </Link>
                </form>
                <br />
                <h6>¿No tienes una cuenta? <Link to="/" button className=" btn btn-orange" type="submit">
                    <strong>Regístrate</strong>
                  </Link></h6>
                <h6>Olvidé mi Contraseña</h6>
                <br />
              </div>
              <div className="col"></div>
            </div>
          </div>
        );
      }
    }
      
export default Inicio;