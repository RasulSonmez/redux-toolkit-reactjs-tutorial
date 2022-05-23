import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, selectUser } from "../../features/LoginUserSlice";
import Logout from "./Logout";
function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
    setEmail("");
    setPassword("");
  };

  console.log(user);

  return (
    <div>
      <h1>Login User App</h1>
      <form className="card p-5" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        <Link className="nav-link" to="/">
          Go To Home
        </Link>
      </div>

      {user ? <Logout /> : ""}
    </div>
  );
}

export default LoginUser;
