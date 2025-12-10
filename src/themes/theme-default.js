const themeDefault = {
  name: 'default',
  label: 'Default Light',
  colors: {
    // Primary colors
    primary: '#4F46E5',
    primaryLight: '#818CF8',
    primaryDark: '#3730A3',

    // Secondary colors
    secondary: '#10B981',
    secondaryLight: '#34D399',
    secondaryDark: '#059669',

    // Accent colors
    accent: '#F59E0B',
    accentLight: '#FBBF24',
    accentDark: '#D97706',

    // Background colors
    background: '#FFFFFF',
    backgroundAlt: '#F8FAFC',
    backgroundCard: '#FFFFFF',

    // Surface colors
    surface: '#F1F5F9',
    surfaceHover: '#E2E8F0',

    // Text colors
    text: '#1E293B',
    textSecondary: '#64748B',
    textMuted: '#94A3B8',
    textInverse: '#FFFFFF',

    // Border colors
    border: '#E2E8F0',
    borderLight: '#F1F5F9',

    // Status colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',

    // Shadow colors
    shadow: 'rgba(0, 0, 0, 0.1)',
    shadowDark: 'rgba(0, 0, 0, 0.2)',

    // Gradient
    gradientStart: '#4F46E5',
    gradientEnd: '#818CF8'
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'Fira Code', monospace"
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
  },
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease'
  }
};

export default themeDefault;
