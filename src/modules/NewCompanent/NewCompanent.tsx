
type ComponentType = {
    filterMoney: Function
    currentMoney: Array<MoneyType>
}

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}


export const NewCompanent = (props:ComponentType) =>{
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={()=>props.filterMoney('ruble')}>ruble</button>
                <button onClick={()=>props.filterMoney('dollar')}>dollar</button>
                <button onClick={()=>props.filterMoney('all')}>all</button>
            </div>
        </>
    );
}