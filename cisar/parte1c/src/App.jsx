import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

const App = () => {
    const [counter, setCounter] = useState(0)
    const increaseByOne = () => setCounter(counter +1)
    const decreaseByOne = () => setCounter(counter-1)
    const setToZero = () => setCounter(0)

    const people =
        [
            {theName: "Persona 1", theAge:30},
            {theName: "Persona 2", theAge:24},
            {theName: "Persona 3", theAge:55},
        ]
    const greetings = people.map( person =>
        <Greeting key={person.theName} name={person.theName} age={person.theAge} />
    )
    return(
        <div>
            {greetings}
            <Display counter={counter} />
            <Button onClick={decreaseByOne} text='Minus' />
            <Button onClick={setToZero} text='Zero' />
            <Button onClick={increaseByOne} text='Plus' />
        </div>
    )
}

const Button = ({onClick, text}) =>{

    return(
        <>
            <button onClick={onClick}>{text}</button>
        </>
    )
}

const Display = ({counter}) =>{
    return(
        <div >Contador actual en {counter}</div>
    )
}

const Greeting = ({ name, age }) => {


    return (
        <h4>Hola, {name}. Tienes {age} años. </h4>
    );
};

export default App
