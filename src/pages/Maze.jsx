import { useMemo, useState } from "react";
import { findPath } from "../utils";
import { Container } from "@chakra-ui/react";
import MazeForm from "../components/Form";

function Maze() {
  //   const [size, setsize] = useState(5);
  //   const [start, setStart] = useState([0, 0]);
  //   const [end, setEnd] = useState([size - 1, size - 1]);
  //   let matrix = Array(size)
  //     .fill()
  //     .map(() => Array(size).fill(0));
  const [row, setRow] = useState(5);
  const [column, setColumn] = useState(5);
  // const submit = useSubmit();
  let matri = [
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
  ];
  let matrix = useMemo(
    () =>
      Array(row)
        .fill()
        .map(() => Array(column).fill(1)),
    [row, column]
  );
  let ans = useMemo(() => findPath(0, 0, row, column, matri), [row, column]);

  return (
    <>
      <Container>
        <MazeForm
          setRows={setRow}
          setColumns={setColumn}
          rows={row}
          columns={column}
        />
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
    </>
  );
}

export default Maze;
