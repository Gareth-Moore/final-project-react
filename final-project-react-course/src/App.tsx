import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_KEY } from "./api-key";

function App() {
  const request = axios.create({
    baseURL: "https://rawg.io/api",
    params: {
      key: API_KEY,
    },
  });

  const fetchData = () => {
    useEffect(() => {
      request
        .get("/creator-roles")
        .then((res) => console.log(res))
        .catch((err) => console.log("FUCK THERE WAS AN ERROR", err.message));
    }, []);
  };
  return (
    <>
      <button className="btn btn-primary" onClick={fetchData}>
        Fetch data
      </button>
    </>
  );
}

export default App;
