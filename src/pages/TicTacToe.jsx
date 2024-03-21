import { useState } from "react";
import {
  Flex,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";

const TicTacToe = () => {
  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState(
    new Array(3).fill(0).map(() => new Array(3).fill(0))
  );
  const [winnerMessage, setWinnerMessage] = useState("");
  const makeMove = (e, i, j) => {
    e.preventDefault();
    const isDone = yourTurn(player, i, j);
    if (!isDone) {
      alert("Invalid Move");
    }
  };
  function yourTurn(player, i, j) {
    if (!board[i][j]) {
      const newBoard = [...board];
      newBoard[i][j] = player;
      const winner = checkWinner(i, j);
      if (winner != -1) {
        setWinnerMessage(`Player ${winner} is winner`);
        setBoard(new Array(3).fill(0).map(() => new Array(3).fill(0)));
        setPlayer(0);
      }
      setBoard(newBoard);
      setPlayer(player === 1 ? 2 : 1);
      return true;
    }
    return false;
  }

  function restartGame(e) {
    e.preventDefault();
    setBoard(new Array(3).fill(0).map(() => new Array(3).fill(0)));
    setWinnerMessage("");
    setPlayer(1);
  }

  function checkWinner(x, y) {
    console.log(x, y);
    // let winner = 1;
    // for (let i = 0; i < board.length; i++) {
    //   // for column
    //   if (board[i][y] != player) winner = 0;
    //   // for row
    //   if (board[x][i] != player) winner = 0;
    //   // for diagonal
    //   if (board[i][i] != player) winner = 0;
    //   // if (board[i][2-i] != player) winner = 0;

    // }
    for (let i = 0; i < 3; i++) {
      // Check rows
      if (
        board[i][0] !== 0 &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        return board[i][0];
      }
      // Check columns
      if (
        board[0][i] !== 0 &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      ) {
        return board[0][i];
      }
    }

    // Check diagonals
    if (
      board[0][0] == player &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      return board[0][0];
    }

    if (
      board[0][2] == player &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      return board[0][2];
    }

    return -1; // No winner yet
  }

  return (
    <div className="main-container-ttt">
      <div className="main-row-ttt">
        {board.map((row, idx) => {
          return row.map((item, jdy) => (
            <div
              className="main-col-ttt"
              id={`ttt${idx}-${jdy}`}
              key={`ttt${idx}-${jdy}`}
              onClick={(e) => makeMove(e, idx, jdy)}
            >
              {item == 1 ? (
                <i className="fa-regular fa-circle"></i>
              ) : item == 2 ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                ""
              )}
            </div>
          ));
        })}
      </div>
      <Flex h="20vh" justifyContent="center" alignItems="center">
        <Button
          px={4}
          fontSize={"sm"}
          rounded={"full"}
          bg={player == 1 ? "blue.400" : "green.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
          _disabled={true}
        >
          {player == 1 ? "Player 1" : "Player 2"}
        </Button>
        <IconButton
          px={4}
          mx={5}
          fontSize={"sm"}
          rounded={"full"}
          _disabled={true}
          icon={<RepeatClockIcon />}
          onClick={restartGame}
        />
      </Flex>
      {winnerMessage && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Winner</AlertTitle>
          <AlertDescription>{winnerMessage}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default TicTacToe;
