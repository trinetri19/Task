import react from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import Label from './Label/Label';
import Input from './Input/Input';
import Button from './Button/Button';

const Signup = () => {
    return (
        <div className='mainDiv'>
            <div className='sign'>
                <h1> Sign in to your PopX account</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio saepe voluptatem atque.

                </p>
                <Label title={"Email Address*"}></Label>
                <Input placeholder={"Enter your Email Address"} type={"email"}></Input>
                <Label title={"Password*"}></Label>
                <Input placeholder={"Enter password"} type={"password"}></Input>
                <br></br>
                <br></br>
                <Link to="/profile">
                    <Button title={"Login"}></Button></Link>
            </div>
        </div>
    )
}
export default Signup;