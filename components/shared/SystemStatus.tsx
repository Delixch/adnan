"use client";

import { useEffect, useState } from 'react';
import { HiChip, HiWifi } from 'react-icons/hi';

const SystemStatus = () => {
  const [systemData, setSystemData] = useState({
    cpu: 0,
    memory: 0,
    network: 'Online'
  });

  useEffect(() => {
    // Simulate system data updates
    const updateSystemData = () => {
      setSystemData({
        cpu: Math.floor(Math.random() * 30) + 20, // 20-50%
        memory: Math.floor(Math.random() * 40) + 30, // 30-70%
        network: 'Online'
      });
    };

    updateSystemData();
    const interval = setInterval(updateSystemData, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-start justify-center h-full text-white text-xs">
      <div className="flex items-center space-x-2 mb-1">
        <HiChip className="w-4 h-4 text-blue-400" />
        <span>CPU: {systemData.cpu}%</span>
      </div>
      <div className="flex items-center space-x-2 mb-1">
        <HiChip className="w-4 h-4 text-green-400" />
        <span>RAM: {systemData.memory}%</span>
      </div>
      <div className="flex items-center space-x-2">
        <HiWifi className="w-4 h-4 text-yellow-400" />
        <span>{systemData.network}</span>
      </div>
    </div>
  );
};

export default SystemStatus; 