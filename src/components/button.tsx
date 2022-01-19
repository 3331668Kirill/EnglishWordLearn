import React from "react";
import  '../App.css'

type TypeButtonProps = {
    name: string
    callback: () => void
}
export const Button = (props: TypeButtonProps) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button className={'button'} onClick={onClickHandler}>{props.name}</button>
    )
}