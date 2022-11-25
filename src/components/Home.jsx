import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <ul>
        <li>
          <Link to={"/Beers"}>Beers</Link>
        </li>
        <li>
          <Link to={"/NewBeer"}>NewBeer</Link>
        </li>
        <li>
          <Link to={"/RandomBeer"}>RandomBeer</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
