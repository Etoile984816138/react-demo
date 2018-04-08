import React, { Component } from 'react';
// import logo from './logo.svg';
import './Dog.css';

class Dog extends Component {
    constructor() {
        super();
        this.state = {
            isRunning: false,
            isBarking: false
        }
        /* TODO */
    }

    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

    bark() {
        console.log(this.props);
        /* TODO */
        this.setState((prev) => {
            console.log(prev);
            return { isBarking: !prev.isBarking }
        });
    }

    run() {
        /* TODO */
        this.setState((prev) => {
            return { isRunning: !prev }
        })
    }
    onClickHandle() {
        this.bark();
        this.run();
        // const _this = this;
        // setTimeout(()=>{
        //   this.bark();
        //   this.run();
        // },20)
    }
    render() {
        const likedText = this.props.likedText;
        const unlikedText = this.props.unlikedText;
        return (<div onClick={this.onClickHandle.bind(this)}>DOG{likedText}{unlikedText}</div>)
    }
}

export default Dog;
