const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
``;
