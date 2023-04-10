import React from "react";
import NavBar from "../Components/NavBar";
import UsernamepasswordForm from "../Components/usernamePass";

export default function UsernamePassword() {
    return(
        <div className="app">
            <NavBar />
            <span className="dot"></span>
            <div className="inputBoxContainer">
                <UsernamepasswordForm />
            </div>

        </div>

        
    );
}