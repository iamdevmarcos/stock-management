import React from "react";
import { useSelector } from "react-redux";

import { Table, Thead, Tbody, Tr, Th, Flex, Text } from "@chakra-ui/react";

import TableItem from "./TableItem";

export default function TableArea() {
  const list = useSelector((state) => state.product);

  return (
    <Table variant="unstyled" mt={4}>
      <Thead>
        <Tr color="gray">
          <Th>Nome da Transação</Th>
          <Th>Categoria</Th>
          <Th isNumeric>Valor</Th>
          <Th isNumeric>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        {list.length === 0 && (
          <Flex fontSize="20">
            <Text>Nenhuma transação no momento.</Text>
          </Flex>
        )}
        {list.length !== 0 && (
          <>
            {list.map((item, index) => (
              <TableItem key={index} data={item} />
            ))}
          </>
        )}
      </Tbody>
    </Table>
  );
}
