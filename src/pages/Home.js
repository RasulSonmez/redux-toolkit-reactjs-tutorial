import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav className="grid">
        <div className="row">
          <Link className="mb-3  text-decoration-none" to="/TodoApp">
            Todo App
          </Link>
          <Link className="mb-3  text-decoration-none" to="/Login">
            Login App
          </Link>
          <Link className="mb-3  text-decoration-none" to="/Profile">
            Profile App
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Home;
