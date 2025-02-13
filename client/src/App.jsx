import { Route,Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar";
import Suggestions from "./pages/Suggestions.jsx"
import Attendance from "./pages/Attendance.jsx"
import Userprofile from "./pages/Userprofile.jsx"
import Diet from "./pages/Diet.jsx"
import Homepage from "./Homepage.jsx";

function App()
{
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/suggestions" element={<Suggestions />}/>
                <Route path="/attendance" element={<Attendance />}/>
                <Route path="/userprofile" element={<Userprofile />}/>
                <Route path="/diet" element={<Diet />}/>
            </Routes>
        </div>
    );
}
export default App;