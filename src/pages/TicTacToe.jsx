const board = new Array(3).fill(new Array(3).fill(0));

const TicTacToe = () => {
  return (
    <div className="main-container-ttt">
      <div className="main-row-ttt">
        {board.map((row, idx) => {
          return row.map((item, jdy) => (
            <div className="main-col-ttt" id={`ttt${idx}-${jdy}`} key={item}></div>
          ));
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
