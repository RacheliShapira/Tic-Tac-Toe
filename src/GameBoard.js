import React, {useState} from "react";
import './style.css';

export default class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.slots=[];
        this.victory=false;
        this.emptySlotscounter=0
        this.winner="";
       this.winnerVcombination=[[0,1,2],[3,4,5],[6,7,8]]
       this.winnerHcombination=[[0,3,6],[1,4,7],[2,5,8]]
       this.winnerDcombination=[[0,4,8],[2,4,6]]
      } 

    componentWillMount() {
        for (let i = 0; i < 9; i++) {
            this.slots[i]="emptySlot"
        }
    }



    componentDidUpdate(){
        //check for reset
            if(this.props.resetBoard){
                for (let i = 0; i < 9; i++) {
                    this.slots[i]="emptySlot"
                }
                window.location.reload();
            }
        }

    
 
    play(x){
        
        if (!this.props.gameTie & !this.victory & this.slots[x]==="emptySlot") {
            this.slots[x]=this.props.currentPlayer;  
            this.victory= this.checkWin(x); 
            if ( this.victory)    {
                this.props.isWin();
                console.log("Winner is ", this.victory);
            }  
            this.props.changePlayer();    
        } 
        this.emptySlotscounter++;
       if ( !this.victory &this.emptySlotscounter===9) {
        this.props.isTie();
       }
    }

   
    
    checkWin(slotNum){
        this.winner =this.checkVwin(slotNum)
        if (!this.winner){
            this.winner =this.checkHwin(slotNum)
        }  if (!this.winner){
            this.winner =this.checkDwin(slotNum)
        } 
       
        // console.log("this.winner", this.winner);
        if (this.winner) {
            return true
        } else {
            return false
        }        
    }
   
    checkVwin(slotNum){
        // console.log("checkVwin");
        for (let vComboOut = 0; vComboOut < this.winnerVcombination.length; vComboOut++) {
           var player1Count=0;
           var player2Count=0;  
           for (let vComboIn = 0; vComboIn < this.winnerVcombination[vComboOut].length; vComboIn++) {
                if (this.slots[this.winnerVcombination[vComboOut][vComboIn]]==="player1"){
                    player1Count++;  
                } else if (this.slots[this.winnerVcombination[vComboOut][vComboIn]]==="player2"){
                    player2Count++;  
                }  
                if (player1Count===3){
                    // console.log("combo", this.winnerVcombination[vComboOut]);
                    return "player1"
                } else  if (player2Count===3){
                 return "player2"
                 }               
           }  
                
        }     
        return false
    }


    checkHwin(slotNum){
        // console.log("checkHwin");
        for (let hComboOut = 0; hComboOut < this.winnerHcombination.length; hComboOut++) {
           var player1Count=0;
           var player2Count=0;  
           for (let hComboIn = 0; hComboIn < this.winnerHcombination[hComboOut].length; hComboIn++) {
                if (this.slots[this.winnerHcombination[hComboOut][hComboIn]]==="player1"){
                    player1Count++;  
                } else if (this.slots[this.winnerHcombination[hComboOut][hComboIn]]==="player2"){
                    player2Count++;  
                } 
                if (player1Count===3){
                    return "player1"
                } else  if (player2Count===3){
                 return "player2"
                 }             
           }    
                 
        }     
        return false
    }
    checkDwin(slotNum){
        // console.log("checkDwin");
        for (let dComboOut = 0; dComboOut < this.winnerDcombination.length; dComboOut++) {
           var player1Count=0;
           var player2Count=0;  
           for (let dComboIn = 0; dComboIn < this.winnerDcombination[dComboOut].length; dComboIn++) {
                if (this.slots[this.winnerDcombination[dComboOut][dComboIn]]==="player1"){
                    player1Count++;  
                } else if (this.slots[this.winnerDcombination[dComboOut][dComboIn]]==="player2"){
                    player2Count++;  
                }             
                if (player1Count===3){
                    return "player1"
                } else  if (player2Count===3){
                 return "player2"
                 } 
            }    
                 
        }     
        return false
    }


    render() {
        return (
            <div className="board">
             <div className="row">
                 <div className={this.slots[0]} onClick={() => this.play(0)}></div>
                 <div className={this.slots[1]} onClick={() => this.play(1)}></div>
                 <div className={this.slots[2]} onClick={() => this.play(2)}></div>
             </div>
             <div className="row">
                 <div className={this.slots[3]} onClick={() => this.play(3)}></div>
                 <div className={this.slots[4]} onClick={() => this.play(4)}></div>
                 <div className={this.slots[5]} onClick={() => this.play(5)}></div>
             </div>
             <div className="row">
                <div className={this.slots[6]} onClick={() => this.play(6)}></div>
                <div className={this.slots[7]} onClick={() => this.play(7)}></div>
                <div className={this.slots[8]} onClick={() => this.play(8)}></div>
             </div>
            </div>
        );
      }
    
}



