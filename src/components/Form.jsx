import { useContext } from "react";
import { Box, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { MazeContext } from "../context/maze";
// import Matrix from './Matrix';

function MazeForm() {
  console.log("mazeForm");
  const { rows, columns, setRows, setColumns } = useContext(MazeContext);

  const handleRowsChange = (e) => {
    if (parseInt(e.target.value) <= 0) setRows(1);
    setRows(parseInt(e.target.value || 0));
  };

  const handleColumnsChange = (e) => {
    if (parseInt(e.target.value) <= 0) setColumns(1);
    setColumns(parseInt(e.target.value || 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., update the matrix state with the blocked index.
    // setPaths(findPath(rows, columns))
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="rows">Rows:</FormLabel>
          <Input
            type="number"
            id="rows"
            value={rows}
            onChange={handleRowsChange}
          />
        </FormControl>

        <FormControl mt={2}>
          <FormLabel htmlFor="columns">Columns:</FormLabel>
          <Input
            type="number"
            id="columns"
            value={columns}
            onChange={handleColumnsChange}
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Generate path
        </Button>
      </form>
    </Box>
  );
}

export default MazeForm;
