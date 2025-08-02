import { Routes, Route } from "react-router-dom";
import Login from "./users/Login.jsx";
import Signup from "./users/Signup.jsx";
import Hero from "./pages/Hero.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Hero />} />
      </Route>
    </Routes>
  );
}

export default App;
