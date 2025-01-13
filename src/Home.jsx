import { Link } from 'react-router-dom'
import './Home.css'


function Home(){
    return(
        <>
        <div className="navbar">
        <div className="logo">FunNav</div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>

    <div className="content">
        <h1>Welcome to Fun World!</h1>
        <p>
            This is a playful design where creativity meets simplicity.
            Enjoy exploring the colorful vibes and endless fun.
        </p>
        <a href="#" class="btn">Join the Fun!</a>
    </div>
    </>
    )
}

export default Home