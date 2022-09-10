import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from './contactForm/contactForm';
import FindContact from './findContact/findContact';
import ContactList from './contactList/contactList';

// ----------- CSS ----------- //
import { MainContainer, Title } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacs = JSON.parse(contacts);

    if (parsedContacs.length > 0) {
      setContacts(parsedContacs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = newContact => {
    const contact = {
      id: shortid.generate(),
      ...newContact,
    };

    const newArray = contacts.filter(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (newArray.length > 0) {
      return alert(`${newContact.name} is already in contacts`);
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const deleteContact = ContactId => {
    setContacts(contacts.filter(contact => contact.id !== ContactId));
  };

  const filterNormalizes = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormalizes)
  );

  return (
    <MainContainer>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addNewContact} />
      <Title>Contacts</Title>
      <FindContact filter={filter} onChange={setFilter} />
      <ContactList array={visibleContacts} deleteContact={deleteContact} />
    </MainContainer>
  );
};
