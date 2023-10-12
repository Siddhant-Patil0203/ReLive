import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import OnBording from "./pages/OnBording";
import "./assets/style/global.css";

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
    </Routes>
  );
}

export default App;
