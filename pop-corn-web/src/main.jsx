import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import StarRating from "./Component/StarRating";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} />
    <StarRating /> */}
  </React.StrictMode>,
)
