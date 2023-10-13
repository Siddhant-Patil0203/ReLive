import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import OnBording from "./pages/OnBording";
import "./assets/style/global.css";
import MainMode from "./components/MainMode";
import ExerciseAdder from "./components/ExerciseAdder";
import Home from "./pages/Home";

function App() {
  const user = true;
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Landing />} />
      ) : (
        <Route path="/" element={<LogIn />} />
      )}
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/Onboarding" element={<OnBording />} />
      <Route path="/exercise" element={<MainMode />} />
      <Route path="/exerciseEditor" element={<ExerciseAdder />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
