import { useDispatch } from "react-redux";
import { del } from "../store/slices/productSlice";

import { formatCurrentMonth } from "../utils/dateUtil";

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
          <Flex flexDir="column">
            <Heading size="sm" letterSpacing="tight">
              {data.productName}
            </Heading>
            <Text fontSize="sm" color="gray">
              {formatCurrentMonth(data.dateMade)}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Flex>{data.category}</Flex>
      </Td>
      <Td isNumeric>
        <Text fontWeight="bold" display="inline-table">
          R$ {data.totalValue.toFixed(2)}
        </Text>
      </Td>
      <Td>
        <Button onClick={handleDelItem} mr={5}>
          ❌
        </Button>
        <Button onClick={handleDelItem}>❌</Button>
      </Td>
    </Tr>
  );
}
