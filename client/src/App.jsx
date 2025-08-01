import { Routes, Route } from "react-router-dom";
import Login from "./users/Login.jsx";
import Signup from "./users/Signup.jsx";
import Hero from "./pages/Hero.jsx";
import ProtectedRoute from "./routes/ProtectedRoutes.jsx";
import PublicRoute from "./routes/PublicRoutes.jsx";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Hero />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
