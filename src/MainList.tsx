import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button} from "./components/button";
import {InputField} from "./components/input";

type PropsType = {
    title: string
    word: Array<StateType>
    nextEnWordElement: () => void

}
export type StateType = {
    enWord: string
    rusWord: string
    rusWord2?: string
}

export function MainList(props: PropsType) {
    const [translateWord, setTranslateWord] = useState<string>('')
    const [answerEl, setAnswerEl] = useState('')
    const checkAnswer = () => {
        let rusWord = props.word.map(t => [t.rusWord, t.rusWord2])
        if (translateWord.toLowerCase().trim() === rusWord[0][0]
            || translateWord.toLowerCase().trim() === rusWord[0][1]) {

            setAnswerEl('ПРАВИЛЬНО!!!')

        } else {
            setAnswerEl(`Неправильно, иди учи. Правильный вариант: ${rusWord}`)

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

    const enWordElement = props.word.map(t => {
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
    const answer = answerEl !== 'ПРАВИЛЬНО!!!'
        ? <div style={{color: 'red'}}>{answerEl}</div>
        : <div style={{color: 'green'}}>{answerEl}</div>

    return (<div>
            <h3>{props.title}</h3>
            <div>{enWordElement}</div>
            <div> -----------------------------------------</div>
            <div>
                <InputField title={translateWord}
                            onKeyPressAddTask={onKeyPressAddTask}
                            changeTitle={changeTitle}/>
                <Button name={'проверь'} callback={checkAnswer}/>
                {answer}
            </div>
        </div>
    )
}