import React from "react";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={'/login'}>
        <button>Go to login page</button>
      </Link>
    </div>
  );
};

export default Home;
