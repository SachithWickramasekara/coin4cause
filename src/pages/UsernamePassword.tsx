import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {};

const UsernamePassword = (props: Props) => {
  const location = useLocation();
  const { fname, lname, email, age, country, phonenum } = location.state;

  const [state, setState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [msg, setMsg] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { username, password, confirmPassword } = state;
    console.log(username, password, confirmPassword); //remove this

    if (password === confirmPassword && password != "") {
      fetch("https://coin4cause-server.vercel.app/userpass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          uname: username,
          password,
          email: email,
        }),
      })
        .then((res) => res.json())
        .then(async (data) => {
          console.log(data, "userAccountRegistered");
          try {
            const url = "https://coin4cause-server.vercel.app/users";
            const { data: res } = await axios.post(url, data);
            setMsg(res.message); //CHECK
          } catch (error) {}
        });
      //get the data from the previous page
      fetch("https://coin4cause-server.vercel.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          age,
          country,
          phonenum,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userDetailsRegistered");
        });
      alert("Verification email sent. Please Verify");
    } else {
      console.log("Passwords Does not match");
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
      className="body text-white h-screen body py-20 overflow-y-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center ">
        <motion.div
          className="circle w-52 h-52  rounded-full"
          animate={{
            rotate: 360,
            transition: { repeat: Infinity, duration: 2 },
          }}
        />
        <motion.form
          onSubmit={handleSubmit}
          className="box relative bottom-40 sm:w-[480px] px-12 rounded-3xl"
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
            Sign Up
          </motion.div>
          <motion.div
            className="flex flex-col gap-8 "
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
              placeholder="Username"
              onChange={(e) => setState({ ...state, username: e.target.value })}
              className="w-full outline-none border placeholder:text-gray-300 text-white p-3 border-white rounded-md bg-transparent"
              required
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              onChange={(e) => setState({ ...state, password: e.target.value })}
              className="w-full outline-none border placeholder:text-gray-300 text-white p-3 border-white rounded-md bg-transparent"
              required
            />
            <input
              type="password"
              name="ConfirmPassword"
              placeholder="ConfirmPassword"
              onChange={(e) =>
                setState({ ...state, confirmPassword: e.target.value })
              }
              className="w-full outline-none border placeholder:text-gray-300 text-white p-3 border-white rounded-md bg-transparent"
              required
            />
            <div className="py-5">
              <motion.button
                className="bg-[#FEAE0F] rounded-md px-20 py-2 flex mx-auto "
                variants={buttonVariants}
                whileHover="hover"
              >
                Continue
              </motion.button>
            </div>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default UsernamePassword;
