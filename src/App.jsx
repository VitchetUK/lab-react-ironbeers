import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import Beers from "./components/Beers";
import OneBeer from "./components/OneBeer";
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";

const App = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(({ data }) => {
        setBeers(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Beers" element={<Beers beers={beers} />}></Route>
        <Route
          path="/NewBeer"
          element={<NewBeer setBeers={setBeers} />}
        ></Route>
        <Route path="/RandomBeer" element={<RandomBeer />}></Route>
        <Route path="/Beers/:id" element={<OneBeer beers={beers} />}></Route>
      </Routes>
    </div>
  );
};

export default App;
