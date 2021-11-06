import React, {useState} from "react";
import './App.css';
import {MainList, StateType} from "./MainList";
import {stateOfWords} from "./state";

function App() {
    let firstWord = [stateOfWords[0]]
    const [word, setWord] = useState<Array<StateType>>(firstWord)
    const nextEnWordElement = () => {
        let random = Math.floor(Math.random() * stateOfWords.length)
        let newWord = stateOfWords[random]
        console.log(newWord)
        setWord([newWord])
    }

    return (
        <div className="App">
            <MainList title={'Learn English'}
                      word={word}
                      nextEnWordElement={nextEnWordElement}

            />
        </div>
    );
}

export default App;
