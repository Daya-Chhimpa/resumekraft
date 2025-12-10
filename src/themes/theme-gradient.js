const themeGradient = {
  name: 'gradient',
  label: 'Vibrant Gradient',
  colors: {
    // Primary colors
    primary: '#8B5CF6',
    primaryLight: '#A78BFA',
    primaryDark: '#7C3AED',

    // Secondary colors
    secondary: '#EC4899',
    secondaryLight: '#F472B6',
    secondaryDark: '#DB2777',

    // Accent colors
    accent: '#06B6D4',
    accentLight: '#22D3EE',
    accentDark: '#0891B2',

    // Background colors
    background: '#0F0F1A',
    backgroundAlt: '#1A1A2E',
    backgroundCard: '#16162A',

    // Surface colors
    surface: '#252542',
    surfaceHover: '#2E2E52',

    // Text colors
    text: '#FFFFFF',
    textSecondary: '#D4D4E8',
    textMuted: '#9CA3C0',
    textInverse: '#0F0F1A',

    // Border colors
    border: '#3D3D5C',
    borderLight: '#4D4D6D',

    // Status colors
    success: '#10B981',
    warning: '#FBBF24',
    error: '#F87171',
    info: '#60A5FA',

    // Shadow colors
    shadow: 'rgba(139, 92, 246, 0.2)',
    shadowDark: 'rgba(139, 92, 246, 0.4)',

    // Gradient
    gradientStart: '#8B5CF6',
    gradientMid: '#EC4899',
    gradientEnd: '#06B6D4'
  },
  fonts: {
    heading: "'Outfit', sans-serif",
    body: "'Plus Jakarta Sans', sans-serif",
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
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 2px 4px rgba(139, 92, 246, 0.1)',
    md: '0 4px 12px rgba(139, 92, 246, 0.15)',
    lg: '0 8px 24px rgba(139, 92, 246, 0.2)',
    xl: '0 16px 48px rgba(139, 92, 246, 0.25)'
  },
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease'
  },
  gradients: {
    primary: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #06B6D4 100%)',
    secondary: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
    accent: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
    hero: 'linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 50%, #16162A 100%)',
    card: 'linear-gradient(145deg, #1A1A2E 0%, #16162A 100%)'
  }
};

export default themeGradient;
