const themeMinimal = {
  name: 'minimal',
  label: 'Minimal Clean',
  colors: {
    // Primary colors
    primary: '#171717',
    primaryLight: '#404040',
    primaryDark: '#0A0A0A',

    // Secondary colors
    secondary: '#737373',
    secondaryLight: '#A3A3A3',
    secondaryDark: '#525252',

    // Accent colors
    accent: '#171717',
    accentLight: '#404040',
    accentDark: '#0A0A0A',

    // Background colors
    background: '#FAFAFA',
    backgroundAlt: '#FFFFFF',
    backgroundCard: '#FFFFFF',

    // Surface colors
    surface: '#F5F5F5',
    surfaceHover: '#E5E5E5',

    // Text colors
    text: '#171717',
    textSecondary: '#525252',
    textMuted: '#A3A3A3',
    textInverse: '#FAFAFA',

    // Border colors
    border: '#E5E5E5',
    borderLight: '#F5F5F5',

    // Status colors
    success: '#171717',
    warning: '#525252',
    error: '#171717',
    info: '#525252',

    // Shadow colors
    shadow: 'rgba(0, 0, 0, 0.05)',
    shadowDark: 'rgba(0, 0, 0, 0.1)',

    // Gradient
    gradientStart: '#171717',
    gradientEnd: '#525252'
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Source Sans Pro', sans-serif",
    mono: "'IBM Plex Mono', monospace"
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
    '6xl': '4rem'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '5rem'
  },
  borderRadius: {
    sm: '0',
    md: '0',
    lg: '0',
    xl: '0',
    full: '9999px'
  },
  shadows: {
    sm: 'none',
    md: '0 1px 3px rgba(0, 0, 0, 0.05)',
    lg: '0 4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0 10px 15px rgba(0, 0, 0, 0.05)'
  },
  transitions: {
    fast: '200ms ease',
    normal: '400ms ease',
    slow: '600ms ease'
  }
};

export default themeMinimal;
