import LoginForm from "../Components/LoginForm";
import NavBar from "../Components/NavBar";

export default function Login() {
    return(
        <div className="app">
            <NavBar />
            <span className="dot"></span>
            <div className="inputBoxContainer">
                <LoginForm />
            </div>

        </div>
    );
}