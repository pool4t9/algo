import { useEffect, useState } from "react";
import { findPath } from "../utils";
import { Box, Button, Container, SimpleGrid, Spinner } from "@chakra-ui/react";
import MazeForm from "../components/Form";
import { MazeContext } from "../context/maze";
import Instructions from "../components/Instructions";
import mazeInstruction from "../rules/maze";

function Maze() {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("start");
  const [matrix, setMatrix] = useState(
    Array(rows)
      .fill()
      .map(() => Array(columns).fill(1))
  );

  useEffect(() => {
    setMatrix(
      Array(rows)
        .fill()
        .map(() => Array(columns).fill(1))
    );
  }, [rows, columns]);

  const [points, setPoints] = useState({
    start: [0, 0],
    end: [rows - 1, columns - 1],
    block: [],
  });

  const toggleBlok = (e, i, j) => {
    const newMatrix = [...matrix];

    if (value === "start") {
      if (newMatrix[i][j] == -1) newMatrix[i][j] = 1;
      else {
        matrix.forEach((col, idx) => {
          col.forEach((item, jdy) => {
            if (item === -1) {
              newMatrix[idx][jdy] = 1;
            }
          });
        });
        newMatrix[i][j] = -1;
      }
      setPoints({ ...points, start: [i, j] });
    } else if (value === "end") {
      if (newMatrix[i][j] == 2) newMatrix[i][j] = 1;
      else {
        matrix.forEach((col, idx) => {
          col.forEach((item, jdy) => {
            if (item === 2) newMatrix[idx][jdy] = 1;
          });
        });
        newMatrix[i][j] = 2;
        setPoints({ ...points, end: [i, j] });
      }
    } else if (value === "block") {
      newMatrix[i][j] = newMatrix[i][j] != 0 ? 0 : 1;
    }
    setMatrix(newMatrix);
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
    const { start, end } = points;
    setPaths(
      findPath(start[0], start[1], end[0], end[1], rows, columns, matrix)
    );
    setLoading(false);
    // console.log(paths, "pathspaths");
  };

  return (
    <MazeContext.Provider
      value={{ rows, columns, setRows, setColumns, value, setValue }}
    >
      <Container maxW={"1200px"} padding={"10px"}>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={20}>
          <Box>
            <MazeForm />
            <div className="main-container">
              <div className="main-row">
                {matrix.map((mat, i) => {
                  return mat.map((item, j) => (
                    <div
                      key={Math.random() * 100}
                      className={`main-col  ${item === -1 && "bg-orange"} ${
                        item === 0 && "bg-red"
                      } ${item === 2 && "bg-green"}`}
                      style={style}
                      onClick={(e) => toggleBlok(e, i, j)}
                    >
                      ({i},{j})
                    </div>
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
          </Box>
          <Box>
            <Instructions data={mazeInstruction} />
          </Box>
        </SimpleGrid>
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
