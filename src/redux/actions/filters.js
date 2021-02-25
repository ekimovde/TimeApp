const actions = {
  setByCityLeft: (city) => {
    return {
      type: "SET_BY_CITY_LEFT",
      payload: city,
    };
  },
  setByCityRight: (city) => {
    return {
      type: "SET_BY_CITY_RIGHT",
      payload: city,
    };
  },
};

export default actions;
