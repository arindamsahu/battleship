import React, { Component } from 'react';
import './Squares.css';

class Squares extends Component {	

constructor(props){
	super(props);
	this.createSquare = this.createSquare.bind(this);
}

createSquare(){

let indents = [], rows = this.props.rows, cols = this.props.cols;
let squareSize = 50;
for (let i = 0; i < rows; i++) {
      	for (let j = 0; j < cols; j++) {
      		let topPosition = j * squareSize;
			let leftPosition = i * squareSize;
			let divStyle = {
				top: topPosition+'px', 
				left: leftPosition+'px'
			};
      		indents.push(<div style={divStyle}></div>);
      	}	
      }
    return indents;
}

  render() {
    return (
      <div className="parentSquare">
      	{this.createSquare()}
      </div>
    );
  }
}

export default Squares;
