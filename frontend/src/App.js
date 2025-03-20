import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RegistrationPortal from "./pages/registration_portal/registrationPortal";

function App() {
  // const isLoggedIn = true;
  const isLoggedIn = false;

  return (
    <BrowserRouter>
      <div className="app-container">
        {isLoggedIn && <Sidebar />}
        <div className="routess" style={{ marginLeft: isLoggedIn ? "200px" : "0px" }}>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Home /> : <Navigate replace to="/login" />} />
            <Route path="/login" element={isLoggedIn ? <Navigate replace to="/" /> : <Login />} />
            <Route path="/registration-portal" element={isLoggedIn ? <Navigate replace to="/" /> : <RegistrationPortal />} />
            <Route path="*" element={<Navigate replace to={isLoggedIn ? "/" : "/login"} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
