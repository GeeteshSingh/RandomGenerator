import './App.css';
import RandomJoke from "./RandomJoke";
import {useRef, useState} from "react";
function reload() {
    window.location.refresh();
}

function App() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const [firstName, setFirstName] = useState('Geetesh');
    const [lastName, setLastName] = useState('Singh');
    const joke = RandomJoke(firstName, lastName);

    const generateJoke = (e) => {
        e.preventDefault()
        setFirstName(firstNameRef.current.value)
        setLastName(lastNameRef.current.value)
    }
    return (
        <div className="App">
            <h1>Joke Generator</h1>
            <h2>{joke}</h2>
            <div className='jokeSection'>
                <form>
                    <input placeholder='First name' ref={firstNameRef}/>
                    <input placeholder='Last name' ref={lastNameRef}/>
                    <br/>
                    <button className='button' onClick={generateJoke} >Generate</button>
                    <button className='button' onClick={reload}>New Joke</button>

                </form>
            </div>

        </div>
    );
}

export default App;
