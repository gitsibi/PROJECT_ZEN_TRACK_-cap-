import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const ProductivityHeatmap = ({ userId }) => {
  useEffect(() => {
    // Fetch and render Chart.js heatmap here
  }, [userId]);

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="font-semibold mb-2">Productivity Heatmap</h2>
      <canvas id="heatmapCanvas"></canvas>
    </div>
  );
};

export default ProductivityHeatmap;
