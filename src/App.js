import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
return React.createElement("div", {}, [
  React.createElement("h1", {}, "Adopt Me!"),
  React.createElement(Pet, {
    name: "Leo",
    animal: "Dog",
    breed: "Beagle",
  }),
  React.createElement(Pet, {
    name: "Lilly",
    animal: "Dog",
    breed: "Chihuahua",
  }),
  React.createElement(Pet, {
    name: "Doink",
    animal: "Cat",
    breed: "Mixed",
  }),
]);
};

render(React.createElement(App), document.getElementById("root"));
