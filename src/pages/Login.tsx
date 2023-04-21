import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { routePaths } from "../routes/routes";


interface LoginProps {
  onLogin: () => void;
}

const Login = () => {
  const responseMessage = (response: any) => {
    console.log(response);
    navigate("../hometemp");
  };
  const errorMessage = () => {
    console.log("Error occurred during Google login");
  };

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { email, password } = state;
  
    try {
      const response = await fetch("https://coin4cause-server.vercel.app/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
      if (data.status === "ok") {
        // Store the JWT token in localStorage or session storage
        localStorage.setItem("token", data.token);
        // Redirect to the home page
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  
  return (
    <div className="body text-white overflow-y-hidden">
      <div className="container mx-auto flex flex-col justify-center items-center py-20">
        <div className="circle w-52 h-52  rounded-full"></div>
        <form
          onSubmit={handleSubmit}
          className="box relative bottom-40 w-[480px] px-12"
        >
          <div className="py-12 text-center font-bold text-3xl">Login</div>
          <div className="flex flex-col gap-8 ">
            <input
              type="text"
              name="Username"
              placeholder="Username"
              onChange={(e) => setState({ ...state, email: e.target.value })}
              className="w-full outline-none border placeholder:text-white p-3 border-white rounded-md bg-transparent"
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              onChange={(e) => setState({ ...state, password: e.target.value })}
              className="w-full outline-none border placeholder:text-white p-3 border-white rounded-md bg-transparent"
            />
          </div>
          <div className="flex justify-end py-4 text-sm font-normal">
            Forgot Password?
          </div>
          <div className="py-5">
            <button className="bg-[#FEAE0F] rounded-md px-20 py-2 flex mx-auto ">
              Login
            </button>
          </div>
          <div className="flex justify-center pb-4">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </div>
          <div className="text-center text-sm pb-4">
            <span>Don’t have an account? </span>
            <Link to={routePaths.signup} >
            <span className="font-bold cursor-pointer">SIGN UP</span>
            </Link>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
