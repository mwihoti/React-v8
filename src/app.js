import React from  "react";
import {createRoot} from "react-dom";
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.breed),
    React.createElement("h3", {}, props.animal),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Intro to react"),
    React.createElement(Pet, {
      animal: "Horse",
      breed: "Foreign",
      name: "Mr. Ed",
    }),
    React.createElement(Pet, {
      animal: "Horse",
      breed: "Foreign",
      name: "Mr. Ed",
    }),
    React.createElement(Pet, {
      animal: "Horse",
      breed: "Foreign",
      name: "Mr. Ed",
    }),
  ]);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
