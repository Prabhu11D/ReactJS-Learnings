import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Prabhu 🧑'
        }

        console.log("LifeCycle B Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycle B getDerivedStateFromProps");
        return null
    }
    
    componentDidMount(){
        console.log("LifeCycle B componentDidMount");
    }

    render() {
        console.log("LifeCycle B render")
        return (
            <div>
                <h2>LifeCycle B</h2>
            </div>
        )
    }
}

export default LifeCycleB
