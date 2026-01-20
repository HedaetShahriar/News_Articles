import React from "react";

const Dropdown = ({ options }) => {
  return (
    <select defaultValue="select location" className="select focus: select-neutral">
      <option disabled={true}>select location</option>
      {options.map((option) => (
        <option key={option.code} value={option.code}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
