import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import './App.css';
import {MainList, StateType} from "./MainList";
import {stateOfWords} from "./state";
import {EnWordList} from "./components/EnWordList";

function App() {
    let firstWord = [stateOfWords[0]]
    const [word, setWord] = useState<Array<StateType>>(firstWord)
    const nextEnWordElement = () => {
        let random = Math.floor(Math.random() * stateOfWords.length)
        let newWord = stateOfWords[random]
        console.log(newWord)
        setWord([newWord])
        setTranslateWord('')
        setAnswerEl('')
    }
    const [translateWord, setTranslateWord] = useState<string>('')
    const [answerEl, setAnswerEl] = useState('')
    const checkAnswer = () => {
        let rusWord: Array<Array<string | undefined>> = word.map(t => [t.rusWord, t.rusWord2, t.rusWord3])
        if (translateWord.toLowerCase().trim() === rusWord[0][0]
            || translateWord.toLowerCase().trim() === rusWord[0][1]
            || translateWord.toLowerCase().trim() === rusWord[0][2]) {

            setAnswerEl('ПРАВИЛЬНО!!!')

        } else {
            let answer = rusWord[0].filter(Boolean)
            setAnswerEl(` ${answer}`)

        }
    }
    const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTranslateWord(event.currentTarget.value)
        setAnswerEl('')
    }
    const onKeyPressAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            checkAnswer()

        }
    }
    const enWordElement = word.map(t => {
        {
            return (
                <div>
                    {`${t.enWord} `}
                    <span>
                    <EnWordList nextEnWordElement={nextEnWordElement}/>
                    </span>
                </div>
            )
        }
    })
    const fixAnswer = 'Неправильно, иди учи. Правильный вариант:'

    const answer = answerEl !== 'ПРАВИЛЬНО!!!' && answerEl !== ''
        ? <div style={{color: 'red'}}>{fixAnswer} <br></br>
            <div style={{color: 'blue'}}>{answerEl}</div>
        </div>
        : <div style={{color: 'green'}}>{answerEl}</div>


    return (
        <div className="App">
            <MainList title={'Learn English'}
                      enWordElement={enWordElement}
                      translateWord={translateWord}
                      onKeyPressAddTask={onKeyPressAddTask}
                      changeTitle={changeTitle}
                      checkAnswer={checkAnswer}
                      answer={answer}
            />
        </div>
    );
}

export default App;
