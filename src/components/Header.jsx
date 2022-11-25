import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to={"/"}>Go Home</Link>
      </header>
    </div>
  );
};

export default Header;
