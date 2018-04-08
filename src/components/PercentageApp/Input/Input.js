import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            num:0
        };
    }

    static defaultProps = {}

    render() {
        return(
            <div>
                <input type='number' onChange={this.onInputChange.bind(this)} value={this.state.num}/>
            </div>
        )
    }
    onInputChange(event) {
        this.setState({
            num: event.target.value
        });
        this.props.onInputChange({
            num: event.target.value
        });
    }
}

export default Input;

