import { useState } from "react";
import TicTocToe from "../services/tictactoe";

const ticObj=TicTocToe.temp;
const TicTacToe = () => {
  const [player, setPlayer] = useState(1);
  // const [ticObj, setTicObj ] = useState(new TicToc());
  const makeMove=(e, i ,j)=>{
    e.preventDefault();
    const isDone=ticObj.yourTurn(player, i,j);
    if(!isDone){
      alert("Invalid Move")
    }
    console.log('ticObj.getBoard()', ticObj.getBoard());
  }

  return (
    <div className="main-container-ttt">
      <div className="main-row-ttt">
        {ticObj.matrix.map((row, idx) => {
          return row.map((item, jdy) => (
            <div className="main-col-ttt" id={`ttt${idx}-${jdy}`} key={`ttt${idx}-${jdy}`} onClick={(e)=> makeMove(e, idx,jdy)}>
            {item==1 ? <i className="fa-regular fa-circle"></i> : item==2 ? <i className="fa-solid fa-xmark"></i>:''}
            </div>
          ));
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
