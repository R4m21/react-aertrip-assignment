import React, { useEffect, useRef, useState } from "react";
import "./DoubleSlider.css";

const DoubleSlider = ({
  minPrice,
  maxPrice,
  handlePriceRange,
  setIsToggle,
}) => {
  const defaultMax = maxPrice;
  const defaultMin = minPrice;
  const [minValue, setMinValue] = useState(defaultMin);
  const [maxValue, setMaxValue] = useState(defaultMax);

  useEffect(() => {
    setArea();
    if (maxValue < minValue) {
      setMaxValue(minValue);
      setMinValue(maxValue);
    }
  }, [minValue, maxValue]);

  const setArea = () => {
    const range = document.querySelector(".slider-track");
    range.style.left = `${
      ((minValue - defaultMin) / (defaultMax - defaultMin)) * 100
    }%`;
    range.style.right = `${
      100 - ((maxValue - defaultMin) / (defaultMax - defaultMin)) * 100
    }%`;
  };

  return (
    <div className="double-slider-box">
      <div className="min-max-value">
        <div className="">₹{minValue}</div>
        <div className="">₹{maxValue}</div>
      </div>
      <div className="range-slider">
        <span className="slider-track"></span>
        <input
          type="range"
          className="min-val"
          name="min_val"
          min={defaultMin}
          max={defaultMax}
          value={minValue}
          onChange={(e) => {
            setMinValue(parseInt(e.target.value));
            handlePriceRange(parseInt(e.target.value), maxValue);
            setIsToggle(true);
          }}
        />
        <input
          type="range"
          className="max-val"
          name="max_val"
          min={defaultMin}
          max={defaultMax}
          value={maxValue}
          onChange={(e) => {
            setMaxValue(parseInt(e.target.value));
            handlePriceRange(minValue, parseInt(e.target.value));
            setIsToggle(true);
          }}
        />
      </div>
    </div>
  );
};

export default DoubleSlider;
