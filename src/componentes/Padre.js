import React, { Component } from 'react';
import Buscador from '../componentes/Buscador'
import Result from '../componentes/Result'

class Padre extends Component {

        state = {
            termino : '',
            imagenes : [],
            pagina : 0
        }

        paginaAnterior = () => {
            console.log('anterior...');
        }

        paginaSiguientes= () => {
            //leer el state
            let pagina = this.state.pagina;
            //Sumar uno a la pagina actual
            pagina+=1;
            //Agregar el cambio al state
            this.setState({pagina});
            console.log(pagina);
        }

        consusultarApi = () => {
            const pal = this.state.termino;
            const url = `https://pixabay.com/api/?key=15803042-7eea46a8031b0fc652b469534&q=${pal}`
            fetch (url)
            .then(respuesta => respuesta.json())
            .then(resultado => this.setState({imagenes : resultado.hits}))
        }

        datosBusqueda = (termino) => {
            this.setState({
                termino : termino,
                pagina : 1
            }, () => {
                this.consusultarApi();
            })
          }

    render(){
        return(
        <div className="app container"> 
            <div className="jumbotron">
                <p className="text-dark">Buscador de imagenes</p>
                    <Buscador
                        datosBusqueda={this.datosBusqueda}
                    />
            </div> 
            <div className="row justify-content-center">
                <Result
                    imagenes = {this.state.imagenes}
                    paginaAnterior = {this.paginaAnterior}
                    paginaSiguientes = {this.paginaSiguientes}
                />
            </div>
        </div>
        );
    }
}

export default Padre;