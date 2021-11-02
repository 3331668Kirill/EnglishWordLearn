import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button} from "./components/button";
import {InputField} from "./components/input";

type PropsType = {
    title: string
    task: Array<StateType>
    nextEnWordElement: () => void

}
export type StateType = {
    enWord: string
    rusWord: string
}

export function MainList(props: PropsType) {
    const [translateWord, setTranslateWord] = useState<string>('')

    const [answerEl, setAnswerEl] = useState('')

    const checkAnswer = () => {
        let rusWord = props.task.map(t => t.rusWord)
        if (translateWord.toLowerCase().trim() === rusWord[0]) {
            console.log(translateWord, rusWord)
            setAnswerEl('ПРАВИЛЬНО!!!')
            console.log(answerEl)
        } else {
            setAnswerEl('Неправильно, иди учи')
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
    const nextEnWordElement = () => {
        props.nextEnWordElement()
        setTranslateWord('')
        setAnswerEl('')
    }

    const enWordElement = props.task.map(t => {
        {
            return (
                <div>
                    <div>{`${t.enWord} `}
                        <span>
                            <Button name={'next word'} callback={nextEnWordElement}/>
                        </span>
                    </div>

                </div>
            )
        }
    })
    const wrongAnswer = answerEl==='Неправильно, иди учи'
        ? <div style={{color:'red'}}>{answerEl}</div>
        : <div>{answerEl}</div>

    return (<div>
            <h3>{props.title}</h3>
            <div>{enWordElement}</div>
            <div> ----------------------------------------- </div>
            <div>
                <InputField title={translateWord}
                            onKeyPressAddTask={onKeyPressAddTask}
                            changeTitle={changeTitle}/>
                <Button name={'проверь'} callback={checkAnswer}/>
                {wrongAnswer}
            </div>
        </div>
    )
}