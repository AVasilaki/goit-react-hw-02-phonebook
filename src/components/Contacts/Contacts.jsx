import PropTypes from 'prop-types';
export const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className='mb-2 flex items-center justify-between gap-4'>
          <p>
            {name}: {number}
          </p>
          <button
            type='button'
            // onClick={() => onRemoveContact(id)}
            className='rounded-lg bg-blue-500 px-2 hover:bg-rose-600 active:bg-rose-700'
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
};
