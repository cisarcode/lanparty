import { useState } from 'react'

function App() {
    const { clicks, setClicks} = useState({
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
            <button onClick={handleLeftClick()} >Left</button>
            </div>
            <div>{clicks.right}
            <button onClick={handleRightClick()} >Right</button>
            </div>
        </>
    )
}
export default App
