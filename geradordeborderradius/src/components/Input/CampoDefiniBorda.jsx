import React, { Component } from 'react';

import "./style.css"

class CampoDefiniBorda extends Component {

    render() {
        return (
            <input
                className="campo"
                type="text"
                onInput={this.props.onInput}
                placeholder={this.props.placeholder}
            />
        );
    }
}

export default CampoDefiniBorda;