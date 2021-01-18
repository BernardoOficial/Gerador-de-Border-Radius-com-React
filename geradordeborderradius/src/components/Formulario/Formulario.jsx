import React, { Component } from 'react';
import CampoDefiniBorda from '../Input';
import Visualizador from '../Visualizador/Visualizador';

import "./style.css"

class Formulario extends Component {

    constructor(props) {
        super(props)

        this.inputTopLeft = null;
        this.inputTopRight = null;
        this.inputBottomLeft = null;
        this.inputBottomRight = null;

        this.state = {
            inputName: null,
            inputModificado: null
        }
    }

    escutarDigito(evento) {

        this.inputEvent = evento.target.getAttribute('name');
        this.inputValue = evento.target.value;

        if (this.inputEvent === 'topEsquerdo') {
            this.setState({ inputName: this.inputEvent, inputModificado: this.inputValue })
        } else if (this.inputEvent === 'topDireito') {
            this.setState({ inputName: this.inputEvent, inputModificado: this.inputValue })
        } else if (this.inputEvent === 'bottomEsquerdo') {
            this.setState({ inputName: this.inputEvent, inputModificado: this.inputValue })
        } else {
            this.setState({ inputName: this.inputEvent, inputModificado: this.inputValue })
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

                <Visualizador dadosInput={this.state} />

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