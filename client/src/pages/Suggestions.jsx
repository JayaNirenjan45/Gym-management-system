import React, { useState } from 'react';
import './Suggestions.css';

const Suggestions = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  const [newFeedback, setNewFeedback] = useState({ name: '', suggestion: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback({ ...newFeedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFeedback.name && newFeedback.suggestion) {
      setFeedbackList([...feedbackList, newFeedback]);
      setNewFeedback({ name: '', suggestion: '' });
    }
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Customer Feedback & Suggestions</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newFeedback.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          required
        />
        <textarea
          name="suggestion"
          value={newFeedback.suggestion}
          onChange={handleInputChange}
          placeholder="Your Suggestion"
          required
        ></textarea>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <div className="feedback-list">
        {feedbackList.map((feedback, index) => (
          <div key={index} className="feedback-card">
            <h4 className="fname">{feedback.name}:</h4>
            <p>{feedback.suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
