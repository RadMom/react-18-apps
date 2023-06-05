import React from "react";

const DemoOutput = (props) => {
    console.log("DemoOutput IS RUNNING!");
    return <p>{props.show ? "This is new!" : ""}</p>;
};

export default DemoOutput;
