import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {}

const Step1 = (props: Props) => {
  console.log("Step1 rendered"); // add this line

  const [state, setState] = useState({
    ctype: "",
    cdescription: "",
    ctitle: "",
    orgname: "",
  });

  //navigation
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { ctype, cdescription, ctitle, orgname } = state;

    // Check if any of the input fields are empty
    // if (!ctype || !cdescription || !ctitle || !orgname) {
    //   console.log("Please fill out all fields");
    //   return;
    // }

    console.log(state);

    // add the navigation to the next page
    navigate("/create-campaignStep2", { state });
  };

  return (
    <div className="bg-[EFF4F8] text-black">
      <div className="container mx-auto p-8 flex flex-col md:flex-col lg:flex-row justify-center sm:gap-20 gap-12 items-center">
        <div className="xl:w-1/2 md:w-full flex justify-center">
          <img
            src="assets/images/Step1.png"
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
              <span className="font-bold text-sm">Campaign Type</span>
              <select
                className="border border-black p-2 rounded-lg  outline-none "
                onChange={(e): void =>
                  setState({ ...state, ctype: e.target.value })
                }
              >
                <option value="Save the Children">Save the Children</option>
                <option value="World Wildlife Fund">World Wildlife Fund</option>
                <option value="National Trust for Historic Preservations">
                  National Trust for Historic Preservations
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-sm">Campaign Description</span>
              <input
                type="text"
                placeholder="Tell us more about your campaign"
                className="border border-[#0F0F0F] p-2 rounded-lg h-[124px] outline-none "
                onChange={(e) =>
                  setState({ ...state, cdescription: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-sm">Campaign Title</span>
              <input
                type="text"
                placeholder="Name your amazing campaign"
                className="border border-[#0F0F0F] p-2 rounded-lg outline-none "
                onChange={(e) => setState({ ...state, ctitle: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-sm">Organization Name</span>
              <input
                type="text"
                placeholder="What is the name of your team?"
                className="border border-[#0F0F0F] p-2 rounded-lg outline-none "
                onChange={(e) =>
                  setState({ ...state, orgname: e.target.value })
                }
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

export default Step1;
