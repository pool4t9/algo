import { useContext } from "react";
import { Box, Input, FormControl, FormLabel } from "@chakra-ui/react";
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

  return (
    <Box p={4}>
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
    </Box>
  );
}

export default MazeForm;
