'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getWelcomeMessage } from '@/app/actions';

export function AIWelcome() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const referrer = document.referrer;
        const result = await getWelcomeMessage(referrer);
        setMessage(result.message);
      } catch (error) {
        console.error('Failed to get personalized message:', error);
        setMessage('Welcome to my digital workshop.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessage();
  }, []);

  const words = message.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  if (isLoading) {
    return (
      <div className="h-8 w-3/4 bg-muted/50 rounded-md animate-pulse" />
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
