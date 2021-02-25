import React from "react";

import "./Select.scss";

const Select = ({ id, timeInfo, name, handleChangeSelect }) => {
  return (
    <div className="select">
      <i className="bx bx-down-arrow-alt select__icon"></i>
      <select
        name={name}
        className="select__block"
        value={id === 0 ? timeInfo.leftCity : timeInfo.rightCity}
        onChange={handleChangeSelect}
      >
        <option value="Asia/Krasnoyarsk">Красноярск</option>
        <option value="Asia/Vladivostok">Владивосток</option>
        <option value="Europe/Kaliningrad">Калининград</option>
        <option value="Europe/Moscow">Москва</option>
      </select>
    </div>
  );
};

export default Select;
