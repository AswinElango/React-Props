import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].img}
        alt={contacts[0].alt}
        num={contacts[0].num}
        mail={contacts[0].mail}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        alt={contacts[1].alt}
        num={contacts[1].num}
        mail={contacts[1].mail}
      />
    </div>
  );
}

export default App;
