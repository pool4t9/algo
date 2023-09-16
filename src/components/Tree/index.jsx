import { Flex, Stack } from "@chakra-ui/react";
import React from "react";

const Tree = ({ root }) => {
  return (
    <Stack>
      <Node data={root.data} />
      <Flex width={"500px"} justify={"space-between"}>
        <div className="left-node">
          <Node data={root.left?.data} />
        </div>
        <div className="right-node">
          <Node data={root.right?.data} />
        </div>
      </Flex>
      {root.left && <Tree root={root.left} />}
      {root.right && <Tree root={root.right} />}
    </Stack>
  );
};

export default Tree;

const Node = ({ data }) => {
  if (!data) return;
  const arr = Object.keys(data);
  return (
    <div>
      {arr.map((item) => (
        <p key={item}>{`${item}:${data[item]}`}</p>
      ))}
    </div>
  );
};
