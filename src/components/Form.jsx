import React, { useState } from 'react';
import { ChakraProvider, CSSReset, Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import Matrix from './Matrix';

function MazeForm({ rows, setRows, columns, setColumns }) {
  // const [rows, setRows] = useState(5); // Default number of rows
  // const [columns, setColumnss] = useState(5); // Default number of columns
  const [blockedIndex, setBlockedIndex] = useState('0,0'); // Default blocked index

  const handleRowsChange = (e) => {
    setRows(parseInt(e.target.value || 3));
  };

  const handleColumnsChange = (e) => {
    setColumns(parseInt(e.target.value  || 3));
  };

  const handleBlockedIndexChange = (e) => {
    setBlockedIndex(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., update the matrix state with the blocked index.
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="rows">Rows:</FormLabel>
          <Input type="number" id="rows" value={rows} onChange={handleRowsChange} />
        </FormControl>

        <FormControl mt={2}>
          <FormLabel htmlFor="columns">Columns:</FormLabel>
          <Input type="number" id="columns" value={columns} onChange={handleColumnsChange} />
        </FormControl>

        {/* <FormControl mt={2}>
          <FormLabel htmlFor="blockedIndex">Blocked Index (e.g., 0,0):</FormLabel>
          <Input type="text" id="blockedIndex" value={blockedIndex} onChange={handleBlockedIndexChange} />
        </FormControl> */}

        <Button mt={4} colorScheme="teal" type="submit">
          Create Matrix
        </Button>
      </form>

      {/* <Matrix rows={rows} columns={columns} blockedIndex={blockedIndex} /> */}
    </Box>
  );
}

export default MazeForm;
