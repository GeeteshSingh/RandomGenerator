import React, { useState } from "react";
import RandomJoke from "./RandomJoke";

function App() {
    const [firstName, setFirstName] = useState("First");
    const [lastName, setLastName] = useState("Last");

    const handleFetchJoke = () => {
    };

    return (
        <div className="container">
            <h1 style={{textAlign:"center"}}>Random Joke</h1>
            <RandomJoke firstName={firstName} lastName={lastName} />
        </div>
    );
}

export default App;