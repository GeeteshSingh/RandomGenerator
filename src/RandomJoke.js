import { useEffect, useState } from "react";
import "./App.css"
function RandomJoke() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Cena");
    const [joke, setJoke] = useState("");

    const fetchJoke = async () => {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        setJoke(data.value.replace(/Chuck Norris/g, `${firstName} ${lastName}`));
    };

    useEffect(() => {
        if (firstName && lastName) {
            fetchJoke().then(r => r.json()).then(data => setFirstName(data));
        }
    }, [firstName, lastName]);

    return (
        <div className="joke-app">
            <input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <button onClick={fetchJoke}>Get Joke</button>
            <h2>{joke}</h2>
        </div>
    );
}

export default RandomJoke;