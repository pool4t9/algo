import React from "react";
import root from "../rules/Tree";
import Tree from "../components/Tree";
import { Container, Flex } from "@chakra-ui/react";

const TreeVisualizer = () => {
  return (
    <Flex width={"100%"} align={"center"} justify={"center"}>
      <Tree root={root.root} />
    </Flex>
  );
};

export default TreeVisualizer;
