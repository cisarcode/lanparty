import { useState } from 'react'

function App() {
    const [clicks, setClicks] = useState({
        left:0,
        right:0
    })

    const handleLeftClick = () => {
        setClicks({...clicks, left: clicks.left + 1 })
    }

    const handleRightClick = () => {
        setClicks({...clicks, right: clicks.right + 1 })
    }


    return (
        <>
            <div>{clicks.left}
            <button onClick={handleLeftClick} >Left</button>
            </div>
            <div>{clicks.right}
            <button onClick={handleRightClick} >Right</button>
            </div>
            <div>Varciacion</div>
            <VariacionA/>
        </>
    )
}

const VariacionA = () => {

    const [left , setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAllClicks] = useState([])
    const [total, setTotal] = useState(0)

    const handleLeftClick = () => {
        setLeft(prevLeft => prevLeft + 1);
        setAllClicks(allClicks.concat('L'))
        setTotal(prevTotalClicks => prevTotalClicks + 1)
    }

    const handleRightClick = () =>
    {
        setRight(prevRight => prevRight + 1)
        setAllClicks(allClicks.concat('R'))
        setTotal(prevTotalClicks => prevTotalClicks + 1)
    }




    return(
        <>
            <div>-----------------------</div>
            <div>{left}
                <Button handleClick={handleLeftClick} text='left'/>

            </div>
            <div>{right}
                <Button handleClick={handleRightClick} text='right'/>
            </div>
            <div>Todos los clics: {allClicks.join(' ')}</div>
            <div>Total: {total}</div>
            <div>-----------------------</div>
            <History allClicks={allClicks}/>
            <div>-----------------------</div>
            <VariacionB/>
            <div>-----------------------</div>
            <VariacionC/>
            <div>-----------------------</div>
            <VariacionD/>
        </>
    )
}

const History = (props) => {
    if (props.allClicks.length === 0)
    {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return(
            <div>
                button press history: {props.allClicks.join(' ')
            }
            </div>
        )
}

// Una función que devuelve una función, tipo 1
// eslint-disable-next-line react/prop-types
const Button = ({ handleClick, text})  => {
    const hello = (who) =>{
        return () => {
            console.log('Hello ' + who)
            console.log('-----')
        }
    }
    return (
        <div>
            <button onClick={hello(text)}>Consola</button>
            <button onClick={handleClick}>{text}</button>
        </div>
    )
    }
const VariacionB = () => {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => () => {
        console.log('value now', newValue)
        setValue(newValue)
    }

    return (
        <div>
            {value}
            <button onClick={setToValue(500)}>
                quinientos
            </button>
            <button onClick={setToValue(0)}>
                reset
            </button>
            <button onClick={setToValue(value + 10)}>
                increment en 10
            </button>
        </div>
    )
}
// Una función que devuelve una función, tipo 2
const VariacionC = () => {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
        console.log('value now', newValue)
        setValue(newValue)
    }

    return (
        <div>
            {value}
            <button onClick={() => setToValue(1000)}>
                thousand
            </button>
            <button onClick={() => setToValue(0)}>
                reset
            </button>
            <button onClick={() => setToValue(value + 1)}>
                increment
            </button>
        </div>
    )
}
const Display = props => <div>{props.value}</div>

const Button2 = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

// Pasando controladores de eventos a componentes hijos
const VariacionD = () =>{
    const [value, setValue] = useState(10)

    const setToValue = newValue => {
        console.log('value now', newValue)
        setValue(newValue)
    }

    return (
        <div>
            <Display value={value}/>
            <Button2 handleClick={() => setToValue(300)} text="trescientos"/>
            <Button2 handleClick={() => setToValue(0)} text="cero"/>
            <Button2 handleClick={() => setToValue(value + 150)} text="de a 150"/>
        </div>
    )
}
export default App
