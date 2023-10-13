// import PropTypes from 'prop-types';
// export const AddContact = ({ handleChange, name, addNewContact }) => {
//   return (
//     <>
//       <form onSubmit={addNewContact}>
//         <label>
//           Name:
//           <input type='text' name='contact' value={name} onChange={handleChange} required />
//         </label>
//         <button type='submit'>Add contact</button>
//       </form>
//     </>
//   );
// };
// AddContact.propTypes = {
//   name: PropTypes.string,
//   handleChange: PropTypes.func,
//   addNewContact: PropTypes.func,
//   contacts: PropTypes.array,
// };
import { Component } from 'react';

export class AddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.props.addNewContact({
      name: this.state.name,
      number: this.state.number,
    });

    evt.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input type='text' name='name' required onChange={this.onChange} pattern='^[a-zA-Z]+$' />
        </label>
        <label>
          Number:
          <input type='tel' name='number' required onChange={this.onChange} pattern='^[ 0-9]+$' />
        </label>
        <button type='submit'>add contact</button>
      </form>
    );
  }
}
