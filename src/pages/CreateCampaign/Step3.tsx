import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { routePaths } from "../../routes/routes";

interface Props {}

const Step3 = (props: Props) => {
  console.log("Step3 rendered"); // add this line
  const location = useLocation();
  const { ctype, cdescription, ctitle, orgname, startdate, enddate } =
    location.state;

  const [state, setState] = useState({
    budget: "",
    mindonation: "",
    currency: "",

    //display the user location, email, mobile make it so that the user cant edit
  });

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { budget, mindonation, currency } = state;
    console.log(location.state);
    console.log(state);

    //add the navigation to the next page
    navigate("/create-campaignStep4", { state });
  };

  return (
    <div className="bg-[EFF4F8] text-black">
      <div className="container mx-auto p-8 flex flex-col md:flex-col lg:flex-row justify-center sm:gap-20 gap-12 items-center lg:">
        <div className="xl:w-1/2 md:w-full flex justify-center">
          <img
            src="assets/images/Step3.png"
            alt="Step1"
            className="object-cover"
          />
        </div>
        <div className="xl:w-1/2 md:w-full lg:px-10 flex flex-col gap-8 lg:pt-12">
          <div className="text-4xl font-bold text-center lg:text-left">
            <span>Create your</span>{" "}
            <span className="text-[#00B5D5]">Campaign</span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <span className="font-bold text-sm">Amount planned to raise</span>
              <input
                type="text"
                placeholder="Start small or go big"
                className="border border-[#0F0F0F] p-2 rounded-lg  outline-none w-full"
                onChange={(e) => setState({ ...state, budget: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-sm">Minimum donation amount</span>
              <select className="border border-black p-2 rounded-lg  outline-none ">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-sm">Accepted currency types</span>
              <div className="flex flex-row w-full gap-5">
                <input
                  type="button"
                  placeholder="Start Date"
                  className="border border-[#0F0F0F] p-2 rounded-lg  outline-none w-full"
                  value="Major Currencies"
                />
                <input
                  type="button"
                  placeholder="End Date"
                  className="border border-[#0F0F0F] p-2 rounded-lg  outline-none w-full"
                  value="Cryptocurrencies"
                />
              </div>
            </div>
            <div className="lg:pt-0 xl:pt-32">
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

export default Step3;
