import { FcContatiner } from './findContact.styled';
import propTypes from 'prop-types';

const FindContact = ({ filter, onChange }) => {
  return (
    <FcContatiner>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={e => onChange(e.currentTarget.value)}
        />
      </label>
    </FcContatiner>
  );
};

export default FindContact;

FindContact.propTypes = {
  filter: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
