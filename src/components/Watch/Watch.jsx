import React from "react";

import { Select } from "components";
import timeConverter from "utils/timeConverter";

import "./Watch.scss";

const Watch = ({
  id,
  timeInfo,
  leftCity,
  rightCity,
  name,
  moments,
  handleChangeSelect,
}) => {
  return (
    <div className="watch">
      <div className="watch__effect">
        <div className="watch__border">
          <div className="watch__clock">
            <div className="watch__hour">
              <div
                className="watch__hr"
                style={{
                  transform:
                    id === 0
                      ? `rotateZ(${
                          timeConverter.timeHr(leftCity, moments) +
                          timeConverter.timeMm(leftCity, moments) / 12
                        }deg)`
                      : `rotateZ(${
                          timeConverter.timeHr(rightCity, moments) +
                          timeConverter.timeMm(rightCity, moments) / 12
                        }deg)`,
                }}
              ></div>
            </div>

            <div className="watch__min">
              <div
                className="watch__mn"
                style={{
                  transform:
                    id === 0
                      ? `rotateZ(${timeConverter.timeMm(leftCity, moments)}deg)`
                      : `rotateZ(${timeConverter.timeMm(
                          rightCity,
                          moments
                        )}deg)`,
                }}
              ></div>
            </div>

            <div className="watch__sec">
              <div
                className="watch__sc"
                style={{
                  transform:
                    id === 0
                      ? `rotateZ(${timeConverter.timeSc(
                          rightCity,
                          moments
                        )}deg)`
                      : `rotateZ(${timeConverter.timeSc(
                          rightCity,
                          moments
                        )}deg)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="watch__info">
        <i className="bx bx-time bx-tada watch__icon"></i>

        <span className="watch__time">
          {id === 0
            ? moments.tz(`${leftCity}`).format("HH:MM:ss")
            : moments.tz(`${rightCity}`).format("HH:mm:ss")}
        </span>
      </div>

      <div className="watch__select">
        <Select
          id={id}
          name={name}
          timeInfo={timeInfo}
          handleChangeSelect={handleChangeSelect}
        />
      </div>
    </div>
  );
};

export default Watch;
