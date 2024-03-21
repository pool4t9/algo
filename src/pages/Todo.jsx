import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Editor from "../components/Editor";

const Todo = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      maxWidth={500}
      p={6}
      m="10px auto"
      className="App"
      justify={"center"}
    >
      <Editor
        title={"Add Todo"}
        buttonText="Add"
        setValue={setValue}
        loading={loading}
      />
    </Box>
  );
};

export default Todo;
