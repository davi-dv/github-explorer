// não preciso mais importa o React em todo arquivo por causa da extensão do babel.config.js
// import React from "react";
import React from "react";
import { App } from "./App";
import ReactDOM from "react-dom/client";


// render recebe 2 params;
// 1- oque eu quero renderizar
// 2 - dentro de qual elemento eu quero renderizar essa informação
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// render(App(), document.getElementById("root"));
