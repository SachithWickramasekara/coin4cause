import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";

interface Props {}

const Step4 = (props: Props) => {
  console.log("Step4 rendered"); // add this line
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    // get the selected files
    const files = event.target.files;

    // set the selected files state
    setSelectedFiles(files);
  }

  function handleUpload() {
    // check if any files are selected
    if (selectedFiles && selectedFiles.length > 0) {
      // convert FileList to an array
      const filesArray = Array.from(selectedFiles);
  
      // create a new XMLHttpRequest object
      const xhr = new XMLHttpRequest();
  
      // set up the upload progress tracking
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          console.log(`Upload progress: ${percentComplete}%`);
        }
      });
  
      // send the files to the server
      xhr.open('POST', '/upload');
      const formData = new FormData();
      filesArray.forEach((file) => {
        formData.append('files', file);
      });
      xhr.send(formData);
  
    } else {
      console.log('No files selected.');
    }
  }
  

  const navigate = useNavigate();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();


    //add the navigation to the next page
    navigate("/done");

  }

  return (
    <div className="text-black">
      <div className="container mx-auto flex flex-col gap-8 justify-center text-center items-center lg:px-80 md:p-20 p-6 lg:py-20">
        <div className="text-4xl font-bold">Add Photos or Videos</div>
        <div className="text-base font-medium ">
          Including compelling images in your campaign is an excellent way to visually communicate your message and capture the attention of potential donors.
        </div>
        <div className="text-sm font-normal text-[#777777]">
          Images can help to convey the urgency of your cause, demonstrate the impact of donations, and establish an emotional connection with your audience. By using high-quality images that are relevant to your campaign, you can create a compelling narrative that inspires people to support your cause.
        </div>
        <form onSubmit={handleSubmit}>
        <div className="border border-dashed border-black p-20 rounded-md hover:bg-gray-100">
          <label htmlFor="file-input" className="bg-none border border-[#00B5D5] text-[#00B5D5] px-3 py-1 rounded-md hover:bg-[#00B5D5] hover:text-white">
            Upload
          </label>
          <input type="file" accept="image/*" id="file-input" className="hidden" onChange={handleFileSelect} multiple />
        </div>
        {selectedFiles && (
          <div className="mt-10">
            <div className="text-2xl font-bold mb-4">Selected Files:</div>
            <div className="flex flex-wrap gap-4">
              {Array.from(selectedFiles).map((file, index) => (
                <div key={index}>
                  <img src={URL.createObjectURL(file)} alt={`file-${index}`} className="h-40 object-cover rounded-md" />
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="w-3/5">
          <button className="bg-none border border-[#00B5D5] text-[#00B5D5] w-full p-2 rounded-md hover:bg-[#00B5D5] hover:text-white" onClick={handleUpload}>
            Next
          </button>
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default Step4;
