import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  FiHome,
  FiAlignJustify,
  FiCoffee,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiGithub,
} from "react-icons/fi";

export default function ContentArea() {
  return (
    <Flex
      w="85%"
      p="3%"
      flexDir="column"
      overflow="auto"
      minH="100vh"
      background="#fff"
    >
      <Heading fontWeight="normal" mb={12} letterSpacing="tight">
        Bem-vindo de volta,{" "}
        <Flex fontWeight="bold" display="inline-flex">
          Marcos 👋
        </Flex>
      </Heading>
      <Flex flexDir="row">
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#020202"
          borderRadius={10}
          minW="150px"
        >
          <Text color="#ccc" fontSize="sm">
            Receitas
          </Text>
          <Text color="#fff" fontWeight="bold" fontSize="2xl">
            R$ 2.000
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#020202"
          borderRadius={10}
          minW="150px"
        >
          <Text color="#ccc" fontSize="sm">
            Despesas
          </Text>
          <Text color="#fff" fontWeight="bold" fontSize="2xl" mb={2}>
            R$ 500
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#020202"
          borderRadius={10}
          minW="150px"
        >
          <Text color="#ccc" fontSize="sm">
            Balanço
          </Text>
          <Text color="#fff" fontWeight="bold" fontSize="2xl">
            R$ 1.500
          </Text>
        </Flex>
      </Flex>

      <Flex justifyContent="space-between" mt={8}>
        <Flex align="flex-end">
          <Heading as="h2" size="lg" letterSpacing="tight">
            Transações
          </Heading>
          <Text fontSize="small" color="gray" ml={4}>
            Apr 2021
          </Text>
        </Flex>
        <IconButton icon={<FiCalendar />} />
      </Flex>
      <Flex flexDir="column">
        <Flex overflow="auto">
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
              <Tr>
                <Td>
                  <Flex align="center">
                    <Avatar size="sm" mr={2} src="amazon.jpeg" />
                    <Flex flexDir="column">
                      <Heading size="sm" letterSpacing="tight">
                        Amazon
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
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </Flex>
  );
}
