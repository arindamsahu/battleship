import React, { Component } from 'react';
import Squares from './Squares';


class Board extends Component {

  render() {
    return (
        <Squares rows={10} cols={10}></Squares> 
    );
  }
}

export default Board;
