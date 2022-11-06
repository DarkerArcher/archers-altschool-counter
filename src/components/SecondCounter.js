import useCounter from "../hooks/counterHook";
import SEO from "./SEO";
import '../App.css'
import { useNavigate } from "react-router-dom";


function CounterWithHook({ initialCount }) {
    const counter = useCounter(initialCount);

    const navigate = useNavigate()

    function handleNavigate404(e) {
        navigate('/test')
    }

    function handleNavigateError(e) {
        navigate('/greeting')
    }

    function firstCounter(e) {
        navigate('/firstcounter')
    }

    return (
        <>
            <SEO
                title={"Archer's AltSchool Counter."}
                description={"Counter page made for AltSchool Africa."}
                name={"Ayo Otutuloro."} />
            <div className='counter'>
                <div>
                    <span className='counter-count'>{counter.value}</span>
                </div>
                <h1>Counter</h1>
                <div className='counter-btns'>
                    <button className='counter-btn' onClick={counter.increment}>
                        Add
                    </button>
                    <button className='counter-btn' onClick={counter.reset}>
                        Reset
                    </button>
                    <button className='counter-btn' onClick={counter.decrement}>
                        Subtract
                    </button>
                </div>
                <div className='input-div'>
                    <input className='input' type="number" value={counter.input} onChange={counter.onChange} />
                </div>
                <div>
                    <button className='counter-btn' onClick={counter.set}>
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
                    <button className='counter-btn' onClick={firstCounter}>
                        First Counter
                    </button>
                </div>
            </div>
        </>
    )
}

export default CounterWithHook