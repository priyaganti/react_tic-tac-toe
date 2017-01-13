/* The Game can be broken down into 3 components.
 * Square - single smallest component
 * Board - parent of Square and conatins 9 squares
 * Game - parent of Board
 */

/* Square Component */
class Square renders React.Component{
  render(){
    return (<button className="square"></button>);
  }
}
