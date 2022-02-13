import { useDispatch } from "react-redux";
import { del } from "../store/slices/productSlice";

import { Tr, Td, Flex, Avatar, Heading, Text, Button } from "@chakra-ui/react";

export default function TableItem({ data }) {
  const dispatch = useDispatch();

  return (
    <Tr>
      <Td>
        <Flex align="center">
          <Avatar size="sm" mr={2} src="amazon.jpeg" />
          <Flex flexDir="column">
            <Heading size="sm" letterSpacing="tight">
              {data.productName}
            </Heading>
            <Text fontSize="sm" color="gray">
              Apr 24, 2021 at 1:40pm
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>Electronic Devices</Td>
      <Td isNumeric>
        <Text fontWeight="bold" display="inline-table">
          -$242
        </Text>
        .00
      </Td>
      <Td>
        <Button onClick={() => dispatch(del({ id: data.id }))}>
          [ DELETAR ]
        </Button>
      </Td>
    </Tr>
  );
}
