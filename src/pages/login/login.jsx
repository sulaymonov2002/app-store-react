import React from "react";
import { Link } from "react-router-dom";
import Inputs from "./components/inputs";
import "./login.scss";

function Login({ inputLabel, onLogin }) {
  const userName = React.createRef();
  const userStreetName = React.createRef();
  const userCity = React.createRef();
  const userState = React.createRef();
  const userCountry = React.createRef();
  return (
    <form
      className="login"
    >
      <Inputs
        userName={userName}
        userStreetName={userStreetName}
        userCity={userCity}
        userState={userState}
        userCountry={userCountry}
        onLogin={onLogin}
        inputLabel={inputLabel}
      />

      <Link to="/dashboard">
        <button
          onClick={() =>
            onLogin(userName, userStreetName, userCity, userState, userCountry)
          }
        >
          Login
        </button>
      </Link>
    </form>
  );
}
export default Login;
