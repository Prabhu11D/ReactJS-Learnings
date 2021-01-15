import React, { Component } from "react";

class LifeCycleB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Prabhu 🧑",
        };

        console.log("LifeCycle B Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle B getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifeCycle B componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifeCycle B shoulfComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycle B getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifeCycle B componentDidUpdate");
    }

    render() {
        console.log("LifeCycle B render");
        return (
            <div>
                <h2>LifeCycle B</h2>
            </div>
        );
    }
}

export default LifeCycleB;
