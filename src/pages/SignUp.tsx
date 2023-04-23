import React, { useEffect, useMemo, useState } from "react";
import { routePaths } from "../routes/routes";
import { Link, useNavigate } from "react-router-dom";
import Select, { ActionMeta, SingleValue } from "react-select";
import { motion } from "framer-motion";

interface Country {
  value: string;
  label: string;
  flag: string;
}

interface Age {
  value: string;
  label: string;
}

const SignUp = () => {
  const responseMessage = (response: any) => {
    console.log(response);
    navigate("../hometemp");
  };
  const errorMessage = (error: any) => {
    console.log(error);
  };

  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    age: "",
    country: "",
    phonenum: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { fname, lname, email, age, country, phonenum } = state; //remove this
    console.log(
      { fname },
      { lname },
      { email },
      { age },
      { country },
      { phonenum }
    );

    navigate("../usernamepassword", { state });
  };

  const agelist: Age[] = [
    { value: "18-25 years", label: "18-25 years" },
    { value: "26-35 years", label: "26-35 years" },
    { value: "36-45 years", label: "36-45 years" },
    { value: "46-55 years", label: "46-55 years" },
    { value: "56+ years", label: "56+ years" },
  ];

  const [selectedAge, setSelectedAge] = useState<Age | null>(null);

  const handleAgeChange = (
    selectedOption: SingleValue<Age>,
    actionMeta: ActionMeta<Age>
  ) => {
    setSelectedAge(selectedOption);
  };

  const [countryList, setCountryList] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const mappedCountries = data.map((country) => ({
            value: country.name,
            label: country.name,
            flag: country.flag,
          }));
          setCountryList(mappedCountries);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCountryChange = (selectedOption: Country | null) => {
    setSelectedCountry(selectedOption);
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "transparent",
      borderColor: state.isFocused ? "white" : "white",
      color: "white",
      borderRadius: "10px",
      boxShadow: "none",
      width: "auto",
      minWidth: "266px",
      padding: "3px",
      height: "50px",
      "&:hover": {
        borderColor: "white",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "white"
        : state.isFocused
        ? "white"
        : "transparent",
      color: state.isSelected ? "black" : state.isFocused ? "black" : "black",

      "&:hover": {
        backgroundColor: "#4B5563",
        color: "white",
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "white",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "white",
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "white",
      "&:hover": {
        color: "white",
      },
    }),
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
      className=" text-white h-screen body "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col justify-center items-center p-10 body">
        <motion.div
          className="circle w-52 h-52 p-8 rounded-full"
          animate={{
            rotate: 360,
            transition: { repeat: Infinity, duration: 2 },
          }}
        />
        <motion.form
          onSubmit={handleSubmit}
          className="box relative bottom-40 flex flex-col gap-12 items-center p-10 rounded-3xl"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-center font-bold text-3xl"
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
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
          >
            <motion.div
              className="flex sm:flex-row flex-col gap-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
            >
              <motion.div
                className="flex flex-col "
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              >
                <label className="text-lg">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-auto min-w-[266px] outline-none border placeholder:text-white p-3 border-white rounded-md bg-transparent"
                  onChange={(e) =>
                    setState({ ...state, fname: e.target.value })
                  }
                  required
                />
              </motion.div>
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                <label className="text-lg">Surname</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-auto min-w-[266px] outline-none border placeholder:text-white p-3 border-white rounded-md bg-transparent"
                  onChange={(e) =>
                    setState({ ...state, lname: e.target.value })
                  }
                  required
                />
              </motion.div>
            </motion.div>
            <div className="flex sm:flex-row flex-col gap-4">
              <motion.div
                className="flex flex-col "
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                <label className="text-lg">Email</label>
                <input
                  type="email"
                  placeholder="johnDoe@theboys.com"
                  className="w-auto min-w-[266px] outline-none border placeholder:text-white p-3 border-white rounded-md bg-transparent"
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                  required
                />
              </motion.div>
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                <label className="text-lg">Age Catergory</label>
                <Select
                  options={agelist}
                  value={selectedAge}
                  onChange={handleAgeChange}
                  placeholder="Select your age group"
                  isSearchable
                  styles={customStyles}
                />
              </motion.div>
            </div>
            <motion.div
              className="flex sm:flex-row flex-col gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.6 },
              }}
            >
              <div className="flex flex-col">
                <label className="text-lg">Country</label>
                <Select
                  options={countryList}
                  value={selectedCountry}
                  //className="w-auto min-w-[266px] outline-none border placeholder:text-white p-3 border-white rounded-md bg-transparent"
                  onChange={handleCountryChange}
                  placeholder="Select a country"
                  isSearchable
                  styles={customStyles}
                />
              </div>
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                <label className="text-lg">Mobile Number</label>
                <input
                  type="text"
                  placeholder="+94 77 51xx xxx"
                  className="w-auto min-w-[266px] outline-none border placeholder:text-white p-3 border-white rounded-md bg-transparent"
                  onChange={(e) =>
                    setState({ ...state, phonenum: e.target.value })
                  }
                  required
                />
              </motion.div>
            </motion.div>
            <div className="py-5">
              <motion.button
                className="bg-[#FEAE0F] rounded-md px-20 py-2 flex mx-auto "
                variants={buttonVariants}
                whileHover="hover"
              >
                Next
              </motion.button>
            </div>
            <motion.div
              className="text-center text-sm pb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 1 },
              }}
            >
              <span >Already have an account? </span>
              <Link to={routePaths.login}>
                <span className="font-bold cursor-pointer">Login</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default SignUp;
