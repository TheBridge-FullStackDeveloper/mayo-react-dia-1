import "./App.css";
import React from "react";
import Welcome from "./components/Welcome/Welcome";
import WelcomeClass from "./components/WelcomeClass/WelcomeClass";
import ListItems from "./components/ListItems/ListItems";

const name = "Yolanda";
const whoIAm = <h1 className="text">Hola, me llamo {name}</h1>;
const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="container">
      <h1>Bienvenid@s a react</h1>
      {whoIAm}
      {whoIAm}
      <Welcome title={name} score={10} />
      <Welcome title="Adrian" score={5} />
      <Welcome title="Juanda <3" score={20} />
      <Welcome title="Miki :)" score={100} />

      <WelcomeClass name="Patri" />
      <WelcomeClass name="Sara" />
      <WelcomeClass name="Victor" />

     <ListItems listItems={numbers}/>
     <ListItems listItems={['a','b','c','d']}/>

    </div>
  );
}

export default App;
