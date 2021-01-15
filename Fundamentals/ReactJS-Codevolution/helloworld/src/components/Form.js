import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comment : '',
             topic : 'react'
        }
    }

    usernameChange = e => {
        this.setState({
            username : e.target.value
        })
    }
    
    commentChange = e => {
        this.setState({
            comment : e.target.value
        })
    }

    topicChange = e => {
        this.setState({
            topic : e.target.value
        })
    }

    formSubmit = e => {
        e.preventDefault();
        alert(`${this.state.username}\n${this.state.comment}\n${this.state.topic}`)
    }
    render() {
        const {username, comment, topic} = this.state;
        return (
            <form onSubmit={this.formSubmit}>
                <div>
                    <label>Username</label>
                    <input value={username} onChange={this.usernameChange} type="text"></input>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={comment} onChange={this.commentChange}/>
                </div>
                <select value={topic} onChange={this.topicChange}>
                    <option>React JS</option>
                    <option>Angular JS</option>
                    <option>Vue JS</option>
                </select>
                <button type='submit'>submit</button>
            </form>
        );
    }
}

export default Form;
