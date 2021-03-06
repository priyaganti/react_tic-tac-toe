/* The Game can be broken down into 3 components.
 * Square - single smallest component
 * Board - parent of Square and conatins 9 squares
 * Game - parent of Board
 */

/* Square Component as Stateless Functional Component  without a render function */
 function Square(props) {
   return (
     <button className="square" onClick={() => props.onSquareClick()}>
       {props.value}
     </button>
   );
 }

/* Board Component */
/* Create a board with 3 rows and let each column call the _renderSquare function
 * to display the button from Square component.
 */
class Board extends React.Component{

  _handleClick(i){
    //data change without mutation. Instead of directly altering the squares array, create new array and change.
    // altering between X and O using xIsNext
    const squares = this.state.squares.slice();
    console.log(squares[i]);
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  //have the state of all squares together in an array and initialize it to null.
  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  _renderSquare(i){
    //pass state of each individual square. Also pass the click handler.
    return <Square value={this.state.squares[i]} onSquareClick={() => this._handleClick(i)} />;
  }

  render(){
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner is ' + winner;
    } else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

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
