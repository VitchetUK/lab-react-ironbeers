import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

const Beer = ({ beers }) => {
  const [allBeers, setAllBeers] = useState(beers);
  const params = useParams();
  const id = params.id;
  console.log(params.id);

  const displayOneBeer = allBeers.find((beer) => beer._id === id);

  return (
    <div>
      <Header />

      <div>
        <img src={displayOneBeer.image_url} alt={displayOneBeer.name} />
        <p>{displayOneBeer.name}</p>
        <p>{displayOneBeer.tagline}</p>
        <p>{displayOneBeer.first_brewed}</p>
        <p>{displayOneBeer.attenuation_level}</p>
        <p>{displayOneBeer.description}</p>
        <p>{displayOneBeer.contributed_by}</p>
      </div>
    </div>
  );
};

export default Beer;
