import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

interface Props {}

const Step4 = (props: Props) => {

  console.log("Step4 rendered"); // add this line
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const [base64, setBase64] = useState<string | undefined>();

  const location = useLocation();
  const {
    ctype,
    cdescription,
    ctitle,
    orgname,
    startdate,
    enddate,
    email,
    mobilenum,
    budget,
    mindonation,
    currencies,
  } = location.state;

  async function handleFileSelect (event: React.ChangeEvent<HTMLInputElement>) {
    // get the selected files
    const files = event.target.files;
    setSelectedFiles(files);

    console.log(files);
    
    if (!files) {
      return;
    }
  
    const file = files[0];
    const base64 = await convertToBase64(file);
  
    // set the selected files state
    setBase64(base64);
  }



  const navigate = useNavigate();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    
    e.preventDefault();

    fetch("https://coin4cause-server.vercel.app/create-campaign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        ctype,
        cdescription,
        ctitle,
        orgname,
        startdate,
        enddate,
        mobilenum,
        budget,
        mindonation,
        currencies,
        base64,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Campaign Created");
      });
   // alert("Campaign Created");

    //add the navigation to the next page
    navigate("/create-campaignStep5");
  };


  return (
    <div className="text-black">
      <div className="container mx-auto flex flex-col gap-8 justify-center text-center items-center lg:px-80 md:p-20 p-6 lg:py-20">
        <div className="text-4xl font-bold">Add Photos or Videos</div>
        <div className="text-base font-medium ">
          Including compelling images in your campaign is an excellent way to
          visually communicate your message and capture the attention of
          potential donors.
        </div>
        <div className="text-sm font-normal text-[#777777]">
          Images can help to convey the urgency of your cause, demonstrate the
          impact of donations, and establish an emotional connection with your
          audience. By using high-quality images that are relevant to your
          campaign, you can create a compelling narrative that inspires people
          to support your cause.
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="border border-dashed border-black p-20 rounded-md hover:bg-gray-100 w-2/5 flex mx-auto justify-center group">
            <label
              htmlFor="file-input"
              className="bg-none border border-[#00B5D5] text-[#00B5D5] px-3 py-1 rounded-md group-hover:bg-[#00B5D5] group-hover:text-white cursor-pointer"
            >
              Upload
            </label>
            <input
              type="file"
              accept="*"
              id="file-input"
              className="hidden"
              onChange={handleFileSelect}
              multiple
            />
          </div>
          {selectedFiles && (
            <div className="mt-10">
              <div className="text-2xl font-bold mb-4">Selected Files:</div>
              <div className="flex flex-wrap gap-4">
                {Array.from(selectedFiles).map((file, index) => (
                  <div key={index}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`file-${index}`}
                      className="h-40 object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="w-full">
            <button
              className="bg-none border border-[#00B5D5] text-[#00B5D5] p-2 rounded-md hover:bg-[#00B5D5] hover:text-white w-full"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  ); 
};

export default Step4;


function convertToBase64(file: Blob): Promise<string> {
  if (!(file instanceof Blob)) {
    throw new Error("File is not a valid Blob object");
  }

  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result as string)
    };
    fileReader.onerror = (error) => {
      reject(error)
    };
    fileReader.readAsDataURL(file);
  });
}
