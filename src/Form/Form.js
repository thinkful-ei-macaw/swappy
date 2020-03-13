import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div id="form">
        <label htmlFor="form">Search: </label>
        <input type="text" />
        <button type="submit">Submit</button>
      </div>
    )
  }
};

export default Form;