import { createSlice } from "@reduxjs/toolkit";

const flightResultsSlice = createSlice({
  name: "flightResults",
  initialState: [],
  reducers: {
    setFlightResults: (state, action) => {
      state = action.payload;
      return {
        ...state,
        oj: state.j,
      };
    },
    priceLowToHighSort: (state) => {
      state = { ...state, j: state.j.sort((a, b) => a.farepr - b.farepr) };
    },
    priceHighToLowSort: (state) => {
      state = { ...state, j: state.j.sort((a, b) => b.farepr - a.farepr) };
    },
    departureEarliestToLatest: (state) => {
      state = {
        ...state,
        j: state.j.sort((a, b) => {
          let timeA = new Date("1970-01-01T" + a.leg[0].flights[0].dt + "Z");
          let timeB = new Date("1970-01-01T" + b.leg[0].flights[0].dt + "Z");
          return timeA - timeB;
        }),
      };
    },
    departureLatestToEarliest: (state) => {
      state = {
        ...state,
        j: state.j.sort((a, b) => {
          let timeA = new Date("1970-01-01T" + a.leg[0].flights[0].dt + "Z");
          let timeB = new Date("1970-01-01T" + b.leg[0].flights[0].dt + "Z");
          return timeB - timeA;
        }),
      };
    },
    arrivalEarliestToLatest: (state) => {
      state = {
        ...state,
        j: state.j.sort((a, b) => {
          let timeA = new Date("1970-01-01T" + a.leg[0].flights[0].at + "Z");
          let timeB = new Date("1970-01-01T" + b.leg[0].flights[0].at + "Z");
          return timeA - timeB;
        }),
      };
    },
    arrivalLatestToEarliest: (state) => {
      state = {
        ...state,
        j: state.j.sort((a, b) => {
          let timeA = new Date("1970-01-01T" + a.leg[0].flights[0].at + "Z");
          let timeB = new Date("1970-01-01T" + b.leg[0].flights[0].at + "Z");
          return timeB - timeA;
        }),
      };
    },
    durationShortestToLongest: (state) => {
      state = {
        ...state,
        j: state.j.sort(
          (a, b) => a.leg[0].flights[0].ft - b.leg[0].flights[0].ft
        ),
      };
    },
    durationLongestToShortest: (state) => {
      state = {
        ...state,
        j: state.j.sort(
          (a, b) => b.leg[0].flights[0].ft - a.leg[0].flights[0].ft
        ),
      };
    },
    priceRange: (state, action) => {
      return {
        ...state,
        j: state.oj.filter((element) => {
          return (
            element?.farepr >= action.payload.minPrice &&
            element?.farepr <= action.payload.maxPrice
          );
        }),
      };
    },
  },
});

export const {
  setFlightResults,
  priceLowToHighSort,
  priceHighToLowSort,
  departureEarliestToLatest,
  departureLatestToEarliest,
  arrivalEarliestToLatest,
  arrivalLatestToEarliest,
  durationShortestToLongest,
  durationLongestToShortest,
  priceRange,
} = flightResultsSlice.actions;
export default flightResultsSlice.reducer;
