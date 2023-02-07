import React, {ChangeEvent, useState} from "react";


type BtnType = {
    onClickButtonHandler: (title: string)=>void
}


export const BtnAndInput = (props:BtnType) =>{
    let [title, setTitle] = useState("")

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.currentTarget.value)
    }

    const addTasks = () =>{
        props.onClickButtonHandler(title)
        setTitle("")
    }

    return (
        <span>
            <input
                type="text"
                value={title}
                onChange={onChangeInputHandler}
            />
            <button onClick={addTasks}>+</button>
        </span>
    )
}
