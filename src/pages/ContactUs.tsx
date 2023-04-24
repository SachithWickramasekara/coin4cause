import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {}


const ContactUs = (props: Props) => {

  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { fname, lname, email, message } = state;
  
    try {
      const response = await fetch("https://coin4cause-server.vercel.app/contact-us", {
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
          message,
        }),
      });
  
      const data = await response.json();
      if (data.status === "ok") {
        // Store the JWT token in localStorage or session storage
        localStorage.setItem("token", data.token);
        // Redirect to the home page
        
      } else {
        alert("Message sent to the developers ");

      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <div className="container mx-auto text-center sm:p-20 p-8 flex flex-col gap-8">
        <div className="text-5xl font-bold">Contact Us</div>
        <div className="lg:px-44">
          Questions, bug reports, feedback, feature requests - we are here for
          it all Already use Coin4Cause? Sing in so we can tailor your support
          experience. If that’s not possible, we’d still like to here from you.
        </div>
        <div>
          <div className="bg-[#EFF4F8] flex flex-col items-start lg:p-20 md:w-full  gap-4 rounded-lg p-8 lg:w-3/5 lg:mx-auto">
            <div className="flex flex-col w-full ">
              <form className="" onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row lg:gap-8  gap-2 justify-center items-center pt-2 lg:py-4">
                  <div className="flex flex-col w-full">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full h-[55px] rounded-lg px-4 border border-[#08415C] placeholder:text-[#08415C] bg-transparent"
                      name="firstName"
                      onChange={(e) => setState({ ...state, fname: e.target.value })}
                      required
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full h-[55px] rounded-lg px-4 border border-[#08415C] bg-transparent placeholder:text-[#08415C]"
                      name="lastName"
                      onChange={(e) => setState({ ...state, lname: e.target.value })}
                      required
                    />

                  </div>
                </div>
                <div className="lg:py-4 pt-2 pb-4 flex justify-center items-center">
                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full h-[55px] rounded-lg px-4 border border-[#08415C] bg-transparent placeholder:text-[#08415C]"
                      name="message"
                      onChange={(e) => setState({ ...state, email: e.target.value })}
                      required
                    />

                  </div>
                </div>
                <div className=" lg:py-4 pt-2 pb-4 flex justify-center items-center">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Message"
                      className="w-full h-[96px] rounded-lg px-4 border border-[#08415C] bg-transparent placeholder:text-[#08415C]"
                      name="message"
                      onChange={(e) => setState({ ...state, message: e.target.value })}
                      required
                    />

                  </div>
                </div>
                <div className="flex mx-auto justify-center lg:items-start   items-center">
                  <button className="bg-[#08415C] w-3/5 h-[50px] rounded-lg text-white font-semibold">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
