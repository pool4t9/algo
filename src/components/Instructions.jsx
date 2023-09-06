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
  Tag,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import DOMPurify from "dompurify";

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
                {item.description && (
                  <Text color="gray.600">{item.description}</Text>
                )}
                {item.steps && <Steps list={item.steps} />}
                {item.topics && <TagList list={item.topics} />}
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
          <Text
            fontSize="md"
            color="gray.800"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(step) }}
          ></Text>
        </ListItem>
      ))}
    </OrderedList>
  );
};

const TagList = ({ list }) => {
  return (
    <>
      {list.map((step, idx) => (
        <Tag className="chips" key={idx}> {step} </Tag>
      ))}
    </>
  );
};
