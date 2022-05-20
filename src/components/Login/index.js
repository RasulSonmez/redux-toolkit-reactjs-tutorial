import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../../features/LoginSlice";
import Profile from "../Profile";

function Login() {
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(
      loginAction({
        name: "rasul",
        surname: "sönmez",
      })
    );
  };
  const onLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <div>
      <h1>Login</h1>
      <div className="row card p-5 d-flex flex-row">
        <button className="btn btn-primary mb-1" onClick={onLogin}>
          Login
        </button>
        <button className="btn btn-danger" onClick={onLogout}>
          Logout
        </button>
      </div>
      <div className="card mt-5 p-3 mb-3">
        <Profile />
      </div>

      <div>
        <Link className="nav-link" to="/">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default Login;
