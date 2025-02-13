// Diet.jsx - Fresh and Neat Layout for Gym Diet Plans
import React from 'react';
import './Diet.css';

const dietPlans = [
  { title: 'Weight Gain Plan', details: 'High-protein meals with complex carbs and healthy fats.', calories: '3000 kcal/day' },
  { title: 'Weight Loss Plan', details: 'Low-carb meals with lean protein and fiber-rich veggies.', calories: '1800 kcal/day' },
  { title: 'Keto Plan', details: 'High-fat, moderate-protein, and low-carb meals.', calories: '2000 kcal/day' },
  { title: 'Vegan Plan', details: 'Plant-based meals with legumes, grains, and fruits.', calories: '2200 kcal/day' }
];

function Diet() {
  return (
    <div className="diet-container">
      <h1 className="diet-title">Gym Diet Plans</h1>
      <div className="diet-grid">
        {dietPlans.map((plan, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <h2 className="card-title">{plan.title}</h2>
              <p className="card-details">{plan.details}</p>
              <p className="card-calories">Calories: {plan.calories}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Diet;