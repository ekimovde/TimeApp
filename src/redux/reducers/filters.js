const initialState = {
  leftCity: "Asia/Krasnoyarsk",
  rightCity: "Europe/Moscow",
};

export default function filtersReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "SET_BY_CITY_LEFT":
      return {
        ...state,
        leftCity: payload,
      };
    case "SET_BY_CITY_RIGHT":
      return {
        ...state,
        rightCity: payload,
      };
    default:
      return state;
  }
}
