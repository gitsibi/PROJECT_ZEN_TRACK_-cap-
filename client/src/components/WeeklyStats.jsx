import React, { useEffect, useState } from 'react';

const WeeklyStats = ({ userId }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Fetch from Weekly Reports API
    // Example: fetch(`/api/reports/weekly?user=${userId}`)
    setStats({ hours: 12, sessions: 18 });
  }, [userId]);

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="font-semibold mb-2">Weekly Stats</h2>
      {stats ? (
        <>
          <p>Hours Focused: {stats.hours}</p>
          <p>Sessions: {stats.sessions}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeeklyStats;
