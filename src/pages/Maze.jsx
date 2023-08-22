import { useMemo, useState } from "react";
import { findPath } from "../utils";
import { Container } from "@chakra-ui/react";
import MazeForm from "../components/Form";
import { MazeContext } from "../context/maze";

function Maze() {
  console.log("Maze");
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(5);
  // const [paths, setPaths] = useState([]);
  // const matri = [
  //   [1, 0, 0, 0, 0],
  //   [1, 1, 1, 1, 1],
  //   [1, 1, 1, 0, 1],
  //   [0, 0, 0, 0, 1],
  //   [0, 0, 0, 0, 1],
  // ];

  const matrix = useMemo(
    () =>
      Array(rows)
        .fill()
        .map(() => Array(columns).fill(0)),
    [rows, columns]
  );

  let ans = useMemo(
    () => findPath(0, 0, rows, columns, matrix),
    [rows, columns, matrix]
  );

  return (
    <MazeContext.Provider
      value={{ rows, columns, setRows, setColumns }}
    >
      <Container>
        <MazeForm />
      </Container>

      <div className="main-container">
        <div className="main-row">
          {matrix.map((mat, i) => {
            return mat.map((item, j) => (
              <div
                key={Math.random() * 100}
                className={`main-col ${i == 0 && j == 0 ? "bg-orange" : ""}  ${
                  !item ? "bg-red" : ""
                }`}
              ></div>
            ));
          })}
        </div>
      </div>
      <br />
      <h2>Solution</h2>
      <div className="main-container solution">
        <div className="main-row">
          {ans.map((mat) => (
            <>
              {mat.map((maze, j) =>
                maze.map((point, k) => (
                  <div
                    key={Math.random() * 100}
                    className={
                      mat[j][k] == 1 ? "main-col bg-green" : "main-col"
                    }
                  >
                    {mat[j][k]}
                  </div>
                ))
              )}
              <br />
              <div>hello</div>
            </>
          ))}
        </div>
      </div>
    </MazeContext.Provider>
  );
}

export default Maze;
