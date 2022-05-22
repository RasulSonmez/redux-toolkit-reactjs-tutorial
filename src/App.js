import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoApp from "./components/TodoApp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Users from "./components/Users";
import { useSelector } from "react-redux";
import Theme from "./components/Theme";
import Counter from "./components/Counter";

function App() {
  const theme = useSelector((state) => state.themeReducer.value);
  const { dark } = useSelector((state) => state.site);
  return (
    <div
      className={dark ? "dark App" : "light App"}
      style={{ background: theme }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
      <div className="mt-5">
        <Theme />
      </div>
    </div>
  );
}

export default App;
