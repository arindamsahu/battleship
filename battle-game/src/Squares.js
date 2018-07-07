import React, { Component } from 'react';
import './Squares.css';

class Squares extends Component {	

constructor(props){
	super(props);
	this.handleClick = this.handleClick.bind(this);
	this.gameBoard = [
        [0,0,0,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,1,0,0,0],
        [1,0,0,0,0,0,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0],
        [1,0,0,1,0,0,0,0,0,0],
        [1,0,0,1,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0,0]
        ]
    this.hitCount = 0;
    this.count = 0;
}


  handleClick = (e) => {
       // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
  if (e.target !== e.currentTarget) {
        // extract row and column # from the HTML element's id
    let row = e.target.id.substring(0,1);
    let col = e.target.id.substring(1,2);
        //alert("Clicked on row " + row + ", col " + col);
        
    // if player clicks a square with no ship, change the color and change square's value
    if (this.gameBoard[row][col] === 0) {
      e.target.style.background = '#bbb';
      // set this square's value to 3 to indicate that they fired and missed
      this.gameBoard[row][col] = 3;
      
    // if player clicks a square with a ship, change the color and change square's value
    } else if (this.gameBoard[row][col] === 1) {
      e.target.style.background = 'red';
      // set this square's value to 2 to indicate the ship has been hit
      this.gameBoard[row][col] = 2;
      
      // increment hitCount each time a ship is hit
      this.hitCount++;
      // this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
      if (this.hitCount === this.count) {
        alert("You win!");
      }
    }   
    }
    e.stopPropagation();
  }

createSquare  = () => {

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
			if(this.gameBoard[i][j] === 1){
				this.count++; 
			}
			let id = j +""+ i;
      		indents.push(<div id={id} style={divStyle} key={id}></div>);
      	}	
      }
    return indents;
}

  render() {
    return (
      <div className="parentSquare" onClick={this.handleClick}>
      	{this.createSquare()}
      </div>
    );
  }
}

export default Squares;
