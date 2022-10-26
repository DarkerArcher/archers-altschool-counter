import React, { useReducer } from 'react';
import '../App.css'
import counterReducer from '../hooks/counterHook';

function Counter() {

    function handleIncrement() {
        dispatch({ type: 'increment', payload: state.count + 1 })
    }

    function handleDecrement() {
        dispatch({ type: 'decrement', payload: state.count - 1 })
    }

    function handleReset() {
        dispatch({ type: 'reset', payload: state.count = 0 })
    }

    function handleSet() {
        dispatch({ type: 'set', payload: parseInt(state.value) })
    }

    function handleInput(e) {
        dispatch({ type: 'count', payload: e.target.value })
    }

    const [state, dispatch] = useReducer(counterReducer, { count: 0, value: 0 });

    return (
        <div className='counter'>
            <div>
                <span className='counter-count'>{state.count}</span>
            </div>
            <h1>Counter</h1>
            <div className='counter-btns'>
                <button className='counter-btn' onClick={handleIncrement}>
                    Add
                </button>
                <button className='counter-btn' onClick={handleReset}>
                    Reset
                </button>
                <button className='counter-btn' onClick={handleDecrement}>
                    Subtract
                </button>
            </div>
            <div className='input-div'>
                <input className='input' type="number" value={state.value} onChange={handleInput} />
            </div>
            <div>
                <button className='counter-btn' onClick={handleSet}>
                    Set
                </button>
            </div>
        </div>
    )
}

export default Counter