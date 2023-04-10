import React, { useState, useEffect } from "react";
import { SignInInputBox, DropDownBox } from "./SignInInputBox";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from "@react-oauth/google";

function SigninForm() {

  const responseMessage = (response) => {
    console.log(response);
    navigate("../hometemp");
  };
  const errorMessage = (error) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const { fname, lname, email, age, country, phonenum } = state; //remove this
    console.log(`${fname}, ${lname}, ${email}, ${age}, ${country}, ${phonenum}`);
    
    navigate('../usernamepassword', { state });

  };


  const [countryList, setCountryList] = useState([]);
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

  const handleAgeChange = (event) => {
    setState({ ...state, age: event.target.value });
  };
  

  const handleCountryChange = (selectedOption) => {
    setState({ ...state, country: selectedOption.label });
    setShowCountryDropdown(false);
  };
  

  return (
    <div className="inputDetails">
      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "25px",
          }}
        >
          <SignInInputBox
            name={"First Name"}
            type={"text"}
            topic={"First Name"}
            onChange={(e) => setState({ ...state, fname: e.target.value })}
          />
          <SignInInputBox
            name={"Surname"}
            type={"text"}
            topic={"Surname"}
            onChange={(e) => setState({ ...state, lname: e.target.value })}
          />
          <SignInInputBox
            name={"youremail@example.com"}
            type={"text"}
            topic={"Email"}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <DropDownBox options={agelist} topic={"Age Category"} onChange={handleAgeChange} name={"18-25 years"}/>

          <DropDownBox
            options={countryList}
            topic={"Country"}
            onChange={handleCountryChange}
            name={"Sri Lanka"}
            
          />

          <SignInInputBox
            name={"+41 xxx xxx xxx"}
            type={"text"}
            topic={"Mobile Number"}
            onChange={(e) => setState({ ...state, phonenum: e.target.value })}
          />
        </div>
        <button type="submit">Next</button>
      </form>
      <GoogleLogin
        onSuccess={responseMessage}
        onError={errorMessage}
      />
      <br></br>
      <p>
        Already have an account?{" "}
        <a href="../login">
          <b>LOGIN</b>
        </a>
      </p>
    </div>
  );
}

export default SigninForm;
