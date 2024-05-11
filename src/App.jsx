import "./App.css";
import contactsArray from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsArray.slice(0, 5));

  const addContact = () => {
    const contactsCopy = [...contactsArray].slice(5)
    const randomIndex = Math.floor(Math.random() *contactsCopy.length)

    const randomContact = contactsCopy[randomIndex]

    contactsCopy.splice(randomIndex, 1);
    
    setContacts([ randomContact,...contacts])
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt="contact picture" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🌟"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
