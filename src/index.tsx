import ReactDOM from "react-dom";

import { ThemeProvider } from "@mui/material";

import App from "./app/App";
import { AuthContextProvider } from "./context/authContext";
import { LayoutMainProviderContext } from "./context/MainLayoutContext";
import theme from "./stylesTheme/Theme";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <>
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <LayoutMainProviderContext>
          <App />
        </LayoutMainProviderContext>
      </ThemeProvider>
    </AuthContextProvider>
  </>,
  document.getElementById("root")
);
