import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import UpArrowIcon from "../../assets/icons/UpArrowIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import LTHIcon from "../../assets/icons/LTHIcon";
import HTLIcon from "../../assets/icons/HTLIcon";
import InfoBIcon from "../../assets/icons/InfoBIcon";
import { useDispatch } from "react-redux";
import {
  arrivalEarliestToLatest,
  arrivalLatestToEarliest,
  departureEarliestToLatest,
  departureLatestToEarliest,
  durationLongestToShortest,
  durationShortestToLongest,
  priceHighToLowSort,
  priceLowToHighSort,
} from "../../redux/reducers/flightResultsSlice";
import { setDefaultApiResponse } from "../../App";

const SortButton = forwardRef((_, ref) => {
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [isToggle, setIsToggle] = useState(false);

  const resetSortButtonState = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setFilterName("");
    setIsToggle(false);
    setIsClick(false);
    _?.setCheck((p) => ({ ...p, isSortApply: false }));
    dispatch(setDefaultApiResponse());
  };

  useImperativeHandle(ref, () => ({
    resetSortButtonState,
  }));

  const updateResult = () => {
    if (filterName === "Price") {
      if (isToggle) dispatch(priceHighToLowSort());
      else dispatch(priceLowToHighSort());
    } else if (filterName === "Departure") {
      if (isToggle) dispatch(departureLatestToEarliest());
      else dispatch(departureEarliestToLatest());
    } else if (filterName === "Arrival") {
      if (isToggle) dispatch(arrivalLatestToEarliest());
      else dispatch(arrivalEarliestToLatest());
    } else if (filterName === "Duration") {
      if (isToggle) dispatch(durationLongestToShortest());
      else dispatch(durationShortestToLongest());
    }
  };

  useEffect(() => {
    updateResult();
  }, [isToggle]);

  const handleFilter = (name) => {
    setFilterName(name);
    setIsToggle(!isToggle);
    _?.setCheck((p) => ({ ...p, isSortApply: true }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isClick && !event.target.closest(".filter-dropdown")) {
        setIsClick(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isClick]);

  return (
    <div
      className={`filter-button ${filterName ? "active" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={(e) => {
        e.stopPropagation();
        setIsClick(!isClick);
      }}
    >
      <span>Sort:{filterName ? filterName : "Smart"}</span>
      {filterName ? null : isClick ? <UpArrowIcon /> : <DownArrowIcon />}
      {filterName ? (
        <CloseIcon onClick={(e) => resetSortButtonState(e)} />
      ) : null}
      {isClick ? (
        <div className="filter-dropdown" onClick={(e) => e.stopPropagation()}>
          <div className="header">
            <span>Sort</span>
            {filterName ? (
              <span onClick={(e) => resetSortButtonState(e)}>Clear</span>
            ) : null}
            <span onClick={() => setIsClick(false)}>
              <CloseIcon />
            </span>
          </div>
          <div className="body">
            <div className="list">
              <div
                className={`inner-list ${
                  filterName === "Smart" ? "active" : ""
                }`}
                onClick={() => handleFilter("Smart")}
              >
                <span className="inner-list-item">Smart</span>
                <span className="inner-list-item">
                  Recommended <InfoBIcon />
                </span>
                <span className="inner-list-item"></span>
                {filterName === "Smart" ? (
                  <span className="inner-list-item"></span>
                ) : null}
              </div>
              <div
                className={`inner-list ${
                  filterName === "Price" ? "active" : ""
                }`}
                onClick={() => handleFilter("Price")}
              >
                <span className="inner-list-item">Price</span>
                <span className="inner-list-item">
                  {filterName === "Price"
                    ? isToggle
                      ? "High to low"
                      : "Low to high"
                    : "Low to high"}
                </span>
                <span className="inner-list-item">
                  {filterName === "Price" ? (
                    isToggle ? (
                      <HTLIcon />
                    ) : (
                      <LTHIcon />
                    )
                  ) : null}
                </span>
                {filterName === "Price" ? (
                  <span className="inner-list-item"></span>
                ) : null}
              </div>
              <div
                className={`inner-list ${
                  filterName === "Departure" ? "active" : ""
                }`}
                onClick={() => handleFilter("Departure")}
              >
                <span className="inner-list-item">Departure</span>
                <span className="inner-list-item">
                  {filterName === "Departure"
                    ? isToggle
                      ? "Latest first"
                      : "Earliest first"
                    : "Earliest first"}
                </span>
                <span className="inner-list-item">
                  {filterName === "Departure" ? (
                    isToggle ? (
                      <HTLIcon />
                    ) : (
                      <LTHIcon />
                    )
                  ) : null}
                </span>
                {filterName === "Departure" ? (
                  <span className="inner-list-item"></span>
                ) : null}
              </div>
              <div
                className={`inner-list ${
                  filterName === "Arrival" ? "active" : ""
                }`}
                onClick={() => handleFilter("Arrival")}
              >
                <span className="inner-list-item">Arrival</span>
                <span className="inner-list-item">
                  {filterName === "Arrival"
                    ? isToggle
                      ? "Latest first"
                      : "Earliest first"
                    : "Earliest first"}
                </span>
                <span className="inner-list-item">
                  {filterName === "Arrival" ? (
                    isToggle ? (
                      <HTLIcon />
                    ) : (
                      <LTHIcon />
                    )
                  ) : null}
                </span>
                {filterName === "Arrival" ? (
                  <span className="inner-list-item"></span>
                ) : null}
              </div>
              <div
                className={`inner-list ${
                  filterName === "Duration" ? "active" : ""
                }`}
                onClick={() => handleFilter("Duration")}
              >
                <span className="inner-list-item">Duration</span>
                <span className="inner-list-item">
                  {filterName === "Duration"
                    ? isToggle
                      ? "Longest first"
                      : "Shortest first"
                    : "Shortest first"}
                </span>
                <span className="inner-list-item">
                  {filterName === "Duration" ? (
                    isToggle ? (
                      <HTLIcon />
                    ) : (
                      <LTHIcon />
                    )
                  ) : null}
                </span>
                {filterName === "Duration" ? (
                  <span className="inner-list-item"></span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
});

export default SortButton;
