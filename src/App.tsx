import React, {useState} from 'react';
import './App.css';
import {Header} from "./modules/Header/Header";
import {Body} from "./modules/Body/Body";
import {Students} from "./modules/Students/Students";
import {Button} from "./modules/Button/Button";
import {TestUseState} from "./modules/TestUseState/TestUseState";
import {TestFilter} from "./modules/TestFilter/TestFilter";


function App() {
    const [students, studentsState] = useState([
        {name:'BMW', mark:'m5cs'},
        {name:'Mercedes', mark:'e63s'},
        {name:'Audi', mark:'rs6'},
        {name:'Volvo', mark:'s90'},
        {name:'Saz', mark:'e63s'},
        {name:'Vaz', mark:'2101'},
        {name:'Mazda', mark:'mx6'},
        {name:'Ferrari', mark:'f400'},
        {name:'Reno', mark:'19'},
        {name:'Volvo', mark:'sx60'},
        {name:'Mercedes', mark:'sl500'}
    ]);
    const callBack = (subscriber: string, age:number) =>{
        console.log(subscriber, age)
    }
    const callBack2 = (subscriber: string) =>{
        console.log(subscriber)
    }
    return (
        <>
            <Header title={'Header'}/>
            <Body titleForBody={'Body header!!'}/>
            <Students students={students} />
            <h3>Lesson Button</h3>
            <Button name={'btn1'} callBack={()=>callBack('Roman', 28)}/>
            <Button name={'btn2'} callBack={()=>callBack2('Ivan')}/>
            <TestUseState />
            <TestFilter />
        </>
    );
}

export default App;
