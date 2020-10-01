import React from 'react';
import './App.css';
import Conversor from "./components/Conversor/index";

function App() {
    return (
      <div className="App">
        <Conversor moedaA="USD" moedaB="BRL">

        </Conversor>
      </div>
    );
  }

export default App;
