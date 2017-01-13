/* The Game can be broken down into 3 components.
 * Square - single smallest component
 * Board - parent of Square and conatins 9 squares
 * Game - parent of Board
 */

/* Square Component */
class Square extends React.Component{
  render(){
    return (<button className="square"></button>);
  }
}

/* Board Component */
/* Create a board with 3 rows and let each column call the _renderSquare function
 * to display the button from Square component.
 */
class Board extends React.Component{
  _renderSquare(i){
    return <Square />;
  }
  render(){
    const status = 'Next Player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this._renderSquare(0)}
          {this._renderSquare(1)}
          {this._renderSquare(2)}
        </div>
        <div className="board-row">
          {this._renderSquare(3)}
          {this._renderSquare(4)}
          {this._renderSquare(5)}
        </div>
        <div className="board-row">
          {this._renderSquare(6)}
          {this._renderSquare(7)}
          {this._renderSquare(8)}
        </div>
      </div>
    );
  }
}

/* Game component */
class Game extends React.Component{
  render(){
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* list of moves */}</ol>
        </div>
      </div>
    );
  }
}

//Display the Game component inside the container div
ReactDOM.render(<Game />, document.getElementById('container'));
