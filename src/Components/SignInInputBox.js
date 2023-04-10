import React from "react";
import arrowButton from "../arrowsquaredown.svg";
import { useState } from "react";

export function SignInInputBox(props) {
  return (
    <div className="inputBoxes">
      <p>{props.topic}</p>
      <input
        type={props.type}
        placeholder={props.name}
        onChange={props.onChange}
      />
    </div>
  );
}



export function DropDownBox(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFlag, setSelectedFlag] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(props.options);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (event) => {
    const selectedValue = event.target.getAttribute("value");
    setSelectedOption(selectedValue);
    const selectedCountry = props.options.find(
      (option) => option.value === selectedValue
    );
    setSelectedFlag(selectedCountry.flag);
    toggleDropdown();
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    const filtered = props.options.filter((option) =>
      option.label.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <div className="inputBoxes">
      <p>{props.topic}</p>
      <div className="dropdown" onClick={toggleDropdown}>
        <div className="input-wrapper">
          <input
            type="text"
            value={selectedOption}
            placeholder={selectedOption ? "" : props.name}
            onChange={handleInputChange}
            style={{
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "5% 50%",
              paddingLeft: "45px",
            }}
          />
          {selectedFlag && (
            <img
              src={selectedFlag}
              alt="Flag"
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "30px",
                height: "auto",
              }}
            />
          )}
          <img
            src={arrowButton}
            alt="DropDown"
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            width="20px"
            height="20px"
            onClick={toggleDropdown}
          />
        </div>
        {isOpen && (
          <div className="options">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className="option"
                onClick={handleOptionSelect}
                value={option.value}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
