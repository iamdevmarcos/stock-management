import { Flex, Heading, Avatar, Text, Tr, Td } from "@chakra-ui/react";

export default function TableItem() {
  return (
    <Tr>
      <Td>
        <Flex align="center">
          <Avatar size="sm" mr={2} src="amazon.jpeg" />
          <Flex flexDir="column">
            <Heading size="sm" letterSpacing="tight">
              New Item
            </Heading>
            <Text fontSize="sm" color="gray">
              Apr 24, 2021 at 1:40pm
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>Electronic Devices</Td>
      <Td isNumeric>+$2</Td>
      <Td isNumeric>
        <Text fontWeight="bold" display="inline-table">
          -$242
        </Text>
        .00
      </Td>
    </Tr>
  );
}
