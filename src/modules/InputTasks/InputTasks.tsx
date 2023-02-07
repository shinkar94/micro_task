import {useState} from "react";
import {BtnAndInput} from "../Dop/BtnAndInput";
import {Input} from "../Dop/Input";
import {Button} from "../Dop/Button";

type TasksType = {
    nameTasks: string
}


export const InputTasks = () => {

    const [tasks, setTasks] = useState<Array<TasksType>>([
        {nameTasks: "HTML"},
        {nameTasks: "JS"},
        {nameTasks: "CSS"},
        {nameTasks: "REACT"},
        {nameTasks: "REDUX"}
    ])
    let [title, setTitle] = useState("")

    const changeTitle = (newTitle: string) =>{
        setTitle(newTitle)
    }

    const addTasks = (title: string) =>{
        let newTask = {nameTasks: title}
        setTasks([newTask, ...tasks])
    }
    const callBackButton = () =>{
        addTasks(title)
        setTitle("")
    }

    return (
        <div className="blockTasks">
            {/*<BtnAndInput onClickButtonHandler={onClickButtonHandler}/>*/}
            <Input title={title} changeTitle={changeTitle}/>
            <Button name={'Send'} callBack={callBackButton} />
            <ul>
                {tasks.map((el, index) => {
                    return (
                        <li key={index}><p>{el.nameTasks}</p></li>
                    )})
                }

            </ul>
        </div>
    )
}