import themeDefault from './theme-default';
import themeModern from './theme-modern';
import themeMinimal from './theme-minimal';
import themeGradient from './theme-gradient';
import themeBlue from './theme-blue';

export const themes = {
  default: themeDefault,
  modern: themeModern,
  minimal: themeMinimal,
  gradient: themeGradient,
  blue: themeBlue
};

export const themeList = [
  { id: 'default', label: 'Default Light', icon: '☀️' },
  { id: 'modern', label: 'Modern Dark', icon: '🌙' },
  { id: 'minimal', label: 'Minimal Clean', icon: '✨' },
  { id: 'gradient', label: 'Vibrant Gradient', icon: '🎨' },
  { id: 'blue', label: 'Ocean Blue', icon: '🌊' }
];

export const applyTheme = (theme) => {
  const root = document.documentElement;
  const colors = theme.colors;

  // Apply CSS custom properties
  root.style.setProperty('--color-primary', colors.primary);
  root.style.setProperty('--color-primary-light', colors.primaryLight);
  root.style.setProperty('--color-primary-dark', colors.primaryDark);
  root.style.setProperty('--color-secondary', colors.secondary);
  root.style.setProperty('--color-secondary-light', colors.secondaryLight);
  root.style.setProperty('--color-secondary-dark', colors.secondaryDark);
  root.style.setProperty('--color-accent', colors.accent);
  root.style.setProperty('--color-accent-light', colors.accentLight);
  root.style.setProperty('--color-accent-dark', colors.accentDark);
  root.style.setProperty('--color-background', colors.background);
  root.style.setProperty('--color-background-alt', colors.backgroundAlt);
  root.style.setProperty('--color-background-card', colors.backgroundCard);
  root.style.setProperty('--color-surface', colors.surface);
  root.style.setProperty('--color-surface-hover', colors.surfaceHover);
  root.style.setProperty('--color-text', colors.text);
  root.style.setProperty('--color-text-secondary', colors.textSecondary);
  root.style.setProperty('--color-text-muted', colors.textMuted);
  root.style.setProperty('--color-text-inverse', colors.textInverse);
  root.style.setProperty('--color-border', colors.border);
  root.style.setProperty('--color-border-light', colors.borderLight);
  root.style.setProperty('--color-success', colors.success);
  root.style.setProperty('--color-warning', colors.warning);
  root.style.setProperty('--color-error', colors.error);
  root.style.setProperty('--color-info', colors.info);
  root.style.setProperty('--color-shadow', colors.shadow);
  root.style.setProperty('--color-shadow-dark', colors.shadowDark);
  root.style.setProperty('--color-gradient-start', colors.gradientStart);
  root.style.setProperty('--color-gradient-end', colors.gradientEnd);
  if (colors.gradientMid) {
    root.style.setProperty('--color-gradient-mid', colors.gradientMid);
  }

  // Apply fonts
  root.style.setProperty('--font-heading', theme.fonts.heading);
  root.style.setProperty('--font-body', theme.fonts.body);
  root.style.setProperty('--font-mono', theme.fonts.mono);

  // Apply font sizes
  Object.entries(theme.fontSizes).forEach(([key, value]) => {
    root.style.setProperty(`--font-size-${key}`, value);
  });

  // Apply spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    root.style.setProperty(`--spacing-${key}`, value);
  });

  // Apply border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    root.style.setProperty(`--radius-${key}`, value);
  });

  // Apply shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    root.style.setProperty(`--shadow-${key}`, value);
  });

  // Apply transitions
  Object.entries(theme.transitions).forEach(([key, value]) => {
    root.style.setProperty(`--transition-${key}`, value);
  });

  // Apply gradients if they exist
  if (theme.gradients) {
    Object.entries(theme.gradients).forEach(([key, value]) => {
      root.style.setProperty(`--gradient-${key}`, value);
    });
  }

  // Store theme preference
  localStorage.setItem('selectedTheme', theme.name);
};

export {
  themeDefault,
  themeModern,
  themeMinimal,
  themeGradient,
  themeBlue
};

export default themes;
