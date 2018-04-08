import React, { Component } from 'react';
import './PercentageApp.css';
import PercentageShower from './PercentageShower';
import Input from './Input';

class PercentageApp extends Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {}

    render() {
        return (
            <div>
                <Input onInputChange={this.onInputChange.bind(this)} />
                <PercentageShower num={this.state.num} />
            </div>
        )
    }
    onInputChange(state) {
        this.setState(state);
    }
}

export default PercentageApp;

