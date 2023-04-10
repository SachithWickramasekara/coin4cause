import NavBar from "../Components/NavBar";
import React, { Component } from "react";

// THE USERNAME, EMAIL, Password is not READ CORRECTLY BELOW

export default class Hometemp extends Component {
    componentDidMount() {
        fetch("http://localhost:5000/userData", {
                method:"POST",
                crossDomain: "true",
                headers: {
                    "Content-Type": "application/json",
                    Accept:"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                body:JSON.stringify({
                    token:window.localStorage.getItem("token")
            
                }),
                }).then((res)=>res.json())
                .then((data) => {
                console.log(data, "userData");
                if(data.status === "ok") {
                    alert("login Success");
                    window.localStorage.setItem("token", data.data);
                }
                })
    }
    render() {
        return(
            <div className="app">
                <NavBar />
                <h1>This is the home page. Connect Sachitchs page to this.</h1>
            </div>
        );
    }
    
}