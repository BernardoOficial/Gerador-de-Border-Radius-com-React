import React, { Component } from 'react';
import Formulario from './components/Formulario';
import './App.css';

class App extends Component {

  render() {
    return (
      <section className="gerador">
        <Formulario
          placeholdersEsqInput={["Digite o canto Top-Left em pixel", "Digite o canto Top-Right em pixel"]}
          placeholdersDirInput={["Digite o canto Bottom-Left em pixel", "Digite o canto Bottom-Right em pixel"]}
        />
      </section>
    );
  }
}

export default App;
