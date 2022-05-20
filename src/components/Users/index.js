import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/UserSlice";
import { Link } from "react-router-dom";

function Users() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });

  const onFetch = () => {
    dispatch(fetchUser());
  };

  const currentUser = user.data && user.data.results[0];
  return (
    <div className="row card p-3">
      {user.loading && "loading.."}
      {user.error && user.error}
      {currentUser && (
        <div>
          <ul>
            <li>
              <img src={currentUser.picture.large} alt="" />
            </li>
            <li>
              name: {currentUser.name.title} {currentUser.name.first}
              {currentUser.name.last}
            </li>
            <li> Email : {currentUser.email}</li>
          </ul>
        </div>
      )}

      <button className="btn btn-success mb-5" onClick={onFetch}>
        Fetch USer
      </button>
      <div>
        <Link className="nav-link" to="/">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default Users;
