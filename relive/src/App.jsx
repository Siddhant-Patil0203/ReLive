import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import "./assets/style/global.css";
import MainMode from "./components/MainMode";
import ExerciseAdder from "./components/ExerciseAdder";

function App() {
  const user = true;
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Home />} />
      ) : (
        <Route path="/" element={<LogIn />} />
      )}
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/exercise" element={<MainMode />} />
      <Route path="/exerciseEditor" element={<ExerciseAdder />} />
    </Routes>
  );
}

export default App;
