'use client'

import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackTimeOnPage } from '../utils/analytics';

/**
 * Custom hook for tracking page engagement metrics
 * Tracks scroll depth milestones and time on page
 */
export const usePageTracking = () => {
  const scrollMilestones = useRef(new Set<number>());
  const startTime = useRef<number>(Date.now());
  const timeTracked = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track at 25%, 50%, 75%, 90% scroll
      const milestones = [25, 50, 75, 90];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    const handleTimeOnPage = () => {
      const secondsOnPage = Math.floor((Date.now() - startTime.current) / 1000);

      // Track at 30s, 60s, 120s, 300s (5min)
      const timeMilestones = [30, 60, 120, 300];
      timeMilestones.forEach(milestone => {
        if (secondsOnPage >= milestone && !timeTracked.current.has(milestone)) {
          timeTracked.current.add(milestone);
          trackTimeOnPage(milestone);
        }
      });
    };

    // Set up scroll listener
    window.addEventListener('scroll', handleScroll);

    // Set up time tracking interval
    const timeInterval = setInterval(handleTimeOnPage, 5000); // Check every 5 seconds

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);
};
