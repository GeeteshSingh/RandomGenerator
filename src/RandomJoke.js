import {useEffect,useState} from "react";

function RandomJoke(firstName,lastName){
    const [joke, setJoke] = useState('')
    useEffect(() => {
        const fetchJoke = async () =>
            await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
                .then((response) => response.json())
                .then((data) => {
                    setJoke(data.value.joke)
                })
        fetchJoke();
    }, [firstName,lastName])
return joke;
}

export default RandomJoke