import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

import TableItem from "./TableItem";

export default function TableArea() {
  return (
    <Table variant="unstyled" mt={4}>
      <Thead>
        <Tr color="gray">
          <Th>Nome da Transação</Th>
          <Th>Categoria</Th>
          <Th isNumeric>Cashback</Th>
          <Th isNumeric>Amount</Th>
        </Tr>
      </Thead>
      <Tbody>
        <TableItem />
      </Tbody>
    </Table>
  );
}
