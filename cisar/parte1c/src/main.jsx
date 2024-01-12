import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

//import axios from 'axios'

// console.log('promise1')
// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)
// promise.then(response => {
//     console.log(response)
// })

// console.log('promise2')
// const promise2 = axios.get('http://localhost:3001/foobar')
//     .then(response => {
//         console.log(promise2)
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error('Error atrapado:', error);
//     });

// axios
//     .get('http://localhost:3001/notes')
//     .then(response => {
//         const notes = response.data
//         console.log(notes)
//     })

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
