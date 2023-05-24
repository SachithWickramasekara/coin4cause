import React, { useEffect, useState } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";

type Props = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedType: any;
  setSelectedType: (term: string) => void;
};

interface Type {
  value: string;
  label: string;
}

interface MinDonation {
  value: string;
  label: string;
}

interface Country {
  value: string;
  label: string;
  flag: string;
}

const CampaignButtonSection = ({ searchTerm, setSearchTerm, selectedType, setSelectedType,}: Props) => {
  const typeList: Type[] = [
    { value: "Social", label: "Social" },
    { value: "Environment", label: "Environment" },
    { value: "Cultural", label: "Cultural" },
    { value: "Religious", label: "Religious" },
    { value: "Community", label: "Community" },
    { value: "Research", label: "Research" },
  ];

  const minDonationList: Type[] = [
    { value: "1$", label: "1$" },
    { value: "5$", label: "5$" },
    { value: "10$", label: "10$" },
    { value: "50$", label: "50$" },
  ];

  const selectedTypeValue = selectedType ?? { value: '', label: 'All' };
  // const [selectedMinDonation, setSelectedMinDonation] = useState<Type | null>(null);

  const [countryList, setCountryList] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  // const [minamount, setMinAmount] = useState(0);
  // const [maxamount, setMaxAmount] = useState(0);

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

  // const handleMinDonationChange = (
  //   selectedOption: SingleValue<MinDonation>,
  //   actionMeta: ActionMeta<MinDonation>
  // ) => {
  //   setSelectedMinDonation(selectedOption);
  // };

  const handleTypeChange = (
    selectedOption: SingleValue<any>,
    actionMeta: ActionMeta<Type>
  ) => {
    setSelectedType(selectedOption);
    console.log(selectedOption);
  };

  // const handleMinAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setMinAmount(parseFloat(value));
  // };

  // const handleMaxAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setMaxAmount(parseFloat(value));
  // };

  const filterCampaigns = () => {
    // Perform the filtering based on selected filters
    // You can fetch the campaign details here and update the state accordingly
    // For example:
    console.log("button pressed");
    const filteredCampaigns = {
      searchTerm,
      selectedType,
      // selectedMinDonation,
      selectedCountry,
      // minamount,
      // maxamount,
    };

    console.log(filteredCampaigns);
    // Update the state or make API calls to fetch campaign details based on the filters
  };

  return (
    <div>
      <div className="container mx-auto flex flex-col gap-4 lg:px-20 px-4">
        <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-4 ">
          <input
            type="search"
            className="border border-[#777777] rounded-md text-[#777777] p-2 outline-none w-full md:w-[600px] lg:w-[1034px]"
            placeholder="Search campaign ID or name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
  className={`border ${
    searchTerm
      ? "border-[#00B5D5] text-[#00B5D5] "
      : "hover:border-gray-400 hover:text-gray-400 border-[#00B5D5] text-[#00B5D5]"
  } p-3 lg:p-2 lg:px-4 text-xs lg:text-base rounded-xl`}
  
  onClick={filterCampaigns} // Call filterCampaigns when the search button is clicked

>
  Search
</button>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold">Type</span>
            <Select
              options={typeList}
              value={selectedType}
              onChange={handleTypeChange}
              placeholder="All"
              isSearchable
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold">Total Fund</span>
            <div className="flex flex-col xl:flex-row gap-5 w-full items-center">
              <div className="rounded border border-[#777777] px-auto flex flex-row">
                <input
                  type="number"
                  className="text-lg self-center w-20 px-2 py-1 rounded border border-[#777777]"
                  // value={minamount}
                  // onChange={handleMinAmountChange}
                />
              </div>
              <span>to</span>
              <div className="rounded border border-[#777777] px-auto flex flex-row">
                <input
                  type="number"
                  className="text-lg self-center w-20 px-2 py-1 rounded border border-[#777777]"
                  // value={maxamount}
                  // onChange={handleMaxAmountChange}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold">Minimum Donation</span>
            <Select
              options={minDonationList}
              // value={selectedMinDonation}
              // onChange={handleMinDonationChange}
              placeholder="All"
              isSearchable
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold">Location</span>
            <Select
                  options={countryList}
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  placeholder="Select a country"
                  isSearchable
                  
                  
                  getOptionValue={getOptionValue}
                />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignButtonSection;