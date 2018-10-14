import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
  // handleClick(){
  //   alert('hey');
  // }

  // constructor(){
  //   super();
  //   this.goToStore=this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    console.log(this);
  }

  // componentDidMount() {
  //   console.log("Mounted");
  //   console.log(this);
  // }

  render() {
    // console.log(this);
    return (
      <Fragment>
        <form className='store-selector' onSubmit={this.goToStore}>
          <h2> Enter a store</h2>
          {/* <button onClick={this.handleClick}> Click Me!</button> */}
          <p>I am the store picker!</p>
          <input
            type="text" 
            ref={this.myInput}
            required placeholder="Store Name"
            defaultValue={getFunName()} />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    );
  }
}