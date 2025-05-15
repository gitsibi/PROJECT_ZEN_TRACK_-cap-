import React, { useEffect, useState } from 'react';

const AISuggestions = ({ userId }) => {
  const [tip, setTip] = useState('');

  useEffect(() => {
    // Fetch from OpenAI suggestion API
    // Example: fetch(`/api/suggestions?user=${userId}`)
    setTip("Try using 'Do Not Disturb' mode during Pomodoro sessions.");
  }, [userId]);

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="font-semibold mb-2">AI Suggestion</h2>
      <p>{tip}</p>
    </div>
  );
};

export default AISuggestions;
