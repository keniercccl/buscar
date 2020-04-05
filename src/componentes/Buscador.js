import React, { Component } from 'react';

class Buscador extends Component {

        busquedaRef = React.createRef();

        handleSubmit = (e) => {
            e.preventDefault();
            const palabra = this.busquedaRef.current.value
            this.props.datosBusqueda(palabra); //lo envio al padre
        }

    render(){
        return(
            <form>

                <div className="row">
                        <div className="form-group col-md-8">
                            <input className="form-control" 
                            ref={this.busquedaRef}
                            type="text"
                            placeholder="Buscar tu imagen" />
                        </div>

                        <div className="form-group col-md-4">
                            <button type="button" 
                            onClick={this.handleSubmit}
                            className="btn btn-primary disabled">Buscar</button>
                        </div>
                </div>
            </form>
        );
    }
}

export default Buscador;