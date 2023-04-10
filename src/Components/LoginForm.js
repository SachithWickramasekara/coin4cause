import React from "react";
import InputField from "./InputField";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function LoginForm() {

    const [state, setState] = useState({
        email: "",
        password: "",

      });

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click");
        const { email, password } = state;
        console.log(email, password);

        fetch("http://localhost:5000/login-user", {
                method:"POST",
                crossDomain: "true",
                headers: {
                    "Content-Type": "application/json",
                    Accept:"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                body:JSON.stringify({
                    email,
                    password,
            
                }),
                }).then((res)=>res.json())
                .then((data) => {
                    console.log(data, "userAccountRegistered");
                    if(data.status === "ok") {
                        navigate("../hometemp");
                    }

                });
        
    }
    
    return(
        <div className="inputDetails">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <InputField name={'Username'} type={'text'} onChange= {(e) => setState({ ...state, email: e.target.value})}/>
                <InputField name={'Password'} type={'password'} onChange= {(e) => setState({ ...state, password: e.target.value})} />
                <p>Forgot Password?</p>
                <button>Login</button>
                <p>Don't have an account? <a href="../signin"><b>SIGN UP</b></a></p>
            </form>
            

                    
        </div>
    );
}

export default LoginForm;