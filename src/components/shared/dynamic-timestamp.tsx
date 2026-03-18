'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const DynamicTimestamp = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Set initial time on client mount to avoid hydration mismatch
    const updateTimestamp = () => {
      setCurrentTime(format(new Date(), "h:mm:ss a 'IST', MMMM d, yyyy"));
    };
    
    updateTimestamp();

    const timer = setInterval(updateTimestamp, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!currentTime) {
    return <div className="h-5 w-64 bg-muted/50 rounded-md animate-pulse" />;
  }

  return (
    <p>
      Last updated: <time dateTime={new Date().toISOString()}>{currentTime}</time>
    </p>
  );
};

export default DynamicTimestamp;
