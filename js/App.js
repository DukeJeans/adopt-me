const Pet = function renderPet(props) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
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
