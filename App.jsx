import React from "react";
import Joke from "./Joke";
import JokesData from "./JokesData";

export default function App() {

    const jokeElements = JokesData.map((jokes) => {
        return <Joke 
            setup={jokes.setup}
            punchline={jokes.punchline}
        />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}


{/* <Joke 
    setup="How did the hacker escape the police?"
    punchline="He just ransomware!"
/>
<Joke 
    setup="I got my daughter a fridge for her birthday."
    punchline="I can't wait to see her face light up when she opens it."
/>
<Joke 
    setup="Why don't pirates travel on mountain roads?"
    punchline="Scurvy."
/>
<Joke 
    setup="Why do bees stay in the hive in the winter?"
    punchline="Swarm"
/>

<Joke 
    punchline="I look in the mirror everyday in search for the best man alive and i keep seeing me"
/> */}