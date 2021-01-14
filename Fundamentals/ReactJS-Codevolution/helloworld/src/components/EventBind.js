import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello",
        };

        // this.click = this.click.bind(this);
    }

    click() {
        this.setState({
            message: "Good Bye",
        });
    }

    click = () => {
        this.setState({
            message: "Good Bye",
        });
    };
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* <button onClick={this.click.bind(this)}>Click Me</button> */}
                <button onClick={() => this.click()}>Click Me</button>
                {/* 
                    3. Binding in Constructor
                    4. use arrow funtion
                 */}
            </div>
        );
    }
}

export default EventBind;
