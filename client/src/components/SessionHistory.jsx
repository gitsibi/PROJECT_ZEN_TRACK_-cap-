import React, { useEffect, useState } from 'react';

const SessionHistory = ({ userId }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Fetch from Session Tracking API
    // Example: fetch(`/api/sessions?user=${userId}`)
    setSessions([
      { date: '2025-05-10', duration: '45 mins', type: 'Deep Work' },
      { date: '2025-05-09', duration: '25 mins', type: 'Writing' },
    ]);
  }, [userId]);

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="font-semibold mb-2">Session History</h2>
      <ul className="space-y-2">
        {sessions.map((s, index) => (
          <li key={index}>
            <strong>{s.date}:</strong> {s.duration} - {s.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionHistory;
