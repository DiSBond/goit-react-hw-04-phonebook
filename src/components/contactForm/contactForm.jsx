import { useState } from 'react';
import { ContactFormSt } from './contactForm.styled';
import propTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onButtonClick = e => {
    e.preventDefault();

    onSubmit({ name: name, number: number });

    setName('');
    setNumber('');
  };

  return (
    <div>
      <ContactFormSt onSubmit={onButtonClick}>
        <label>
          Name
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => setName(e.currentTarget.value)}
            value={name}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => setNumber(e.currentTarget.value)}
            value={number}
          />
        </label>
        <button type="submit">Add contact</button>
      </ContactFormSt>
    </div>
  );
};

export default ContactForm;

ContactForm.propTypes = { onSubmit: propTypes.func.isRequired };
