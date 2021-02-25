import React from "react";

import { Watch } from "components";

import "./Home.scss";

const Home = ({
  leftCity,
  rightCity,
  moments,
  timeInfo,
  arrayWatch,
  handleChangeSelect,
}) => {
  return (
    <div className="home">
      <div className="container">
        <div className="top">
          <div className="top__block">
            <i className="bx bxs-virus bx-tada bx-flip-vertical top__icon"></i>
            <span className="top__text">Тестовое задание</span>
          </div>

          <h1 className="top__title">
            Знайте всегда время в различных городах.
          </h1>

          <p className="top__descr">
            Watcher - это инструмент для всех, кто ценит пунктуальность,
            внимание и гибкость.
          </p>
        </div>

        <div className="offer">
          {arrayWatch.map((item) => {
            return (
              <Watch
                key={item.id}
                id={item.id}
                name={item.name}
                timeInfo={timeInfo}
                moments={moments}
                leftCity={leftCity}
                rightCity={rightCity}
                handleChangeSelect={handleChangeSelect}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
