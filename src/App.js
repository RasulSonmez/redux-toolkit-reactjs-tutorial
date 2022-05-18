import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TodoApp from "./components/TodoApp";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
