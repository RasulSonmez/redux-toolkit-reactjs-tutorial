import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <hr style={{ color: "black", width: "100%" }} />
      <nav className="grid mt-3">
        <div className="row">
          <Link className="mb-3  text-decoration-none nav-link" to="/counter">
            Counter App
          </Link>
          <Link className="mb-3  text-decoration-none nav-link" to="/TodoApp">
            Todo App
          </Link>
          <Link className="mb-3  text-decoration-none nav-link" to="/Login">
            Login App
          </Link>
          <Link className="mb-3  text-decoration-none nav-link" to="/Profile">
            Profile App
          </Link>
          <Link className="mb-3  text-decoration-none nav-link" to="/Users">
            Random Users
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Home;
