const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement(Pet, {
        name: 'Leo',
        animal: 'Dog',
        breed: 'Beagle'
      }),
      React.createElement(Pet, {
        name: 'Lilly',
        animal: 'Dog',
        breed: 'Chihuahua'
      }),
      React.createElement(Pet, {
        name: 'Doink',
        animal: 'Cat',
        breed: 'Mixed'
      })
    ]
  );
};

ReactDOM.render(React.createElement(App),
  document.getElementById("root")
);