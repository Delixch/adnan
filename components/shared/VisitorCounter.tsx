"use client";

import { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/counter', { method: 'POST' });
        if (response.ok) {
          const data = await response.json();
          setCount(data.count);
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };
    fetchCount();
  }, []);

  return (
    <div className="text-xl font-bold text-gray-200">
      {count !== null ? count : '...'}
    </div>
  );
};

export default VisitorCounter; 