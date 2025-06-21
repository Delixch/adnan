"use client";

import { useEffect, useState } from 'react';

const WeatherWidget = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and set a mock temperature
    setTimeout(() => {
      setTemperature(18); // Mock temperature for Berlin
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <span className="text-sm">...</span>;
  }

  return (
    <span className="text-sm font-medium">
      {temperature}°C
    </span>
  );
};

export default WeatherWidget; 