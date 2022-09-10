import { ContactListStl } from './contactList.styled';
import ContactListElement from 'components/contactElement/contactElement';
import propTypes from 'prop-types';

const ContactList = ({ array, deleteContact }) => {
  return (
    <ContactListStl>
      {array.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ContactListElement
              id={id}
              name={name}
              number={number}
              onDelete={deleteContact}
            />
          </li>
        );
      })}
    </ContactListStl>
  );
};

export default ContactList;

ContactList.propTypes = {
  array: propTypes.arrayOf(propTypes.object).isRequired,
  deleteContact: propTypes.func.isRequired,
};
