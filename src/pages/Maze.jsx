import { useEffect, useState } from "react";
import { Box, Button, Container, SimpleGrid, Spinner } from "@chakra-ui/react";
import MazeForm from "../components/Form";
import { MazeContext } from "../context/maze";
import Instructions from "../components/Instructions";
import mazeInstruction from "../rules/maze";
import mazeWorker from "../worker/mazeWorker";

function Maze() {
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(false);
  const [matrix, setMatrix] = useState([]);
  const [points, setPoints] = useState({
    start: [0, 0],
    end: [2, 2],
    block: [],
  });
  const [totelTime, setTotelTime] = useState(0);
  const [style, setStyle] = useState({
    width: "33.33px",
    flexBasis: "33.33px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const [formValue, setFormValue] = useState({
    rows: 3,
    columns: 3,
    selectedValue: "start",
    directions: [],
  });
  const { rows, columns, selectedValue, directions } = formValue;
  useEffect(() => {
    const { start, end } = points;
    if (rows >= 3 && columns >= 3) {
      const mat = Array(Number(rows))
        .fill()
        .map(() => Array(Number(columns)).fill(1));
      mat[start[0]][start[1]] = -1;
      mat[end[0]][end[1]] = 2;
      setMatrix(mat);
      setStyle({
        ...style,
        width: `${100 / columns}%`,
        flexBasis: `${100 / columns}%`,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, columns]);

  const toggleBlok = (e, i, j) => {
    const newMatrix = [...matrix];

    if (selectedValue === "start") {
      if (newMatrix[i][j] == -1) return;
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
    } else if (selectedValue === "end") {
      if (newMatrix[i][j] == 2) return;
      else {
        matrix.forEach((col, idx) => {
          col.forEach((item, jdy) => {
            if (item === 2) newMatrix[idx][jdy] = 1;
          });
        });
        newMatrix[i][j] = 2;
        setPoints({ ...points, end: [i, j] });
      }
    } else if (selectedValue === "block") {
      newMatrix[i][j] = newMatrix[i][j] != 0 ? 0 : 1;
    }
    setMatrix(newMatrix);
  };

  // const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // const helper = useCallback(() => {
  //   const { start, end } = points;
  //   return findPath(
  //     start[0],
  //     start[1],
  //     end[0],
  //     end[1],
  //     Number(rows),
  //     Number(columns),
  //     matrix,
  //     directions
  //   );
  // }, [columns, matrix, points, rows, directions]);

  const generatePossiblePaths = async (e) => {
    e.preventDefault();
    const worker = new Worker(mazeWorker);
    const { start, end } = points;
    setLoading(true);
    setPaths([]);
    worker.postMessage({
      i: start[0],
      j: start[1],
      ii: end[0],
      jj: end[1],
      rows: Number(rows),
      columns: Number(columns),
      matrix,
      directions,
    });
    worker.onmessage = (e) => {
      setLoading(false);
      console.log("data", e.data);
      setPaths(e.data.paths);
      setTotelTime(e.data.time);
    };

    // await delay(100);
    // setPaths(helper());
  };

  return (
    <MazeContext.Provider
      value={{
        formValue,
        setFormValue,
      }}
    >
      <Container maxW={"1200px"} padding={"10px"}>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={20}>
          <Box>
            <MazeForm />
            <Box mt={4}>
              <div className="main-row">
                {matrix.map((mat, i) => {
                  return mat.map((item, j) => (
                    <div
                      key={Math.random() * 100 * (i + 1) * (j + 1)}
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
            </Box>
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
      <div> TotalTime taken: {totelTime}</div>
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
