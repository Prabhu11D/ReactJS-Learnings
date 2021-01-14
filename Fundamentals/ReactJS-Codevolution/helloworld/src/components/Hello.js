import React from "react";

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello I'm JSX</h1>
    //     </div>
    // )

    return React.createElement(
        "div",
        { className: "dummyClass" },
        React.createElement("h1", null, "Hello I'm JSX")
    );
};

export default Hello;
