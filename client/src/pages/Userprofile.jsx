import React from 'react';
import './USerprofile.css';

const Userprofile = () => {
  const person = {
    name: 'John Doe',
    age: 28,
    gender: 'Male',
    height: "5'10",
    weight: '80 kg',
    goals: 'Build muscle and improve endurance',
    membership: 'Gold Member',
    workoutPlan: 'Push-Pull-Legs (6 days a week)',
    dietPlan: 'High-protein bulking diet',
    personalTrainer: 'Sarah Smith',
    progress: {
      benchPress: '100 kg',
      squat: '150 kg',
      deadlift: '180 kg'
    }
  };

  return (<></>
  );
};

export default Userprofile;