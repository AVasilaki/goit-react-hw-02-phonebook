import PropTypes from 'prop-types';
export const Contacts = ({ contacts }) => {
  return (
    <>
      <h2 className='text-2xl mb-4'>Contacts:</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className='mb-2 flex-initial w-64'>
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
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
};
