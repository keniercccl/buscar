import React, { Component } from 'react';

class Buscador extends Component {

    state = {termino : ''}

    consultarApi = () => {
        const url = `https://pixabay.com/api/?key=15803042-7eea46a8031b0fc652b469534&q=${this.state.termino}`
    }

    datosBusqueda = (termino) =>{
        this.setState({
            termino: this.busquedaRef.current.value
        }, ()=>{
            this.consultarApi();
        })
    }
    
    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        const termino = this.busquedaRef.current.value; //tomar valor de input
        this.props.datosBusqueda(termino) //lo envia por props al comp padre
    }

    render(){
        return(
            <form>
                <div className="row">
                    
                        <div className="form-group col-md-8">
                            <input className="form-control"  type="text" placeholder="Buscar tu imagen" />
                        </div>

                        <div className="form-group col-md-4">
                            <button ref={this.busquedaRef} onClick={this.datosBusqueda} 
                            type="button" className="btn btn-primary disabled">Buscar</button>
                        </div>
                     {this.state.termino}
                </div>
            </form>
        );
    }
}

export default Buscador;