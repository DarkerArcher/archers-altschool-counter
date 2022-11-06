import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

    function firstCounter(e) {
        navigate('/firstcounter')
    }

    function secondCounter(e) {
        navigate('/secondcounter')
    }
    return (
        <div className="home-content">
            <div >
                <h1 className="home-header">
                    Welcome.
                </h1>
                <p>
                    Click the links below to see the counters.
                </p>
            </div>
            <div>
                <button className='counter-btn' onClick={firstCounter}>
                    First Counter
                </button>
                <button className='counter-btn' onClick={secondCounter}>
                    Second Counter
                </button>
            </div>
        </div>
    )
}

export default Home