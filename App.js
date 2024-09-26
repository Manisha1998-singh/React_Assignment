import React from "react";
import ReactDOM from "react-dom/client";

const Title = ({ children }) => (
  <h1 className="head">{children || "React JSX"}</h1>
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
    {/* //{Title()} */}
    <Title />
    <Title></Title>
    {/* 1. Reference to the component, not rendering */}
    {Title}
    {/* This is incorrect; it's referencing the function itself  also getting the warnings*/}
    {/* 2. Immediate rendering without children */}
    {<Title />}
    {/* 3. Rendering with children */}
    {<Title> This is the react functional component</Title>}
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
