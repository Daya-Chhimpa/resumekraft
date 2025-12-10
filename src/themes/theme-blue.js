const themeBlue = {
  name: 'blue',
  label: 'Ocean Blue',
  colors: {
    // Primary colors
    primary: '#0EA5E9',
    primaryLight: '#38BDF8',
    primaryDark: '#0284C7',

    // Secondary colors
    secondary: '#06B6D4',
    secondaryLight: '#22D3EE',
    secondaryDark: '#0891B2',

    // Accent colors
    accent: '#8B5CF6',
    accentLight: '#A78BFA',
    accentDark: '#7C3AED',

    // Background colors
    background: '#F0F9FF',
    backgroundAlt: '#E0F2FE',
    backgroundCard: '#FFFFFF',

    // Surface colors
    surface: '#BAE6FD',
    surfaceHover: '#7DD3FC',

    // Text colors
    text: '#0C4A6E',
    textSecondary: '#0369A1',
    textMuted: '#38BDF8',
    textInverse: '#FFFFFF',

    // Border colors
    border: '#BAE6FD',
    borderLight: '#E0F2FE',

    // Status colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#0EA5E9',

    // Shadow colors
    shadow: 'rgba(14, 165, 233, 0.15)',
    shadowDark: 'rgba(14, 165, 233, 0.3)',

    // Gradient
    gradientStart: '#0EA5E9',
    gradientEnd: '#06B6D4'
  },
  fonts: {
    heading: "'Nunito', sans-serif",
    body: "'Open Sans', sans-serif",
    mono: "'Source Code Pro', monospace"
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
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 3px rgba(14, 165, 233, 0.1)',
    md: '0 4px 6px rgba(14, 165, 233, 0.12)',
    lg: '0 10px 15px rgba(14, 165, 233, 0.15)',
    xl: '0 20px 25px rgba(14, 165, 233, 0.2)'
  },
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease'
  }
};

export default themeBlue;
