import React from 'react';
import Buscador from './componentes/Buscador'

import './App.css';

function App() {

 const datosBusqueda = (termino) => {
   console.log(termino);
    }
  
  return (
    <header className="App-header">
        <div className="jumbotron">
            
          <p className="lead text-center">Buscador de imagenes</p>
          <Buscador 
            datosBusqueda = {datosBusqueda}
          />
        </div>        
    </header>
  );
}

export default App;
