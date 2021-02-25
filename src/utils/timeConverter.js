const deg = 6;

const timeConverter = {
  timeHr: (city, moments) => {
    let day = moments.tz(`${city}`);

    return day.format("HH") * 30;
  },
  timeMm: (city, moments) => {
    let day = moments.tz(`${city}`);

    return day.format("mm") * deg;
  },
  timeSc: (city, moments) => {
    let day = moments.tz(`${city}`);

    return day.format("ss") * deg;
  },
};

export default timeConverter;
