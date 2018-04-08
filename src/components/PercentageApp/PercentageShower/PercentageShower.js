import React, { Component } from 'react';
import './PercentageShower.css';

class PercentageShower extends Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
        num:0
    }

    render() {
        const num = this.props.num;
        return (
            <div>{(num * 100).toFixed(2)}%</div>
        )
    }
}

export default PercentageShower;

