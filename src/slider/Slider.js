import React, { useState } from "react";
import { leftArrow, rightArrow, one, two, three, four } from "../assets";
import "./Slider.css";

// Your data for maping
const sliderData = [
  {
    id: 0,
    title: "One",
    image: one,
  },
  {
    id: 1,
    title: "Two",
    image: two,
  },
  {
    id: 2,
    title: "Three",
    image: three,
  },
  {
    id: 3,
    title: "Four",
    image: four,
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const position = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  return (
    // must add padding or hight to the parent (.slider)
    <div className="slider">
      <img
        src={leftArrow}
        alt="arrow"
        className="left-arrow"
        onClick={prevSlide}
      />
      <img
        src={rightArrow}
        alt="arrow"
        className="right-arrow"
        onClick={nextSlide}
      />
      {sliderData?.map(({ id, image }, i) => {
        const indexLeft = position(current - 1, length);
        const indexRight = position(current + 1, length);

        let className = "";
        if (i === current) {
          className = "slider-card card--active";
        } else if (i === indexRight) {
          className = "slider-card card--right";
        } else if (i === indexLeft) {
          className = "slider-card card--left";
        } else {
          className = "slider-card";
        }

        return (
          <div className={className} key={id}>
            {/* Put your styles here (.content) */}
            <div className="content">
              <img src={image} alt="img" className="image" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
