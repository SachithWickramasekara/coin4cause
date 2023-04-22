import { useState } from "react";
import { routePaths } from "../../routes/routes";
import { Link, useNavigate, useLocation } from "react-router-dom";

interface Props {}

const Step2 = (props: Props) => {

  console.log("Step2 rendered"); // add this line
  const location = useLocation();
  const { ctype, cdescription, ctitle, orgname} = location.state;

  const [state, setState] = useState({
    ctype: ctype,
    cdescription: cdescription,
    ctitle: ctitle,
    orgname: orgname,
    startdate: "",
    enddate: "",
    email: "",
    mobilenum: "",
    

    //display the user location, email, mobile make it so that the user cant edit

  });

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { startdate, enddate, email, mobilenum} = state;
    console.log(location.state);
    console.log(state);

    //add the navigation to the next page
    navigate("/create-campaignStep3", {state});

  }

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
          <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm">Campaign Duration</span>
            <div className="flex flex-row w-full gap-5">
              <input
                type="text"
                placeholder="Start Date"
                className="border border-[#0F0F0F] p-2 rounded-lg  outline-none w-full"
                onChange={(e) => setState({ ...state, startdate: e.target.value })}
              />
              <input
                type="text"
                placeholder="End Date"
                className="border border-[#0F0F0F] p-2 rounded-lg  outline-none w-full"
                onChange={(e) => setState({ ...state, enddate: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm">Location</span>
            <select className="border border-black p-2 rounded-lg  outline-none ">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm">Your Email</span>
            <input
              type="email"
              placeholder="yourname@example.com"
              className="border border-[#0F0F0F] p-2 rounded-lg outline-none "
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm">Mobile</span>
            <input
              type="text"
              placeholder=""
              className="border border-[#0F0F0F] p-2 rounded-lg outline-none "
              onChange={(e) => setState({ ...state, mobilenum: e.target.value })}
            />
          </div>
          <div>
            <button className="text-[#00B5D5] w-full border hover:bg-[#00B5D5] hover:text-white border-[#00B5D5] bg-none p-3 rounded-md" onSubmit={handleSubmit}>
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
