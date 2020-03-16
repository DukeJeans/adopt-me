import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Tux" animal="Dog" breed="Labradoodle" />
      <Pet name="Raisin" animal="Dog" breed="Cockapoo" />
      <Pet name="Sporty" animal="Dog" breed="Golden Retriever" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
