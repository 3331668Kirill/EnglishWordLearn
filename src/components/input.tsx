import React, {ChangeEvent, KeyboardEvent} from "react";
import  '../App.css'

type InputPropsType = {
    title: string
    changeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressAddTask: (event: KeyboardEvent<HTMLInputElement>) => void
}

export const InputField = ({title, changeTitle, onKeyPressAddTask, ...props}: InputPropsType) => {

    return (
        <input
            className={'Input-text'}
            value={title}
            placeholder='введи перевод'
            onChange={changeTitle}
            onKeyPress={onKeyPressAddTask}
        />

    )

}