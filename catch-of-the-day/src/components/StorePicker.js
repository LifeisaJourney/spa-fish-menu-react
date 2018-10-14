import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
  render() {
    return (
      <Fragment>
        <form className='store-selector'>
          <h2> Enter a store</h2>
          <p>I am the store picker!</p>
          <input
            type="text"
            placeholder="Store Name"
            defaultValue={getFunName()} />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    );
  }
}