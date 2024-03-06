import AuthLeft from "../../../layout/authLeft/AuthLeft";
import "./newPassword.scss";
import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SetNewPasswordForm = () => {
  const [passwords, setPasswords] = useState();
  const [message, setMessage] = useState('');
  const navigate=useNavigate()

const changeHandler=(e)=>{
  const {name,value}=e.target
  setPasswords({...passwords,[name]:value})
}

  const onSubmit = (e) => {
    e.preventDefault()
   if(passwords){
    let {newPassword,confirmPassword}=passwords
    console.log(newPassword===confirmPassword)
    if (newPassword === confirmPassword) {
      // TODO: Implement logic to set the new password
      navigate("../login")
      // Display success message
      setMessage('Password successfully set!');
    } else {
      // Display error message if passwords do not match
      setMessage('Passwords do not match. Please try again.');
      alert("error")
    }
   }

    // Update the user's password here.
  };

  useEffect(()=>{
    console.log(passwords)
  },[passwords])

  return (
    <div className="set-new-passowrd">
      <AuthLeft />

      <form  className="input-field">
        <div className="title-text">
          <h1 id="heading">Set Your Password</h1>
          <p id="paragraph">Welcome back! please enter your detail</p>
        </div>

        <div className="textfield">
          <TextField
            className="input-password"
            label="New Password"
            type="password"
            name="newPassword"
            value={passwords && passwords.newPassword}
            onChange={changeHandler}
          />
          <TextField
            className="input-password"
            label="Conform new Password"
            name="confirmPassword"
            type="password"
            value={passwords && passwords.confirmPassword}
            onChange={changeHandler}
          />
          
        </div>

        <Button id={passwords && passwords.newPassword===passwords.confirmPassword?"password-btn-active":"password-btn"}  onClick={onSubmit}>Set New Password</Button>
      </form>
    </div>
  );
};

export default SetNewPasswordForm;
