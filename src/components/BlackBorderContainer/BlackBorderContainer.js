import React, { Component } from 'react';
import './BlackBorderContainer.css';

class BlackBorderContainer extends Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {}

    render() {
        const children = this.props.children;
        console.log(children);
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default BlackBorderContainer;

