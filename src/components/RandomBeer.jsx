import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(({ data }) => {
        setRandomBeer(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(randomBeer);

  if (!randomBeer) {
    return <div>loading data</div>;
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <p>{randomBeer.name}</p>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
};

export default RandomBeer;
