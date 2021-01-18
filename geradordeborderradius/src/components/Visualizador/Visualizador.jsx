import React, { Component } from 'react';

import "./style.css"

class Visualizador extends Component {

    static uptadeBorderVisualizador() {

        this.visualizador = document.querySelector('.visualizador');
        console.log(this.visualizador);
        this.name = this.props.dadosInput.inputName;
        this.value = this.props.dadosInput.inputModificado;

        if (this.name === 'topEsquerdo') {
            if (!this.value.length === 0) { this.visualizador.style.borderTopLeftRadius = `${this.value}px`; }
            else { this.visualizador.style.borderTopLeftRadius = `${0}px`; }

        } else if (this.name === 'topDireito') {
            if (!this.value.length === 0) { this.visualizador.style.borderTopRightRadius = `${this.value}px`; }
            else { this.visualizador.style.borderTopRightRadius = `${0}px`; }

        } else if (this.name === 'bottomEsquerdo') {
            if (!this.value.length === 0) { this.visualizador.style.borderBottomLeftRadius = `${this.value}px`; }
            else { this.visualizador.style.borderBottomLeftRadius = `${0}px`; }
        } else {
            if (!this.value.length === 0) { this.visualizador.style.borderBottomRightRadius = `${this.value}px`; }
            else { this.visualizador.style.borderBottomRightRadius = `${0}px`; }
        }

    }

    render() {
        return (
            <section className="visualizador">
                <p>Seu código aparecerá aqui! Selecione o texto e copie para seu código.</p>
            </section>
        );
    }
}

export default Visualizador;