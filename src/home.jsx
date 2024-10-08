import Button from "../components/button";


function Home() {

    const handleClick = () => {

    }

    return (
        <div className="home">
            <div>
                Homepage
            </div> 
            <button onClick={handleClick}>
                Click Me!
            </button>
        </div>
    )
}

export default Home