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
            <div>{left}
                <button onClick={handleLeftClick}> Left </button>
            </div>
            <div>{right}
                <button onClick={handleRightClick}> Right </button>
            </div>
            <div>Todos los clics: {allClicks.join(' ')}</div>
            <div>Total: {total}</div>
        </>
    )
}
export default App
