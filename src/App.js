import React, { useState } from 'react';
import './App.css';
import Conversor from "./components/Conversor/index";
import Header from "./components/Header/index";

function App() {

  const [selecionarMoeada, setselecionarMoeda] = useState("USD")
  const list = [
    { id: 1, name: "USD" },
    { id: 2, name: "PHP" },
    { id: 3, name: "SVC" },
    { id: 4, name: "SPH" },
  ]
  return (
    <div className="App">

      <Header></Header>

      <select className="selectMoeda" value={selecionarMoeada} onChange={e => setselecionarMoeda(e.target.value)}>
        {list.map((item, index) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>

      <Conversor moedaA={selecionarMoeada} moedaB="BRL">

      </Conversor>
    </div>
  );
}

export default App;
