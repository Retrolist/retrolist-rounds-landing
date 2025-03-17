import { UserbackProvider } from "@userback/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserbackProvider token="A-qtLvQIC1pFYrlXuqe0EdDUF9e">
      <App />
    </UserbackProvider>
  </StrictMode>
);
