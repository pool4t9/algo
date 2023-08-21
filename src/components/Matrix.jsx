import React from 'react';
import { Grid, Box } from '@chakra-ui/react';

const Matrix = ({ rows, columns, blockedIndex }) => {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const isBlocked = `${i},${j}` === blockedIndex;

      matrix.push(
        <Box
          key={`box-${i}-${j}`}
          w="40px"
          h="40px"
          bg={isBlocked ? 'red.300' : 'blue.200'}
          borderWidth="1px"
          borderColor="gray.300"
          textAlign="center"
          lineHeight="40px"
        >
          {`${i},${j}`}
        </Box>
      );
    }
  }

  return (
    <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={1}>
      {matrix}
    </Grid>
  );
};

export default Matrix;
