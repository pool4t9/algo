import { useContext } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Stack,
  Radio,
  RadioGroup,
  SimpleGrid,
  FormErrorMessage,
} from "@chakra-ui/react";
import { MazeContext } from "../context/maze";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: "up", label: "Up" },
  { value: "right", label: "Right" },
  { value: "down", label: "Down" },
  { value: "left", label: "Left" },
  { value: "diagonalUpperLeft", label: "Diagonal Upper Left" },
  { value: "diagonalUpperRight", label: "Diagonal Upper Right" },
  { value: "diagonalDownLeft", label: "Diagonal Lower Left" },
  { value: "diagonalDownRight", label: "Diagonal Lower Right" },
];

function MazeForm() {
  const { formValue, setFormValue } = useContext(MazeContext);
  const { rows, columns, selectedValue, directions } = formValue;

  const handleChanges = (e) => {
    if (e?.target) {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    } else setFormValue({ ...formValue, selectedValue: e });
  };

  const setDierctions = (values) => {
    setFormValue({ ...formValue, directions: values.map((item) => item.value) });
  };

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
        <FormControl isInvalid={rows < 3}>
          <FormLabel htmlFor="rows">Rows:</FormLabel>
          <Input
            type="number"
            id="rows"
            name="rows"
            value={rows}
            onChange={handleChanges}
            min={3}
          />
          <FormErrorMessage>
            Row must be greater than and equal to 3
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={columns < 3}>
          <FormLabel htmlFor="columns">Columns:</FormLabel>
          <Input
            type="number"
            id="columns"
            name="columns"
            value={columns}
            onChange={handleChanges}
            min={3}
          />
          <FormErrorMessage>
            Columns must be greater than and equal to 3
          </FormErrorMessage>
        </FormControl>
      </SimpleGrid>

      <FormControl mt={2}>
        <FormLabel htmlFor="columns">Select the block</FormLabel>
        <RadioGroup
          onChange={handleChanges}
          value={selectedValue}
          name="selectedValue"
        >
          <Stack direction="row">
            <Radio value="start">Start Blok</Radio>
            <Radio value="end">End Blok</Radio>
            <Radio value="block">Block Blok</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl isInvalid={directions.length < 1} mt={4}>
        <FormLabel htmlFor="directions">Select Directions:</FormLabel>
        <Select
          onChange={setDierctions}
          closeMenuOnSelect={false}
          components={animatedComponents}
          options={options}
          isMulti
          title="Select Direction"
          name="directions"
        />
        <FormErrorMessage>
          Select at least 1 diection to travel
        </FormErrorMessage>
      </FormControl>
    </>
  );
}

export default MazeForm;
