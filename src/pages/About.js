import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <p>im alvin im from university of virginia. i have no idea how frontend stuff works. i still don't, i'm just filling out the blanks.</p> 
        <img src={require("./bananaphone.jpg")}/>
      </div>
    )
  }
}