// React
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Chackra Ui
import { ChakraProvider } from "@chakra-ui/react";

// Css and Styles
import "./index.css";
import theme from "./styles/theme.js";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
