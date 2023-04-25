import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { routePaths } from "../routes/routes";
import { motion } from "framer-motion";

const Login = () => {
  const responseMessage = (response: any) => {
    console.log(response);
    navigate("/");
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
      const response = await fetch(
        "https://coin4cause-server.vercel.app/login-user",
        {
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
        }
      );

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

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <motion.div
      className="body h-screen text-white overflow-y-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center py-20">
        <motion.div
          className="circle w-52 h-52 p-8 rounded-full"
          animate={{
            rotate: 360,
            transition: { repeat: Infinity, duration: 2 },
          }}
        />
        <motion.form
          onSubmit={handleSubmit}
          className="box relative bottom-40 sm:w-[480px] p-8 rounded-3xl"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="py-12 text-center font-bold text-3xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
          >
            Login
          </motion.div>
          <motion.div
            className="flex flex-col gap-8 lg:px-8  sm:px-0"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
          >
            <input
              type="text"
              name="Username"

              
              placeholder="email"
              onChange={(e) => setState({ ...state, email: e.target.value })}
              className="w-full outline-none border placeholder:text-white p-3 border-white rounded-md bg-transparent"

              required
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              minLength={6}
              onChange={(e) => setState({ ...state, password: e.target.value })}

              className="w-full outline-none border placeholder:text-gray-300 p-3 border-white rounded-md bg-transparent text-white"

              required
            />
          </motion.div>
          <motion.div
            className="flex justify-end py-4 text-sm font-normal px-8 sm:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.6 },
            }}
          >
            Forgot Password?
          </motion.div>
          <motion.div
            className="py-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.8 },
            }}
          >
            <motion.button
              className="bg-[#FEAE0F] rounded-md px-20 py-2 flex mx-auto"
              variants={buttonVariants}
              whileHover="hover"
            >
              Login
            </motion.button>
          </motion.div>
          <motion.div
            className="flex justify-center pb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1 },
            }}
          >
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </motion.div>
          <motion.div
            className="text-center text-sm pb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1.2 },
            }}
          >
            <span>Don’t have an account? </span>
            <Link to={routePaths.signup}>
              <span className="font-bold cursor-pointer">SIGN UP</span>
            </Link>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Login;
