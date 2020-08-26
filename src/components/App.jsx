import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function createCard(contacts) {
  return (
    <Card
      id={contacts.id}
      key={contacts.id}
      name={contacts.name}
      img={contacts.img}
      alt={contacts.alt}
      num={contacts.num}
      mail={contacts.mail}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
