import React, { useEffect, useState } from "react";
import { routePaths } from "../routes/routes";
import { Link, useNavigate } from "react-router-dom";

type Props = {};
interface Country {
  value: string;
  label: string;
  flag: string;
}
const SignUp = (props: Props) => {
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
      `${fname}, ${lname}, ${email}, ${age}, ${country}, ${phonenum}`
    );

    navigate("../usernamepassword", { state });
  };

  const [countryList, setCountryList] = useState<Country[]>([]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const mappedCountries = data.map((country) => ({
            value: country.name,
            label: country.name,
            flag: country.flag, // add flag property
          }));
          setCountryList(mappedCountries);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const agelist = [
    { value: "18-25 years", label: "18-25 years" },
    { value: "26-35 years", label: "26-35 years" },
    { value: "36-45 years", label: "36-45 years" },
    { value: "46-55 years", label: "46-55 years" },
    { value: "56+ years", label: "56+ years" },
  ];

  const handleAgeChange = (event: { target: { value: any } }) => {
    setState({ ...state, age: event.target.value });
  };

  const handleCountryChange = (selectedOption: { label: any }) => {
    setState({ ...state, country: selectedOption.label });
    setShowCountryDropdown(false);
  };

  
  return (
    <div className="body text-white">
      <div className="container mx-auto flex flex-col justify-center items-center py-20">
        <div className="circle w-52 h-52  rounded-full"></div>
        <form
          onSubmit={handleSubmit}
          className="box relative bottom-40 w-[700px] flex flex-col gap-8 items-center  px-12"
        >
          <div className="py-12 text-center font-bold text-3xl">Sign Up</div>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-2">
              <span>First Name</span>
              <input
                type="text"
                className="w-auto min-w-[266px] outline-none border placeholder:text-white p-3 border-white rounded-md bg-transparent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span>Surname</span>
              <input
                type="text"
                className="w-auto min-w-[266px] outline-none border placeholder:text-white p-3 border-white rounded-md bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-2">
              <span>Email</span>
              <input
                type="email"
                className="w-auto min-w-[266px] outline-none border placeholder:text-white p-3 border-white rounded-md bg-transparent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span>Age Catergory</span>
              <select className="w-auto min-w-[266px] outline-none border placeholder:black p-3 border-white rounded-md bg-transparent">
                <option value="18-25 years">18-25 years</option>
                <option value="26-35 years">26-35 years</option>
                <option value="36-45 years">36-45 years</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-2">
              <span>Country</span>
              <select className="w-auto min-w-[266px] outline-none border placeholder:black p-3 border-white rounded-md bg-transparent">
                <option value="18-25 years">Algeria</option>
                <option value="26-35 years">26-35 years</option>
                <option value="36-45 years">36-45 years</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <span>Mobile Number</span>
              <input
                type="text"
                className="w-auto min-w-[266px] outline-none border placeholder:text-white p-3 border-white rounded-md bg-transparent"
              />
            </div>
          </div>
          <div className="py-5">
            <button className="bg-[#FEAE0F] rounded-md px-20 py-2 flex mx-auto ">
              Next
            </button>
          </div>
          <div className="text-center text-sm pb-4">
            <span>Already have an account? </span>
            <Link to={routePaths.login}>
              <span className="font-bold cursor-pointer">Login</span>
            </Link>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
