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

    render() {
        console.log("LifeCycle A render");
        return (
            <div>
                <h2>LifeCycle A</h2>
                <LifeCycleB />
            </div>
        );
    }
}

export default LifeCycleA;
