import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

export default class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    //1. Take a copy of existing state
    const fishes = { ...this.state.fishes };
    //2. Add our new fish to that fishes cariable
    fishes[`fish${Date.now()}`] = fish;
    //fish goes down to addFishForm in the props.fish
    //3. set the new fishes object to state
    this.setState({
      fishes
    });
    console.log("fish");
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}
