import React from "react";
import AddFishForm from "./AddFishForm";

export default class Inventory extends React.Component {
  //this.props.addFish goes down to addFishForm
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish}/>
      </div>
    );
  }
}
