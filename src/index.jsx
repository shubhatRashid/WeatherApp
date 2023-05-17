import React from "react"
import ReactDom from "react-dom"
import App from "./components/App.jsx"
import { createRoot } from "react-dom/client";
import "./styles.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <App class = "app"/>
  </div>
);
