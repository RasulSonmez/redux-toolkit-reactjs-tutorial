import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/LoginUserSlice";

function Logout() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      <h1>Logout</h1>
      <div>
        <h5>
          Welcome <span>{user.email} </span>
        </h5>
        <button
          type="button"
          className="btn btn-dark"
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;
