import React from "react";
import './style.css';

function GameFrame(props) {
    //in future- user can set players names
    // const p1="Player #1";
    // const p2="Player #2";
    
    if (props.currentPlayer==="player1") {
        var pPlayer1="pBig";
        var pPlayer2="pSmall";
    } else{
        var pPlayer1="pSmall"   ;
        var pPlayer2="pBig"; 
    }
    
    return(
        <div className="side">
            {!props.gameTie && !props.gameWin &&(
                <div className="sideP">
                    <p className={pPlayer1}>Player #1</p>
                    <p className={pPlayer2}>Player #2</p>
                </div>
                )}
            {props.gameTie && (
                <div className="sideP">
                    <h2 className="gameOver">It's a Tie!</h2>
                </div>
                )}
            {props.gameWin && (
                <div className="sideP">
                    <h2 className="gameOver">Winner!!</h2>
                </div>
                )}
            <button onClick={props.isReset}>New Game</button>
            
        </div>
        
        
    );
}

export default GameFrame;