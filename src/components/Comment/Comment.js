import React, { Component } from 'react';
import './Comment.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }

    static defaultProps = {}

    render() {
        return (
            <div>
                <CommentInput onSubmit={this.onSubmit.bind(this)} />
                <div className="m-list">
                    <CommentList list={this.state.list} />
                </div>
            </div>
        )
    }
    onSubmit(state) {
        this.setState({
            list: [...this.state.list, state]
        });
    }
}

export default Comment;

