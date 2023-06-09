import React, { useEffect, useState } from "react";
import { routePaths } from "../../routes/routes";
import { Link, useNavigate, useLocation } from "react-router-dom";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import Select, { ActionMeta, SingleValue } from "react-select";

interface Props {}

interface Country {
  value: string;
  label: string;
  flag: string;
}

const Step2 = (props: Props) => {
  console.log("Step2 rendered"); // add this line
  const location = useLocation();
  const { ctype, cdescription, ctitle, orgname } = location.state;

  const [state, setState] = useState({
    ctype: ctype,
    cdescription: cdescription,
    ctitle: ctitle,
    orgname: orgname,
    startdate: "",
    enddate: "",
    country: "",
    email: "",
    mobilenum: "",

    //display the user location, email, mobile make it so that the user cant edit
  });

  const navigate = useNavigate();

  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();

  //   const { startdate, enddate, email, country, mobilenum } = state;
  //   console.log(location.state);
  //   console.log(state);

  //   if (!ctype || !cdescription || !ctitle || !orgname) {
  //     alert("Please fill out all fields");
  //     return;
  //   }
const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { startdate, enddate, email, country, mobilenum } = state;

    // Check if any of the input fields are empty
    // if (!startdate || !enddate || !email || !country || !mobilenum) {
    //   console.log("Please fill out all fields");
    //   return;
    // }

    console.log(state);

    // add the navigation to the next page
    navigate("/create-campaignStep3", { state });
  };
    
  const onstartChange: DatePickerProps["onChange"] = (
    date: any,
    dateString: any
  ) => {
    setState({
      ...state,
      startdate: date ? dayjs(date).format("YYYY-MM-DD") : "",
    });
    console.log(date, dateString);
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

  const getOptionLabel = (option: Country): JSX.Element => (
    <>
      <img
        src={option.flag}
        alt={`${option.label} flag`}
        width="20"
        height="20"
      />
      <span>{option.label}</span>
    </>
  );

  const getOptionValue = (option: Country) => option.value;

  const onChange: DatePickerProps["onChange"] = (
    date: any,
    dateString: any
  ) => {
    setState({
      ...state,
      enddate: date ? dayjs(date).format("YYYY-MM-DD") : "",
    });
    console.log(date, dateString);
  };

  return (
    <div className="bg-[EFF4F8] text-black">
      <div className="container mx-auto p-8 flex flex-col md:flex-col lg:flex-row justify-center sm:gap-20 gap-12 items-center">
        <div className="xl:w-1/2 md:w-full flex justify-center">
          <img
            src="assets/images/Step2.png"
            alt="Step1"
            className="object-cover"
          />
        </div>
        <div className="xl:w-1/2 md:w-full lg:px-10 flex flex-col gap-8">
          <div className="text-4xl font-bold text-center lg:text-left">
            <span>Create your</span>{" "}
            <span className="text-[#00B5D5]">Campaign</span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <span className="font-bold text-sm">Campaign Duration</span>
              <div className="flex flex-row w-full gap-5">
                <Space direction="vertical">
                  <DatePicker onChange={onstartChange} />
                </Space>
                <Space direction="vertical">
                  <DatePicker onChange={onChange} />
                </Space>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-sm">Location</span>
              <Select
                  options={countryList}
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  placeholder="Select a country"
                  isSearchable
                  
                  
                  
                  getOptionValue={getOptionValue}
                />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-sm">Your Email</span>
              <input
                type="email"
                placeholder="yourname@example.com"
                className="border border-[#0F0F0F] p-2 rounded-lg outline-none "
                onChange={(e) => setState({ ...state, email: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-sm">Mobile</span>
              <input
                type="text"
                placeholder="+94 77 845 xx79"
                className="border border-[#0F0F0F] p-2 rounded-lg outline-none "
                onChange={(e) =>
                  setState({ ...state, mobilenum: e.target.value })
                }
                required
              />
            </div>
            <div>
              <button
                className="text-[#00B5D5] w-full border hover:bg-[#00B5D5] hover:text-white border-[#00B5D5] bg-none p-3 rounded-md"
                onSubmit={handleSubmit}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step2;
