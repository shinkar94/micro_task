import {useState} from "react";


export const TestUseState = () =>{
    let [a, setA] = useState(1);
    let upNumber = () =>{
        setA(++a)
    }
    const setZero = () =>{
        setA(a*0)
    }
    return(
        <>
            <h3>Lesson UseState</h3>
            <p>{a}</p>
            <button onClick={upNumber}>number</button>
            <button onClick={setZero}>0</button>
        </>
    )
}