import React, { Component } from 'react';
import './CommentInput.css';

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            content: ''
        };
    }

    static defaultProps = {}

    render() {
        return (
            <div className="m-comment-input">
                <form>
                    <div className="u-form-item">
                        <label>用户名：</label>
                        <input
                            type="text"
                            value={this.state.userName}
                            onChange={this.onUserNameChange.bind(this)}
                        ></input>
                    </div>
                    <div className="u-form-item">
                        <label>评论内容：</label>
                        <textarea
                            value={this.state.content}
                            onChange={this.onContentChange.bind(this)}
                        ></textarea>
                    </div>
                    <div className="u-form-button">
                        <button
                            onClick={this.onSubmit.bind(this)}>发布</button>
                    </div>
                </form>
            </div>
        )
    }
    onUserNameChange(event) {
        this.setState({
            userName: event.target.value
        });
    }
    onContentChange(event) {
        this.setState({
            content: event.target.value
        });
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            content: ''
        })
    }
}

export default CommentInput;

