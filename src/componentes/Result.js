import React, { Component } from 'react';
import Images from '../componentes/Images'
import Paginacion from './Paginacion';

class Result extends Component {

    mostrarImage = () => {
        const imagenes = this.props.imagenes;
        if (imagenes.leght ===0) return null;
        console.log(imagenes);
    return (
        <React.Fragment>
            <div className="col-12 p-5 row">
                {imagenes.map(imagen => (
                    <Images
                    key = {imagen.id}
                    imagen ={imagen} />
                ) ) }
            </div>

            <div className="col-12 p-5 row ">
                <Paginacion
                    paginaAnterior = {this.paginaAnterior}
                    paginaSiguientes = {this.paginaSiguientes}
                />
            </div>
        </React.Fragment>
    )
    }
       
    render(){
        return(
            <React.Fragment>
                {this.mostrarImage()}
            
            </React.Fragment>
        );
    }
}

export default Result;