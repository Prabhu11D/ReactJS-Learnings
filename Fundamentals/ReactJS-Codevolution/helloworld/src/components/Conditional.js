import React, { Component } from "react";

class Conditional extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true,
        };
    }

    render() {
        // 1. --------  if else ------------
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Prabhu</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }

        // 2. -------- Element Variable -------
        // let message;
        // if (this.state.isLoggedIn) message = <div>Welcome Prabhu</div>;
        // else message = <div>Welcome Guest</div>;
        // return message

        // 3. -------- Ternary ----------
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Prabhu</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // );

        // 4. --------- Short Circuit Operator -------
        return this.state.isLoggedIn && <div>Welcome Prabhu</div>
    }
}

export default Conditional;
