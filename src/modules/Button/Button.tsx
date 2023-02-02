import React from "react";


type ButtonType = {
    name:string
    callBack: ()=>void
}


export const Button = (props:ButtonType) => {
    const clickBtn = () =>{
        props.callBack()
    }
    return (
        <button onClick={clickBtn}>{props.name}</button>
    )
}