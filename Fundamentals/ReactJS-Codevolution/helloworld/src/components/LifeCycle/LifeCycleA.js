import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Prabhu 🧑",
        };

        console.log("LifeCycle A Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle A getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifeCycle A componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifeCycle A shoulfComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycle A getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifeCycle A componentDidUpdate");
    }

    changeState = () => {
        console.log("Changing.....")
        this.setState({
            name : "PRABHU 🧓"
        })
    }

    render() {
        console.log("LifeCycle A render");
        return (
            <div>
                <h2>LifeCycle A</h2>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        );
    }
}

export default LifeCycleA;
