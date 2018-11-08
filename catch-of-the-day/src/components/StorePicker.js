import React from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
  //This is the handle click method, Either this option with constructor or to use a goToStore property that calls a function. 
  // handleClick(){
  //   alert('hey');
  // }

  // constructor(){
  //   super();
  //   this.goToStore=this.goToStore.bind(this);
  // }

  myInput = React.createRef();
//this is the goToStore property that calls a function
  goToStore = event => {
    //1.stop the form from submitting 
    event.preventDefault();
    //2. get the text from that input
    console.log(this.myInput.current.value)
    const storeName= this.myInput.current.value;
    //3. change page to store whatever they entered

    this.props.history.push(`/store/${storeName}`);
    //the StorePicker lives as child of Router
  };

  // componentDidMount() {
  //   console.log("Mounted");
  //   console.log(this);
  // }

  render() {
    // console.log(this);
    return (

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

    );
  }
}