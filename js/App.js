import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Tux",
      animal: "Dog",
      breed: "Labradoodle"
    }),
    React.createElement(Pet, {
      name: "Raisin",
      animal: "Dog",
      breed: "Cockapoo"
    }),
    React.createElement(Pet, {
      name: "Sporty",
      animal: "Dog",
      breed: "Golden Retriever"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
