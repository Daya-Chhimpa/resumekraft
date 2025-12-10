import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = ({ profile, onThemeChange, onTemplateChange, currentTheme, currentTemplate, themes, templates }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isTemplateDropdownOpen, setIsTemplateDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
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
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo} onClick={(e) => handleNavClick(e, '#hero')}>
          <span className={styles.logoIcon}>{profile.name.charAt(0)}</span>
          <span className={styles.logoText}>{profile.name.split(' ')[0]}</span>
        </a>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.controls}>
          {/* Theme Switcher */}
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownToggle}
              onClick={() => {
                setIsThemeDropdownOpen(!isThemeDropdownOpen);
                setIsTemplateDropdownOpen(false);
              }}
              aria-label="Select theme"
            >
              <span className={styles.dropdownIcon}>🎨</span>
              <span className={styles.dropdownLabel}>Theme</span>
              <span className={styles.dropdownArrow}>▼</span>
            </button>
            {isThemeDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    className={`${styles.dropdownItem} ${currentTheme === theme.id ? styles.active : ''}`}
                    onClick={() => {
                      onThemeChange(theme.id);
                      setIsThemeDropdownOpen(false);
                    }}
                  >
                    <span className={styles.dropdownItemIcon}>{theme.icon}</span>
                    <span>{theme.label}</span>
                    {currentTheme === theme.id && <span className={styles.checkmark}>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Template Switcher */}
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownToggle}
              onClick={() => {
                setIsTemplateDropdownOpen(!isTemplateDropdownOpen);
                setIsThemeDropdownOpen(false);
              }}
              aria-label="Select template"
            >
              <span className={styles.dropdownIcon}>📄</span>
              <span className={styles.dropdownLabel}>Template</span>
              <span className={styles.dropdownArrow}>▼</span>
            </button>
            {isTemplateDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {templates.map((template) => (
                  <button
                    key={template.id}
                    className={`${styles.dropdownItem} ${currentTemplate === template.id ? styles.active : ''}`}
                    onClick={() => {
                      onTemplateChange(template.id);
                      setIsTemplateDropdownOpen(false);
                    }}
                  >
                    <span className={styles.dropdownItemIcon}>{template.icon}</span>
                    <span>{template.label}</span>
                    {currentTemplate === template.id && <span className={styles.checkmark}>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
