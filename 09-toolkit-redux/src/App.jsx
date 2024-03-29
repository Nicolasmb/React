import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/slices/counter';


function App() {

    const { counter } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>count is: { counter }</h1>
            <div className="card">
                <button onClick={() => dispatch( increment() )}>Increment</button>
                <button onClick={() => dispatch( decrement() )}>Decrement</button>
                <button onClick={() => dispatch( incrementByAmount(2) )}>Increment by 2</button>
            </div>
        </div>
    )
}

export default App
