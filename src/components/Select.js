import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const Select = () => {
  return (
    <div className='title'>
      <Link to="/recovered">
        <Button>Recovered</Button>
      </Link>
      <Link to="/confirmed">
        <Button>Confirmed</Button>
      </Link>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default Select;
