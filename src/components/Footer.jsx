import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: profile.social.github, icon: '💻' },
    { name: 'LinkedIn', url: profile.social.linkedin, icon: '💼' },
    { name: 'Twitter', url: profile.social.twitter, icon: '🐦' },
    { name: 'Dribbble', url: profile.social.dribbble, icon: '🎨' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>{profile.name.charAt(0)}</span>
              <span className={styles.logoText}>{profile.name}</span>
            </div>
            <p className={styles.tagline}>{profile.tagline}</p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={styles.link}
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4 className={styles.linksTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>📧</span>
                <a href={`mailto:${profile.email}`} className={styles.contactLink}>
                  {profile.email}
                </a>
              </li>
              <li>
                <span className={styles.contactIcon}>📱</span>
                <a href={`tel:${profile.phone}`} className={styles.contactLink}>
                  {profile.phone}
                </a>
              </li>
              <li>
                <span className={styles.contactIcon}>📍</span>
                <span className={styles.contactText}>{profile.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className={styles.credit}>
            Crafted with <span className={styles.heart}>❤️</span> using React
          </p>
          <button
            className={styles.scrollTop}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
