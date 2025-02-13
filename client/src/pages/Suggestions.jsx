import React, { useState } from 'react';
import "./Suggestions.css";
function Suggestions() {
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = () => {
    if (suggestion.trim()) {
      alert(`Suggestion sent: ${suggestion}`);
      setSuggestion('');
    } else {
      alert('Please enter a suggestion before submitting.');
    }
  };

  return (
    <div className="suggestions-container">
      <h2>Share Your Suggestions</h2>
      <textarea
        className="suggestion-input"
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
        placeholder="Enter your suggestion here..."
      />
      <button className="submit-btn" onClick={handleSubmit}>
        Send Suggestion
      </button>
    </div>
  );
}

export default Suggestions;
