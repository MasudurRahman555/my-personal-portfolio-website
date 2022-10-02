import React, { Component } from "react";

class Practise extends Component {
  state = { toggle: true };

  render() {
    const { toggle } = this.state;
    // console.log(toggle);
    return (
      <h1>
        {/* <button
          onClick={() => {
            this.setState({ toggle: !toggle });
          }}
        >
          {toggle ? 'hide' : 'show'}
        </button>
        {toggle && (<span>lorem10</span>)} */}
       
      </h1>
    );
  }
}

export default Practise;
