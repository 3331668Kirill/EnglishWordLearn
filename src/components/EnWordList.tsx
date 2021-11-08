import React from "react";
import {Button} from "./button";

export const EnWordList = (props: { nextEnWordElement: () => void }) => {
    return (
        <div>
            <Button name={'next word'} callback={props.nextEnWordElement}/>
        </div>
    )
}