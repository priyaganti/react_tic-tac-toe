/* The Game can be broken down into 3 components.
 * Square - single smallest component
 * Board - parent of Square and conatins 9 squares
 * Game - parent of Board
 */

/* Square Component */
class Square extends React.Component{
  render(){
    // access the passed data from the Board by using this.props
    return
    (
      <button className="square" onClick={() => alert('click')}> //call alert when square is clicked
        {this.props.value}
      </button>
    );
  }
}

/* Board Component */
/* Create a board with 3 rows and let each column call the _renderSquare function
 * to display the button from Square component.
 */
class Board extends React.Component{
  _renderSquare(i){
    //pass data from Board to Square component through props
    return <Square value={i}/>;
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

/* Function to decide the winner */
function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
