import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box sx={{}}>
      <Flex
        as={"div"}
        wrap={true}
        direction={"row"}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
      >
        <Link to={"/tic-tac-toe"} className="box">
          <Text as={"span"} color={"black"}>
            Tic Tac Toe
          </Text>
        </Link>
        <Link to={"/rat-in-a-maze"} className="box">
          <Text as={"span"} color={"black"}>
            Rat In A Maze
          </Text>
        </Link>
        <Link to={"/sudoku-solver"} className="box">
          <Text as={"span"} color={"black"}>
            Sudoku
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Home;
