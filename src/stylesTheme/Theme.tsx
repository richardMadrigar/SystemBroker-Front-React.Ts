import { createTheme } from "@mui/material/styles";

// Typando os novos temas criados
declare module "@mui/material/styles" {
  interface Theme {
    text: {
      primary: React.CSSProperties["color"];
    };
    drawer: {
      primary: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
    };
    background: {
      primary: React.CSSProperties["color"];
    };
    backgroundHover: {
      primary: React.CSSProperties["color"];
    };
    home: {
      color: React.CSSProperties["color"];
      backgroundButton: {
        primary: React.CSSProperties["color"];
      };
      backgroundButtonHover: {
        primary: React.CSSProperties["color"];
      };
    };
  }
  interface ThemeOptions {
    text: {
      primary: React.CSSProperties["color"];
    };
    drawer: {
      primary: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
    };
    background: {
      primary: React.CSSProperties["color"];
    };
    backgroundHover: {
      primary: React.CSSProperties["color"];
    };
    home: {
      color: React.CSSProperties["color"];
      backgroundButton: {
        primary: React.CSSProperties["color"];
      };
      backgroundButtonHover: {
        primary: React.CSSProperties["color"];
      };
    };
  }
}

// cores personalizadas
const theme = createTheme({
  text: {
    primary: "#6f6f6f",
  },

  drawer: {
    primary: "#1E1E2D",
    secondary: "#f1f1f1",
  },

  background: {
    primary: "#F1F3F6",
  },
  backgroundHover: {
    primary: "#262626",
  },

  home: {
    color: "#0e6aff",

    backgroundButton: {
      primary: "#D0E1Fd",
    },
    backgroundButtonHover: {
      primary: "#0d0d92",
    },
  },

  palette: {
    primary: {
      main: "#0269BA",
    },
  },
});

export default theme;
