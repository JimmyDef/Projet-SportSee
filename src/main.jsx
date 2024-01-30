// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/main.scss";
import { ThemeProvider } from "styled-components";
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={{ ...theme }}>
    <App />
  </ThemeProvider>
);
