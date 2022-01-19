import React, {ChangeEvent} from "react";
import {Button} from "./components/button";
import {InputField} from "./components/input";

type PropsType = {
    title: string
    enWordElement: JSX.Element[]
    translateWord: string
    onKeyPressAddTask: (event: React.KeyboardEvent<HTMLInputElement>) => void
    changeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    checkAnswer: () => void
    answer: JSX.Element

}
export type StateType = {
    enWord: string
    rusWord: string
    rusWord2?: string
    rusWord3?: string
}

export function MainList(props: PropsType) {

    return (<div>
            <h1>{props.title}</h1>
            <div className={'word'}>{props.enWordElement}</div>

            <div>
                <InputField title={props.translateWord}
                            onKeyPressAddTask={props.onKeyPressAddTask}
                            changeTitle={props.changeTitle}/>

                <Button name={'проверь'} callback={props.checkAnswer}/>
                <div className={'answer'}>
                    {props.answer}
                </div>
            </div>
        </div>
    )
}