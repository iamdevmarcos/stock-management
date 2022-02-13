import { useDispatch } from "react-redux";
import { del } from "../store/slices/productSlice";

import {
  Tr,
  Td,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FiLayers } from "react-icons/fi";

export default function TableItem({ data }) {
  const dispatch = useDispatch();

  const handleDelItem = () => {
    if (confirm("Deletar este item")) {
      dispatch(del({ id: data.id }));
    }
  };

  return (
    <Tr>
      <Td>
        <Flex align="center">
          <IconButton icon={<FiLayers />} mr={5} />
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
          R$ 242,00
        </Text>
      </Td>
      <Td>
        <Button onClick={handleDelItem}>❌</Button>
      </Td>
    </Tr>
  );
}
