import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import SettingIcon from "../../assets/icons/SettingIcon";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import UpArrowIcon from "../../assets/icons/UpArrowIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import { priceRange } from "../../redux/reducers/flightResultsSlice";
import { setDefaultApiResponse } from "../../App";
import SortButton from "./SortButton";
import DoubleSlider from "./DoubleSlider";

const PriceButton = forwardRef((_, ref) => {
  const [isClick, setIsClick] = useState(false);
  const dispatch = useDispatch();
  const flightDataResult = useSelector((state) => state.flightResults);
  const [isToggle, setIsToggle] = useState(false);

  const handlePriceRange = (minPrice, maxPrice) => {
    _?.setCheck((p) => ({ ...p, isPriceFilter: true }));
    dispatch(priceRange({ minPrice, maxPrice }));
  };
  const resetPriceButtonState = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    setIsToggle(false);
    setIsClick(false);
    _?.setCheck((p) => ({ ...p, isPriceFilter: false }));
    dispatch(setDefaultApiResponse());
  };

  useImperativeHandle(ref, () => ({
    resetPriceButtonState,
  }));

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
      className={`filter-button ${isToggle ? "active" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={(e) => {
        setIsClick(!isClick);
        e.stopPropagation();
      }}
    >
      <span>Price</span>
      {isToggle ? null : isClick ? <UpArrowIcon /> : <DownArrowIcon />}
      {isToggle ? (
        <CloseIcon onClick={(e) => resetPriceButtonState(e)} />
      ) : null}
      {isClick ? (
        <div className="filter-dropdown" onClick={(e) => e.stopPropagation()}>
          <div className="header">
            <span>Price</span>
            {isToggle ? (
              <span
                onClick={(e) => {
                  resetPriceButtonState(e);
                }}
              >
                Clear
              </span>
            ) : null}
            <span onClick={() => setIsClick(false)}>
              <CloseIcon />
            </span>
          </div>
          <div className="body">
            {/* <div className={`inner-list }`}>
            <span className="inner-list-item">Refundable fares only</span>
          </div> */}
            <div className="price-slider">
              <DoubleSlider
                minPrice={flightDataResult?.f?.[0]?.pr?.minPrice}
                maxPrice={flightDataResult?.f?.[0]?.pr?.maxPrice}
                handlePriceRange={handlePriceRange}
                setIsToggle={setIsToggle}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
});

const FilterButton = ({ filterName, forwardedRef, setCheck }) => {
  if (filterName === "Sort:")
    return <SortButton ref={forwardedRef.sortButtonRef} setCheck={setCheck} />;
  if (filterName === "Price")
    return (
      <PriceButton ref={forwardedRef.priceButtonRef} setCheck={setCheck} />
    );
  return (
    <div className="filter-button">
      <span>{filterName}</span>
      <DownArrowIcon />
    </div>
  );
};

const FilterBox = () => {
  const filterButtons = [
    "Sort:",
    "Times",
    "Airlines",
    "Stops",
    "Duration",
    "Airports",
    "Price",
    "Aircrafts",
  ];
  const [check, setCheck] = useState({
    isPriceFilter: false,
    isSortApply: false,
  });
  const sortButtonRef = useRef();
  const priceButtonRef = useRef();
  const handleOnClick = () => {
    if (sortButtonRef.current) {
      sortButtonRef.current.resetSortButtonState();
      setCheck((prev) => ({ ...prev, isSortApply: false }));
    }
    if (priceButtonRef.current) {
      priceButtonRef.current.resetPriceButtonState();
      setCheck((prev) => ({ ...prev, isPriceFilter: false }));
    }
    // dispatch(setDefaultApiResponse());
  };

  return (
    <div className="filter-box">
      <SettingIcon />
      {filterButtons.map((filterName, index) => (
        <FilterButton
          key={index}
          filterName={filterName}
          forwardedRef={{ sortButtonRef, priceButtonRef }}
          setCheck={setCheck}
        />
      ))}
      {check.isPriceFilter && check.isSortApply ? (
        <div className="clear-button" onClick={handleOnClick}>
          Clear All
        </div>
      ) : null}
    </div>
  );
};

export default FilterBox;
