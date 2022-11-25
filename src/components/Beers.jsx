import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

const Beers = ({ beers }) => {
  return (
    <div>
      <Header />
      <div>
        {beers.map((beer) => {
          return (
            <>
              <div key={beer._id}>
                <Link to={beer._id}>
                  <img src={beer.image_url} alt={beer.name} />
                </Link>
                <p>Name: {beer.name}</p>
                <p>Tagline: {beer.tagline}</p>
                <p>Contributed: {beer.contributed_by}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Beers;
