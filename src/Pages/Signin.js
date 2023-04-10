import SigninForm from "../Components/SigninForm";
import NavBar from "../Components/NavBar";

export default function Signin() {
    return(
        <div className="app">
            <NavBar />
            <span className="dot"></span>
            <div className="inputBoxContainer">
                <SigninForm />
            
            </div>

        </div>
    );
}