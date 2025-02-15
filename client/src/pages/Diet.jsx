import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Salad, Flame } from 'lucide-react';
import './Diet.css';

const dietPlans = {
  Bulking: {
    icon: <Dumbbell className="icon" />,
    description: 'High-calorie diet focused on muscle gain.',
    meals: [
      'Breakfast: Oats with peanut butter and banana',
      'Lunch: Chicken breast with rice and vegetables',
      'Snack: Protein shake with almonds',
      'Dinner: Salmon with sweet potatoes and broccoli'
    ]
  },
  Cutting: {
    icon: <Flame className="icon" />,
    description: 'Low-calorie diet focused on fat loss.',
    meals: [
      'Breakfast: Egg whites with spinach',
      'Lunch: Grilled chicken with quinoa and salad',
      'Snack: Greek yogurt with berries',
      'Dinner: Tilapia with asparagus'
    ]
  },
  Maintenance: {
    icon: <Salad className="icon" />,
    description: 'Balanced diet to maintain current physique.',
    meals: [
      'Breakfast: Scrambled eggs with toast and avocado',
      'Lunch: Turkey sandwich with mixed greens',
      'Snack: Protein bar with an apple',
      'Dinner: Chicken stir-fry with brown rice'
    ]
  }
};

const Diet = () => {
  const [selectedDiet, setSelectedDiet] = useState('Bulking');

  const handleDietChange = (diet) => {
    setSelectedDiet(diet);
  };

  const activeDiet = dietPlans[selectedDiet];

  return (
    <div className="diet-container">
      <div className="button-group">
        {Object.keys(dietPlans).map((diet) => (
          <motion.button
            key={diet}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleDietChange(diet)}
            className={`diet-button ${selectedDiet === diet ? 'active' : ''}`}
          >
            {dietPlans[diet].icon}
            {diet}
          </motion.button>
        ))}
      </div>

      <div className="diet-card">
        <motion.div
          key={selectedDiet}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="diet-content"
        >
          <div className="diet-header">
            {activeDiet.icon}
            <h2 className="diet-title">{selectedDiet} Diet</h2>
          </div>
          <p className="diet-description">{activeDiet.description}</p>
          <ul className="diet-meals">
            {activeDiet.meals.map((meal, index) => (
              <li key={index} className="diet-meal">
                {meal}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Diet;
