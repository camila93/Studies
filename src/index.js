import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  //Não é possível modificar o estado diretamente -> estado = estado+1;
  const [estado, modificarEstado] = useState(0);
  const handleClick = () => {
    console.log("somando");
    modificarEstado(function estouSomandoOEstadoENomeandoEleComoLeo(leo) {
      return leo + 1;
    });
  };
  //A useCallback cacheia a função que é passada como parametro,
  //e só é alterada quando o segundo parametro tem seu valor alterado,
  //assim cachei novamente a função, com o novo valor
  const handleCallback = React.useCallback(handleClick, []);

  return (
    <div className="App">
      <h1>Contador</h1>
      <h2> {estado} </h2>

      <button onClick={handleCallback}>+</button>
      <button onClick={() => modificarEstado(estado - 1)}>-</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
