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
  const [value, setValue] = useState("start");

  const matrix = useMemo(
    () =>
      Array(rows)
        .fill()
        .map(() => Array(columns).fill(1)),
    [rows, columns]
  );

  const toggleBlok = (e, i, j) => {
    matrix[i][j] = 1 - matrix[i][j];
    if (value === "start") {
    } else if (value === "end") {
    } else {
      e.target.classList.toggle("bg-red");
    }
  };

  const style = {
    width: `${100 / columns}%`,
    flexBasis: `${100 / columns}%`,
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const generatePossiblePaths = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPaths([]);
    await delay(1000);
    setPaths(findPath(0, 0, rows, columns, matrix));
    setLoading(false);
  };
  console.log(paths.length, "ans");
  return (
    <MazeContext.Provider
      value={{ rows, columns, setRows, setColumns, value, setValue }}
    >
      <Container>
        <MazeForm />

        <div className="main-container">
          <div className="main-row">
            {matrix.map((mat, i) => {
              return mat.map((item, j) => (
                <div
                  key={Math.random() * 100}
                  className={`main-col ${
                    i == 0 && j == 0 ? "bg-orange" : ""
                  }  ${!item ? "bg-red" : ""}`}
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
      </Container>
      <div className=" solution">
        {loading && <Spinner size="xl" />}
        {paths.map((mat, i) => (
          <div className="sol" key={i}>
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
          </div>
        ))}
      </div>
    </MazeContext.Provider>
  );
}

export default Maze;
