import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({
  title,
  subtitle,
  alignment = 'center',
  showLine = true,
  className = ''
}) => {
  return (
    <div className={`${styles.sectionTitle} ${styles[alignment]} ${className}`}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      {showLine && <div className={styles.line}></div>}
    </div>
  );
};

export default SectionTitle;
