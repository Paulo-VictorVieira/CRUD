import React from 'react';
import ContactContext from '../../Context/ContactContext';

const ContactFilter = () => {
  const contactContext = React.useContext(ContactContext);
  const { filtered, filterContacts, clearFilter } = contactContext;

  const text = React.useRef('');

  React.useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, [filtered]);

  const handleChange = ({ target }) => {
    if (text.current.value !== '') {
      filterContacts(target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Procure seu contato..."
        onChange={handleChange}
      />
    </form>
  );
};

export default ContactFilter;
