import PropTypes from 'prop-types';
export const Filter = ({ handleFilter }) => {
  return (
    <div className='mb-2 flex-initial w-64 '>
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
