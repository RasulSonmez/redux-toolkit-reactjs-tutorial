import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.loginReducer.value);

  return (
    <div>
      <h1>Profile</h1>
      <div className="row card p-3">
        <p>Name : {user.name} </p>
        <p>SurName : {user.surname} </p>
      </div>
    </div>
  );
}

export default Profile;
