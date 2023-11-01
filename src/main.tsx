import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/global.scss";
import App from "./App";
import { UserProvider } from "./context/user";
import { ProjectProvider } from "./context/project";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
