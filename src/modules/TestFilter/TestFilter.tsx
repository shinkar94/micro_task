import {useState} from "react";
import {NewCompanent} from "../NewCompanent/NewCompanent";

type FilterType = 'all' | 'dollar' | 'ruble'
export const TestFilter = () => {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])
    let [monet, setMonet] = useState<FilterType>('all')

    let currentMoney = money;

    if(monet === 'ruble'){
        currentMoney = money.filter((currentedMoney) => currentedMoney.banknote === 'ruble')
    }
    if(monet === 'dollar'){
        currentMoney = money.filter((currentedMoney) => currentedMoney.banknote === 'dollar')
    }

    const filterMoney = (monet:FilterType) =>{
        setMonet(monet)
    }

    return(
        <NewCompanent filterMoney={filterMoney} currentMoney={currentMoney}/>
    )

}