import React from "react";

function FunctionClick() {
    function click() {
        console.log("Function Clicked");
    }
    return <button onClick={click}>FunctionClick</button>;
}

export default FunctionClick;
