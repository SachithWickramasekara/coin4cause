import React from 'react'
import { Link } from 'react-router-dom';
import { routePaths } from '../../routes/routes';

interface Props {
    
}

const Step3 = (props: Props) => {
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
            <div className="flex flex-col gap-3">
              <span className="font-bold text-sm">Amount planned to raise</span>
              <input
                type="text"
                placeholder="Start small or go big"
                className="border border-[#0F0F0F] p-2 rounded-lg  outline-none w-full"
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
            <div className='lg:pt-0 xl:pt-32'>
              <Link to={routePaths.step4}>
                <button className="text-[#00B5D5] w-full border hover:bg-[#00B5D5] hover:text-white border-[#00B5D5] bg-none p-3 rounded-md">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Step3
