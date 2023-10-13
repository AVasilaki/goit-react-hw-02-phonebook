import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContact } from './AddContact/AddContact';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
  };
  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  render() {
    const { filter } = this.state;

    const { contacts } = this.state;
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
    return (
      <>
        <AddContact
          // name={name}
          // handleChange={this.handleChange}
          addNewContact={this.handleAddContact}
        ></AddContact>
        <Filter handleFilter={this.handleFilter}></Filter>
        <Contacts contacts={filtredContacts}></Contacts>
      </>
    );
  }
}