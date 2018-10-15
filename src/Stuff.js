import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>STUFF</h2>
        <p>Wow so much stuff.</p>
        <img src={require('./largeimage.jpg')} />
      </div>
    );
  }
}
export default Stuff;