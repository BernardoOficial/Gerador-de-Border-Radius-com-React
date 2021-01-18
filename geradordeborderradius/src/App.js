import React, { Component } from 'react';
import Formulario from './components/Formulario';
import './App.css';

class App extends Component {

  render() {
    return (
      <section className="gerador">
        <Formulario
          placeholdersTopInput={[
            {
              placeholder: "Digite o canto Top-Left em pixel",
              name: "topEsquerdo"
            },
            {
              placeholder: "Digite o canto Top-Right em pixel",
              name: "topDireito"
            }
          ]}
          placeholdersBottomInput={[
            {
              placeholder: "Digite o canto Bottom-Left em pixel",
              name: "bottomEsquerdo"
            },
            {
              placeholder: "Digite o canto Bottom-Right em pixel",
              name: "bottomDireito"
            }
          ]}
        />
      </section>
    );
  }
}

export default App;
