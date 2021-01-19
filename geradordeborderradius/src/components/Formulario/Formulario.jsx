import React, { Component } from 'react';
import CampoDefiniBorda from '../Input';
import Visualizador from '../Visualizador/Visualizador';

import "./style.css"

class Formulario extends Component {

    constructor(props) {
        super(props)

        this.name = null;
        this.value = null;
        this.mensagens = [];

        this.state = {
            inputName: null,
            inputModificado: null
        }
    }

    escutarDigito(evento) {

        this.inputEvent = evento.target.getAttribute('name');
        this.inputValue = evento.target.value;

        let objValuesInput = null;

        if (this.inputEvent === 'topEsquerdo') {
            objValuesInput = { inputName: this.inputEvent, inputModificado: this.inputValue }
            this.setState(objValuesInput);
        } else if (this.inputEvent === 'topDireito') {
            objValuesInput = { inputName: this.inputEvent, inputModificado: this.inputValue }
            this.setState(objValuesInput);
        } else if (this.inputEvent === 'bottomEsquerdo') {
            objValuesInput = { inputName: this.inputEvent, inputModificado: this.inputValue }
            this.setState(objValuesInput);
        } else {
            objValuesInput = { inputName: this.inputEvent, inputModificado: this.inputValue }
            this.setState(objValuesInput);
        }

        this.uptadeBorderVisualizador(objValuesInput);
        this.uptadeCodigoParaUsuario(objValuesInput);
    }

    uptadeBorderVisualizador({ inputName, inputModificado }) {

        this.visualizador = document.querySelector('.visualizador');
        this.name = inputName;
        this.value = inputModificado;
        console.log(typeof this.value, typeof this.value.length);

        if (this.name === 'topEsquerdo') {
            if (this.value.length !== 0) { this.visualizador.style.borderTopLeftRadius = `${this.value}px`; } else { this.visualizador.style.borderTopLeftRadius = `${0}px`; }

        } else if (this.name === 'topDireito') {
            if (!this.value.length !== 0) { this.visualizador.style.borderTopRightRadius = `${this.value}px`; } else { this.visualizador.style.borderTopRightRadius = `${0}px`; }

        } else if (this.name === 'bottomEsquerdo') {
            if (!this.value.length !== 0) { this.visualizador.style.borderBottomLeftRadius = `${this.value}px`; } else { this.visualizador.style.borderBottomLeftRadius = `${0}px`; }

        } else {
            if (!this.value.length !== 0) { this.visualizador.style.borderBottomRightRadius = `${this.value}px`; } else { this.visualizador.style.borderBottomRightRadius = `${0}px`; }
        }
    }

    uptadeCodigoParaUsuario({ inputName, inputModificado }) {

        this.name = inputName;
        this.value = inputModificado;

        if (this.name === 'topEsquerdo') {
            if (this.value.length !== 0) { this.mensagens.pop(); this.mensagens.push(`border-top-left-radius: ${this.value}px;`); }

        } else if (this.name === 'topDireito') {
            if (this.value.length !== 0) { this.mensagens.push(`border-top-right-radius: ${this.value}px;`); }

        } else if (this.name === 'bottomEsquerdo') {
            if (this.value.length !== 0) { this.mensagens.push(`border-bottom-left-radius: ${this.value}px;`); }

        } else {
            if (this.value.length !== 0) { this.mensagens.push(`border-bottom-right-radius: ${this.value}px;`); }
        }

        this.colocarCadaArrayDentroDoSpan(this.mensagens);
    }

    colocarCadaArrayDentroDoSpan(mensagens) {

        var visualizador = document.querySelector('.visualizador');
        visualizador.innerHTML = '';

        if (mensagens.length == 0) {
            var span = document.createElement('span');
            span.textContent = "Seu código aparecerá aqui! Selecione o texto e copie para seu código.";
            visualizador.appendChild(span);
        } else {
            mensagens.forEach(function (mensagem) {
                var span = document.createElement('span');
                visualizador.appendChild(span);
                span.textContent = mensagem;
            });
        }

    }

    render() {
        return (
            <form className="form" onInput={this.escutarDigito.bind(this)}>

                <h1 className="form__title">Gerador de Border Radius</h1>

                {this.props.placeholdersTopInput.map((objAtributes, index) => {
                    return <CampoDefiniBorda
                        key={index}
                        name={objAtributes.name}
                        placeholder={objAtributes.placeholder}
                    />
                })}

                <Visualizador />

                {this.props.placeholdersBottomInput.map((objAtributes, index) => {
                    return <CampoDefiniBorda
                        key={index}
                        name={objAtributes.name}
                        placeholder={objAtributes.placeholder}
                    />
                })}
            </form>
        );
    }
}

export default Formulario;