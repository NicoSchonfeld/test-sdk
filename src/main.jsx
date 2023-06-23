import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (avt?.platform === "web") {
  // al sacar ? de avt.plataform se rompe la app
  window.addEventListener("readySDK", loadExt);
} else {
  loadExt();
}

function loadExt() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
