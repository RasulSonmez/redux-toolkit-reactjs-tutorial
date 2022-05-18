import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../../features/LoginSlice";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button>Login</button>
      <button>Logout</button>
      <div>
        <Link to="/">Go To Home</Link>
      </div>
    </div>
  );
}

export default Login;
