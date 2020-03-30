import React from 'react';
import Buscador from './componentes/Buscador'

import './App.css';

function App() {

 const datosBusqueda = (termino) => {
   this.setState({

   }, () => {
     this.consultarApi();
   })
   console.log(termino);
    }
  
  return (
    <header className="App-header">
        <div className="jumbotron jumbotron-fluid">
           <div className="container">
           <p className="text-center">Buscador de imagenes</p>
            <Buscador 
              datosBusqueda = {datosBusqueda}
            />
             </div> 
        </div>   
         
    </header>
  );
}

export default App;
