import React from "react";
import GameBoard from "./GameBoard";
import GameFrame from "./Frame";
import './style.css';


class App extends React.Component {
  constructor(prop) {
    super(prop);  
    this.p1= "player1";
    this.p2= "player2";
    this.state = {
      currentPlayer: this.p1,
      gameWin:false,
      gameTie:false,
      resetBoard:false
      }
    this.changePlayer = this.changePlayer.bind(this);
    this.isTie = this.isTie.bind(this);
    this.isWin = this.isWin.bind(this);
    this.isReset = this.isReset.bind(this);

  }
 
changePlayer(){
  if (this.state.currentPlayer===this.p1) {
      this.setState({
          currentPlayer: this.p2
      });
  } else {
      this.setState({
          currentPlayer: this.p1
      });
  }
}

isTie(){
  this.setState({
    gameTie: true
  });
}

isWin(winnerP){
  console.log("winnerP", winnerP);
  this.setState({
    gameWin: winnerP
  });
}

isReset(){
  this.setState({
    resetBoard:true,
    currentPlayer: this.p1
});

}

  render() {
    return (
      <div className="app">     
        <h1 className="header">Tic-Tac-Toe</h1>
        <div className="main">
          <GameFrame changePlayer={this.changePlayer} 
                      gameTie={this.state.gameTie} 
                      gameWin={this.state.gameWin} 
                      isReset={this.isReset} 
                      currentPlayer={this.state.currentPlayer} /> 
          
          <GameBoard changePlayer={this.changePlayer} 
                      isTie={this.isTie} 
                      isWin={this.isWin} 
                      resetBoard={this.state.resetBoard}
                      currentPlayer={this.state.currentPlayer}/>     
        </div>
      </div>
    );
  }
}



export default App;
