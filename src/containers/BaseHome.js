import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment-timezone";

import { filtersActions } from "redux/actions";

import { Home } from "pages";

const BaseHome = ({ leftCity, rightCity, setByCityLeft, setByCityRight }) => {
  const [moments, setMoments] = useState(moment());
  const [timeInfo, setTimeInfo] = useState({
    leftCity: "Asia/Krasnoyarsk",
    rightCity: "Europe/Moscow",
  });

  const arrayWatch = [
    {
      id: 0,
      name: "leftCity",
    },
    {
      id: 1,
      name: "rightCity",
    },
  ];

  useEffect(() => {
    setInterval(() => {
      let date = moment();

      setMoments(date);
    }, 1000);
  }, []);

  const handleChangeSelect = (event) => {
    const { name, value } = event.target;

    setTimeInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "leftCity") {
      setByCityLeft(value);
    } else if (name === "rightCity") {
      setByCityRight(value);
    }
  };

  return (
    <Home
      leftCity={leftCity}
      rightCity={rightCity}
      moments={moments}
      timeInfo={timeInfo}
      arrayWatch={arrayWatch}
      handleChangeSelect={handleChangeSelect}
    />
  );
};

export default connect(
  ({ filters }) => ({
    leftCity: filters.leftCity,
    rightCity: filters.rightCity,
  }),
  filtersActions
)(BaseHome);
