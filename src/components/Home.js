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
                    Shall we play a game?
                </h1>
                <p>
                    Track your diet with the counters below.
                </p>
            </div>
            <div>
                <button className='counter-btn' onClick={firstCounter}>
                    Water Intake Counter
                </button>
                <button className='counter-btn' onClick={secondCounter}>
                    Food Intake Counter
                </button>
            </div>
        </div>
    )
}

export default Home