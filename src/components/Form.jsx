import { useContext } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { MazeContext } from "../context/maze";

function MazeForm() {
  const { rows, columns, setRows, setColumns, value, setValue } =
    useContext(MazeContext);

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
      <FormControl mt={2}>
        <FormLabel htmlFor="columns">Select</FormLabel>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="start">Start Blok</Radio>
            <Radio value="end">End Blok</Radio>
            <Radio value="block">Block Blok</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default MazeForm;
