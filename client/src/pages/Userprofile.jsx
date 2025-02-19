import React, { useState } from "react";
import profilePic from "../assets/profile.jpg"; // Adjust path if necessary
import "./UserProfile.css";

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    name: "Jaya Nirenjan A C",
    age: 20,
    fitnessGoal: "Muscle Gain",
    weight: "70 kg",
    height: "184 cm",
    level: "Intermediate",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        
        {editMode ? (
          <>
            <div className="info-card">
              <span>Name:</span>
              <input type="text" name="name" value={user.name} onChange={handleChange} />
            </div>
            <div className="info-card">
              <span>Age:</span>
              <input type="number" name="age" value={user.age} onChange={handleChange} />
            </div>
            <div className="info-card">
              <span>Fitness Goal:</span>
              <input type="text" name="fitnessGoal" value={user.fitnessGoal} onChange={handleChange} />
            </div>
            <div className="info-card">
              <span>Weight:</span>
              <input type="text" name="weight" value={user.weight} onChange={handleChange} />
            </div>
            <div className="info-card">
              <span>Height:</span>
              <input type="text" name="height" value={user.height} onChange={handleChange} />
            </div>
            <div className="info-card">
              <span>Level:</span>
              <input type="text" name="level" value={user.level} onChange={handleChange} />
            </div>
          </>
        ) : (
          <>
            <div className="info-card"><span>Name:</span> {user.name}</div>
            <div className="info-card"><span>Age:</span> {user.age}</div>
            <div className="info-card"><span>Fitness Goal:</span> {user.fitnessGoal}</div>
            <div className="info-card"><span>Weight:</span> {user.weight}</div>
            <div className="info-card"><span>Height:</span> {user.height}</div>
            <div className="info-card"><span>Level:</span> {user.level}</div>
          </>
        )}

        <button className="edit-button" onClick={() => setEditMode(!editMode)}>
          {editMode ? "Save Profile" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
