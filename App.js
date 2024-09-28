import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";

const Heading = () => (
  <div className="container-fluid m-0">
    <Header />

    <List></List>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading></Heading>);
