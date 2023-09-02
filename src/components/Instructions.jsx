import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Container,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const Instructions = ({ data }) => {
  return (
    <Flex align={"center"} justify={"center"} id="instructions">
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" bg="white" rounded="lg">
          {data?.map((item) => (
            <AccordionItem key={item.id}>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: "gray.100" }}
              >
                <Text fontSize="md" color="gray.800">
                  {item.name}
                </Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">{item.description}</Text>
                {item.steps && <Steps list={item.steps} />}
                {item?.childrens && <Instructions data={item.childrens} />}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Flex>
  );
};

export default Instructions;

const Steps = ({ list }) => {
  return (
    <OrderedList>
      {list.map((step, idx) => (
        <ListItem key={idx}>
          <Text fontSize="md" color="gray.800">
            {step}
          </Text>
        </ListItem>
      ))}
    </OrderedList>
  );
};
