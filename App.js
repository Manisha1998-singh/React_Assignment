import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    React JSX
  </h1>
);
const List = () => (
  <div>
    <ul>
      <li>Home</li>
      <li> Contact</li>
      <li> About</li>
    </ul>
  </div>
);
const Heading = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1
      className="title"
      style={{ color: "pink", backgroundColor: "red", height: 100 }}>
      React Functional Component.{" "}
    </h1>
    <List></List>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading></Heading>);
