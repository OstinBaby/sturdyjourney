import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';


function App() {
  const [miestado, actualizarmiestado] = useState(0);
  // function comun y corriente 
  function hola(){

  }

  return (
    <div className="App"
     
      >

        <span>Mi numero: {miestado}</span>
        {/* single arrow function */}
        <span onClick={() => actualizarmiestado(miestado + 1)}>Incrementar</span>
        <span onClick={() => actualizarmiestado(miestado - 1)}>Descender</span>
        <span className="corebox_10 row" 
         style={{background:"red", justifyContent: "space-between", alignItems: "center"}}>
          <span>Menu</span>
          <span>Myshoppingsite</span>
          <span>Boton de Opciones</span>
        </span>
        <span className="corebox_10 row" 
         style={{background:"red", justifyContent: "space-around", alignItems: "center"}}>
          <span>Menu</span>
          <span>Myshoppingsite</span>
          <span>Boton de Opciones</span>
        </span>
        <span className="corebox_10 row" 
         style={{background:"red", justifyContent: "center", alignItems: "center"}}>
          <span>Menu</span>
          <span>Myshoppingsite</span>
          <span>Boton de Opciones</span>
        </span>

        <span className="corebox_10 col" 
         style={{background:"blue", justifyContent: "space-between", alignItems: "center"}}>
          <span>Menu</span>
          <span>Myshoppingsite</span>
          <span>Boton de Opciones</span>
        </span>
        <span className="corebox_10 col" 
         style={{background:"blue", justifyContent: "space-around", alignItems: "center"}}>
          <span>Menu</span>
          <span>Myshoppingsite</span>
          <span>Boton de Opciones</span>
        </span>
        <span className="corebox_10 col" 
         style={{background:"blue", justifyContent: "center", alignItems: "center"}}>
          <span>Menu</span>
          <span>Myshoppingsite</span>
          <span>Boton de Opciones</span>
        </span>
    </div>
  );
}

export default App;
