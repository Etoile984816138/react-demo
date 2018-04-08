import React, { Component } from 'react';
import './CommentList.css';

class CommentList extends Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
        list: []
    }

    render() {
        const list = this.props.list;
        return list.map((item, index) => {
            return (
                <div className="m-list-item" key={index}>
                    <span className="u-name">@{item.userName}</span>
                    <span className="u-content">:{item.content}</span>
                </div>
            )
        })
    }
}

export default CommentList;

