import { useState } from "react";
import { findPath } from "../utils";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
  Container,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

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
  let mat = [
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
  ];
  let ans = findPath(0, 0, row, column, mat);

  return (
    <>
      <Container alignItems="center" justifyContent="center">
        <Stack>
          <FormControl>
            <FormLabel>Rows</FormLabel>
            <NumberInput
              defaultValue={3}
              min={3}
              max={12}
              onChange={(valueString) => setRow(JSON.parse(valueString || 3))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Column</FormLabel>
            <NumberInput
              defaultValue={3}
              min={3}
              max={12}
              onChange={(valueString) =>
                setColumn(JSON.parse(valueString || 3))
              }
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button w="100%">Genearte Matrix</Button>
          </FormControl>
        </Stack>
      </Container>

      <div className="main-container">
        <div className="main-row">
          {mat.map((mat, i) => {
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
