// import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="content">
      <p>
        Register here if you have never created an account.
        <span className="material-symbols-outlined">bottom_right_click</span>
        <br />
      </p>

      <Link to="/SignUp" className="signUpBtn">
        Sign Up
      </Link>
    </div>
  );
};

export default HomePage;
