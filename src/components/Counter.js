import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import counterReducer from '../hooks/counterReducer';
import SEO from './SEO';

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

    const navigate = useNavigate()

    function handleNavigate404(e) {
        navigate('/test')
    }

    function handleNavigateError(e) {
        navigate('/greeting')
    }

    function secondCounter(e) {
        navigate('/secondcounter')
    }

    const [state, dispatch] = useReducer(counterReducer, { count: 0, value: 0 });

    return (
        <>
            <SEO
                title={"Archer's AltSchool Counter."}
                description={"Counter page made for AltSchool Africa."}
                name={"Ayo Otutuloro."} />
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
                <div>
                    <button className='counter-btn' onClick={handleNavigate404}>
                        404 page test
                    </button>
                    <button className='counter-btn' onClick={handleNavigateError}>
                        Error boundary test
                    </button>
                </div>
                <div>
                    <button className='counter-btn' onClick={secondCounter}>
                        Second Counter
                    </button>
                </div>
            </div>
        </>
    )
}

export default Counter