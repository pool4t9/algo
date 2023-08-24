import { useMemo, useState } from "react";
import { findPath } from "../utils";
import { Button, Container, Spinner } from "@chakra-ui/react";
import MazeForm from "../components/Form";
import { MazeContext } from "../context/maze";

function Maze() {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(false);

  const matrix = useMemo(
    () =>
      Array(rows)
        .fill()
        .map(() => Array(columns).fill(1)),
    [rows, columns]
  );

  const toggleBlok = (e, i, j) => {
    matrix[i][j] = 1 - matrix[i][j];
    e.target.classList.toggle("bg-red");
  };

  const style = {
    width: `${100 / columns}%`,
    flexBasis: `${100 / columns}%`,
  };

  const generatePossiblePaths = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("loading111");
    setPaths(findPath(0, 0, rows, columns, matrix));
    console.log(paths);
    console.log("loading222");
    setLoading(false);
  };

  return (
    <MazeContext.Provider value={{ rows, columns, setRows, setColumns }}>
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
                style={style}
                onClick={(e) => toggleBlok(e, i, j)}
              ></div>
            ));
          })}
        </div>
      </div>
      <Button
        mt={4}
        colorScheme="teal"
        type="submit"
        onClick={generatePossiblePaths}
      >
        Generate path
      </Button>
      <br />
      <h2>Solution</h2>
      <div className="main-container solution">
        {loading && <Spinner size="xl" />}
        {paths.map((mat, i) => (
          <div className="main-row" key={i}>
            {mat.map((maze, j) =>
              maze.map((point, k) => (
                <div
                  key={Math.random() * 100}
                  className={mat[j][k] ? "main-col bg-green" : "main-col"}
                  style={style}
                >
                  {mat[j][k]}
                </div>
              ))
            )}
            <br />
          </div>
        ))}
      </div>
    </MazeContext.Provider>
  );
}

export default Maze;
