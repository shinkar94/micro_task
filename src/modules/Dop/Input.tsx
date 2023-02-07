import React, {ChangeEvent, useState} from "react";

type InputTitle = {
    title: string
    changeTitle: (newTitle: string)=>void
}

export const Input = (props:InputTitle) =>{

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        props.changeTitle(event.currentTarget.value)
    }

    return (
        <input
            type="text"
            value={props.title}
            onChange={onChangeInputHandler}
        />
    )
}