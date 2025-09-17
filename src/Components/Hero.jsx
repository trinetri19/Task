import react from 'react'
import {Link} from 'react-router-dom';
import '../App.css'
import Button from './Button/Button';
const Hero = ()=>{
    return (
       <div className='mainDiv'>
            <div className='hero'>
             <h2>Welcome to PopX</h2>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima necessitatibus laboriosam nostrum dolorum? </p>
            <Link to="/createAcc">  <Button title={"Create Account"}></Button></Link>
            <Link to="/signup"><Button title={"Already Registered? Login"}></Button></Link>
            </div>
       </div>
    )
}
export default Hero;