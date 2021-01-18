import React, { Component } from 'react';

import "./style.css"

class CampoDefiniBorda extends Component {

    render() {
        return (
            <input
                className="campo"
                type="text"
                name={this.props.name}
                placeholder={this.props.placeholder}
            />
        );
    }
}

export default CampoDefiniBorda;