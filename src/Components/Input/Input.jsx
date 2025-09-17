import react from 'react';
import './Input.css';
const Input = ({placeholder,type})=>{
    return (
        <input className='input' placeholder={placeholder} type={type}></input>
    )
}
export default Input;