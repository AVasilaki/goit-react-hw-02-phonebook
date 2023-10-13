import PropTypes from 'prop-types';
export const Filter = ({ handleFilter }) => {
  return (
    <div className='mb-2 '>
      <label className='text-lg'>
        Find contacts by name
        <input
          type='text'
          name='filter'
          onChange={handleFilter}
          className='rounded-lg bg-blue-500 px-2 '
        ></input>
      </label>
    </div>
  );
};
Filter.propTypes = {
  handleFilter: PropTypes.func,
};
