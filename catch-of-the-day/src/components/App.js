import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import samplefishes from "../sample-fishes";
export default class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  //addFish property has a function that takes fish and passes down.
  addFish = fish => {
    //1. Take a copy of existing state. Spreads out the existing state of fishes
    const fishes = { ...this.state.fishes };
    //2. Add our new fish to that fishes state along with keys that is time.
    fishes[`fish${Date.now()}`] = fish;
    //fish goes down to addFishForm in the props.fish
    //3. set the new fishes object to state
    //can also be this.setState({ fishes});
    this.setState({
      fishes: fishes
    });
    console.log("fish");
  };

  loadSampleFishes = () => {
    this.setState({ fishes: samplefishes})
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes ={this.loadSampleFishes}/>
      </div>
    );
  }
}
