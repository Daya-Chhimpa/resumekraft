import React, { useState, useEffect, useRef } from 'react';
import styles from './SkillBar.module.css';

const SkillBar = ({
  name,
  level,
  variant = 'bar', // 'bar', 'circle', 'tag'
  showPercentage = true,
  animated = true,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && animated) {
      const timeout = setTimeout(() => {
        setCurrentLevel(level);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (!animated) {
      setCurrentLevel(level);
    }
  }, [isVisible, level, animated, delay]);

  // Bar variant
  if (variant === 'bar') {
    return (
      <div className={styles.skillBar} ref={skillRef}>
        <div className={styles.skillHeader}>
          <span className={styles.skillName}>{name}</span>
          {showPercentage && (
            <span className={styles.skillLevel}>{currentLevel}%</span>
          )}
        </div>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{
              width: `${currentLevel}%`,
              transitionDelay: `${delay}ms`
            }}
          ></div>
        </div>
      </div>
    );
  }

  // Circle variant
  if (variant === 'circle') {
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (currentLevel / 100) * circumference;

    return (
      <div className={styles.skillCircle} ref={skillRef}>
        <svg className={styles.circleSvg} viewBox="0 0 100 100">
          <circle
            className={styles.circleTrack}
            cx="50"
            cy="50"
            r="45"
            strokeWidth="8"
            fill="none"
          />
          <circle
            className={styles.circleFill}
            cx="50"
            cy="50"
            r="45"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              transitionDelay: `${delay}ms`
            }}
          />
        </svg>
        <div className={styles.circleContent}>
          {showPercentage && (
            <span className={styles.circleLevel}>{currentLevel}%</span>
          )}
        </div>
        <span className={styles.circleName}>{name}</span>
      </div>
    );
  }

  // Tag variant
  if (variant === 'tag') {
    return (
      <div className={styles.skillTag} ref={skillRef}>
        <span className={styles.tagName}>{name}</span>
        {showPercentage && (
          <span className={styles.tagLevel}>{level}%</span>
        )}
      </div>
    );
  }

  return null;
};

export default SkillBar;
