import React, {useState} from "react";

export default function Joke(props) {
const [isShown, setIsShown] = useState(false);

const toggle = () => {
    setIsShown(prevValue => !prevValue)
    console.log(isShown);
}

    return (
        <div className="joke-container">
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p> Punchline: {props.punchline}</p>}
            <button className="toggle--button" onClick={toggle}>
                {isShown ? "Hide Punchline" : "Show Punchline"}
            </button>
        </div>
    )
}