import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { useEffect } from "react";
import { setFlightResults } from "./redux/reducers/flightResultsSlice";
import apiResponse from "./data/api-data.json";
export const setDefaultApiResponse = () =>
  setFlightResults(apiResponse.data.flights[0].results);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDefaultApiResponse());
  }, []);

  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

export default App;
