import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Suggestions from "./pages/Suggestions.jsx";
import Attendance from "./pages/Attendance.jsx";
import Userprofile from "./pages/Userprofile.jsx";
import Diet from "./pages/Diet.jsx";
import Homepage from "./Homepage.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const location = useLocation(); // Get the current route

  return (
    <div className="App">
      {/* Show Navbar only if the user is NOT on the Login page */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/diet" element={<Diet />} />
      </Routes>
    </div>
  );
}

export default App;
