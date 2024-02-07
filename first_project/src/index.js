//Import react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

//Import Component
import App from "./App";

// Get a reference to the div with ID root
// Tell React to take control of that element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Show componet on the screen */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
