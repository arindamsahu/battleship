import React, { Component } from 'react';
import Squares from './Squares';


class Board extends Component {
  render() {
    return (
      <div className="Board">
      <Squares></Squares>
      </div>
    );
  }
}

export default Board;
