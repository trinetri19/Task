import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input/Input";
import Label from "./Label/Label";
import Button from "./Button/Button";

const CreateAccount = () => {
    return (
        <div className="mainDiv">
           <div className="cadiv">
             <h1>Create Your <br></br>Popx Account</h1>
              <Label title={"Full Name*"} ></Label>
             <Input placeholder={"Enter your name"} type={"text"}></Input>
              <Label title={"Phone Number*"} ></Label>
             <Input placeholder={"Enter your Phone number"} type={"number"}></Input>
              <Label title={"Email Address*"}></Label>
             <Input placeholder={"Enter your Email Address"} type={"email"}></Input>
              <Label title={"Password*"}></Label>
             <Input placeholder={"Enter your password"} type={"password"}></Input>
              <Label title={"Company Name*"}></Label>
             <Input placeholder={"Enter your Company name"} type={"text"}></Input>
              <h4>Are you An Ageny?*</h4>
              <div>
                <label>Yes</label>
               <input  type="radio"></input>
               <label style={{ marginLeft: "3rem" }}>No</label>
              <input  type="radio"></input>
              </div>
             <br></br>
            <Link to="/profile">
             <Button title={"Create Account"}></Button></Link>
            
           </div>
        </div>
    )
}

export default CreateAccount;