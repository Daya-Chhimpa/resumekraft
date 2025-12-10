import React from 'react';
import styles from './TimelineItem.module.css';

const TimelineItem = ({
  title,
  subtitle,
  organization,
  organizationLogo,
  location,
  startDate,
  endDate,
  current = false,
  description,
  achievements = [],
  technologies = [],
  variant = 'default', // 'default', 'compact', 'card'
  position = 'left'
}) => {
  const dateRange = current ? `${startDate} - Present` : `${startDate} - ${endDate}`;

  if (variant === 'compact') {
    return (
      <div className={styles.timelineCompact}>
        <div className={styles.compactDot}></div>
        <div className={styles.compactContent}>
          <div className={styles.compactHeader}>
            <h4 className={styles.compactTitle}>{title}</h4>
            <span className={styles.compactDate}>{dateRange}</span>
          </div>
          <p className={styles.compactOrg}>{organization}</p>
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={styles.timelineCard}>
        <div className={styles.cardHeader}>
          {organizationLogo && (
            <img
              src={organizationLogo}
              alt={organization}
              className={styles.cardLogo}
            />
          )}
          <div className={styles.cardMeta}>
            <span className={styles.cardDate}>{dateRange}</span>
            {current && <span className={styles.currentBadge}>Current</span>}
          </div>
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardOrg}>
          {organization} {location && <span>• {location}</span>}
        </p>
        {description && <p className={styles.cardDescription}>{description}</p>}
        {achievements.length > 0 && (
          <ul className={styles.cardAchievements}>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        )}
        {technologies.length > 0 && (
          <div className={styles.cardTechnologies}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>{tech}</span>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default timeline variant
  return (
    <div className={`${styles.timelineItem} ${styles[position]}`}>
      <div className={styles.timelineMarker}>
        <div className={`${styles.markerDot} ${current ? styles.current : ''}`}></div>
        <div className={styles.markerLine}></div>
      </div>
      <div className={styles.timelineContent}>
        <div className={styles.contentHeader}>
          {organizationLogo && (
            <img
              src={organizationLogo}
              alt={organization}
              className={styles.orgLogo}
            />
          )}
          <div className={styles.headerText}>
            <span className={styles.dateRange}>{dateRange}</span>
            {current && <span className={styles.currentBadge}>Current</span>}
          </div>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.organization}>
          {organization}
          {location && <span className={styles.location}> • {location}</span>}
        </p>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
        {achievements.length > 0 && (
          <ul className={styles.achievements}>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        )}
        {technologies.length > 0 && (
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
