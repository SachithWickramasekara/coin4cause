import InputField from "./InputField";
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UsernamepasswordForm() {

    const location = useLocation();
    const { fname, lname, email, age, country, phonenum } = location.state;

    const [state, setState] = useState({
        username: "",
        password: "",
        confirmPassword: ""
      });

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, confirmPassword } = state;
        console.log(username, password, confirmPassword); //remove this

        if(password === confirmPassword ){
            fetch("http://localhost:5000/userpass", {
                method:"POST",
                crossDomain: "true",
                headers: {
                    "Content-Type": "application/json",
                    Accept:"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                body:JSON.stringify({
                    uname: username,
                    password,
                    email: email,
            
                }),
                }).then((res)=>res.json())
                .then((data) => {
                console.log(data, "userAccountRegistered");
                })
    
            //get the data from the previous page
            fetch("http://localhost:5000/register", {
                method:"POST",
                crossDomain: "true",
                headers: {
                    "Content-Type": "application/json",
                    Accept:"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                body:JSON.stringify({
                    fname,
                    lname,
                    email,
                    age,
                    country,
                    phonenum
            
                }),
                }).then((res)=>res.json())
                .then((data) => {
                console.log(data, "userDetailsRegistered");
                })
    
                navigate('../login');
        }else {
            console.log("Passwords Does not match")
        }

        

        };

    return(


        <div className="inputDetails">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <InputField name={'Username'} type={'text'} width={"100px"} onChange={(e) => setState({ ...state, username: e.target.value })}/>
                <InputField name={'Password'} type={'password'} width={'400px'} onChange={(e) => setState({ ...state, password: e.target.value })}/>
                <InputField name={'Confirm Password'} type={'password'} width={'400px'} onChange={(e) => setState({ ...state, confirmPassword: e.target.value })}/>
                <button type="submit">Continue</button>
            </form>
            

                    
        </div>
    );
}

export default UsernamepasswordForm;