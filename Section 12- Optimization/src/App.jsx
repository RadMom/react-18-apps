import React from "react";
import { useState, useCallback } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);

    console.log("APP IS RUNNING");

    const toggleParagraphHandler = useCallback(() => {
        setShowParagraph((prevShowParagraphState) => !prevShowParagraphState);
    },[]);

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={false} />
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
