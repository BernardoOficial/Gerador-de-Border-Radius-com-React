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
    }

    escutarDigito(evento) {

        evento.stopPropagation();

        this.inputTopLeft = evento.target.value;
        this.inputTopRight = evento.target.value;
        this.inputBottomLeft = evento.target.value;
        this.inputBottomRight = evento.target.value;

        console.log(this.inputTopLeft);
    }

    render() {
        return (
            <form className="form">

                <h1 className="form__title">Gerador de Border Radius</h1>

                {this.props.placeholdersEsqInput.map((placeholder, index) => {
                    return <CampoDefiniBorda
                        key={index}
                        placeholder={placeholder}
                        onInput={this.escutarDigito.bind(this)}
                    />
                })}

                <Visualizador />

                {this.props.placeholdersDirInput.map((placeholder, index) => {
                    return <CampoDefiniBorda
                        key={index}
                        placeholder={placeholder}
                        onInput={this.escutarDigito.bind(this)}
                    />
                })}
            </form>
        );
    }
}

export default Formulario;