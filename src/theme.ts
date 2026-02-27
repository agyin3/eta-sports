import { createTheme } from '@mui/material/styles';

// Core palette (6-digit hex for compatibility)
const colors = {
  coffeeBean: '#110201',
  goldenBronze: '#CBA140',
  pitchBlack: '#0A0102',
  mustard: '#FBDA51',
  richMahogany: '#38180D',
};

declare module '@mui/material/styles' {
  interface Theme {
    gradients: {
      top: string;
      right: string;
      bottom: string;
      left: string;
      radial: string;
    };
  }
  // allow configuration when creating the theme
  interface ThemeOptions {
    gradients?: {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
      radial?: string;
    };
  }
}

const gradients = {
  top: `linear-gradient(0deg, ${colors.coffeeBean}, ${colors.goldenBronze}, ${colors.pitchBlack}, ${colors.mustard}, ${colors.richMahogany})`,
  right: `linear-gradient(90deg, ${colors.coffeeBean}, ${colors.goldenBronze}, ${colors.pitchBlack}, ${colors.mustard}, ${colors.richMahogany})`,
  bottom: `linear-gradient(180deg, ${colors.coffeeBean}, ${colors.goldenBronze}, ${colors.pitchBlack}, ${colors.mustard}, ${colors.richMahogany})`,
  left: `linear-gradient(270deg, ${colors.coffeeBean}, ${colors.goldenBronze}, ${colors.pitchBlack}, ${colors.mustard}, ${colors.richMahogany})`,
  radial: `radial-gradient(circle, ${colors.coffeeBean}, ${colors.goldenBronze}, ${colors.pitchBlack}, ${colors.mustard}, ${colors.richMahogany})`,
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.goldenBronze,
      contrastText: colors.pitchBlack,
    },
    secondary: {
      main: colors.mustard,
      contrastText: colors.pitchBlack,
    },
    background: {
      default: colors.pitchBlack,
      paper: colors.richMahogany,
    },
    text: {
      primary: colors.mustard,
      secondary: colors.goldenBronze,
    },
    error: {
      main: colors.richMahogany,
    },
  },
  typography: {
    fontFamily: ['Orbitron', 'Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: { color: colors.goldenBronze },
    h2: { color: colors.goldenBronze },
    h3: { color: colors.mustard },
  },
  gradients,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: gradients.right,
            color: colors.pitchBlack,
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: colors.pitchBlack,
        },
      },
    },
  },
});

export default theme;
