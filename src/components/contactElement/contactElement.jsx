import React from 'react';
import propTypes from 'prop-types';

const ContactListElement = ({ id, name, number, onDelete }) => {
  return (
    <div>
      {name}: {number}
      <button onClick={() => onDelete(id)}>Удалить</button>
    </div>
  );
};

export default ContactListElement;

ContactListElement.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
