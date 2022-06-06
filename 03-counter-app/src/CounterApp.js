import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    // useState devuelve el valor de estado actual y una función que permite actualizarlo.
    const [ counter, setCounter ] = useState( value );

    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 )
    }

    const handleReset = () => {
        setCounter( value )
    }

    const handleSubtract = () => {
        setCounter( counter - 1 );
    }

    
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button> 
            <button onClick={ handleReset }>Reset</button> 
            <button onClick={ handleSubtract }>-1</button> 
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
