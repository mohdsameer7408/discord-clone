import React from "react";
import { Button } from "@material-ui/core";
import "../assets/css/Login.css";
import { auth, provider } from "../config/firebase";

function Login() {
  const signin = (event) => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/1920px-Discord_logo.svg.png"
          alt=""
        />
      </div>
      <Button onClick={signin}>Sign In</Button>
    </div>
  );
}

export default Login;
