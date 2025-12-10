import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  category,
  tags = [],
  liveUrl,
  githubUrl,
  featured = false,
  stats,
  variant = 'default' // 'default', 'minimal', 'overlay'
}) => {
  if (variant === 'minimal') {
    return (
      <div className={styles.cardMinimal}>
        <div className={styles.minimalContent}>
          <span className={styles.minimalCategory}>{category}</span>
          <h3 className={styles.minimalTitle}>{title}</h3>
          <p className={styles.minimalDescription}>{description}</p>
          <div className={styles.minimalTags}>
            {tags.slice(0, 4).map((tag, index) => (
              <span key={index} className={styles.minimalTag}>{tag}</span>
            ))}
          </div>
          <div className={styles.minimalLinks}>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.minimalLink}>
                View Live →
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.minimalLink}>
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'overlay') {
    return (
      <div className={`${styles.cardOverlay} ${featured ? styles.featured : ''}`}>
        <div className={styles.overlayImage}>
          <img src={image} alt={title} />
          <div className={styles.overlayGradient}></div>
        </div>
        <div className={styles.overlayContent}>
          <span className={styles.overlayCategory}>{category}</span>
          <h3 className={styles.overlayTitle}>{title}</h3>
          <p className={styles.overlaySubtitle}>{subtitle}</p>
          <div className={styles.overlayActions}>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn}>
                <span>🔗</span> Live
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn}>
                <span>💻</span> Code
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
        <div className={styles.cardOverlayHover}>
          <div className={styles.hoverActions}>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                🔗 Live Demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                💻 View Code
              </a>
            )}
          </div>
        </div>
        {featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <span className={styles.cardCategory}>{category}</span>
          {stats && (
            <div className={styles.cardStats}>
              {Object.entries(stats).slice(0, 2).map(([key, value]) => (
                <span key={key} className={styles.stat}>
                  <strong>{value}</strong> {key}
                </span>
              ))}
            </div>
          )}
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardTags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
