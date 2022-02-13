import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slices/countSlice";

import Menu from "../components/Menu";

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

export default function Dashboard() {
  const state = useSelector((state) => state.count.total);
  const dispatch = useDispatch();

  const [display, setDisplay] = useState("hide");

  const handleShow = () => {
    if (display === "show") {
      setDisplay("hide");
    } else {
      setDisplay("show");
    }
  };

  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      {/* Column 1 */}
      <Menu />

      {/* Column 2 */}
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
              R$ {state}
            </Text>
          </Flex>

          {/* Tests area */}
          <Flex gap={10}>
            <Button onClick={() => dispatch(increment())}>[ ADICIONAR ]</Button>
            <Button onClick={() => dispatch(decrement())}>[ REMOVER ]</Button>
          </Flex>
          {/* End Test Area */}
        </Flex>

        <Flex justifyContent="space-between" mt={8}>
          <Flex align="flex-end">
            <Heading as="h2" size="lg" letterSpacing="tight">
              Transactions
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
                  <Th>Name of transaction</Th>
                  <Th>Category</Th>
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
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} src="starbucks.png" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          Starbucks
                        </Heading>
                        <Text fontSize="sm" color="gray">
                          Apr 22, 2021 at 2:43pm
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Cafe and restaurant</Td>
                  <Td isNumeric>+$23</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      -$32
                    </Text>
                    .00
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} src="youtube.png" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          YouTube
                        </Heading>
                        <Text fontSize="sm" color="gray">
                          Apr 13, 2021 at 11:23am
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Social Media</Td>
                  <Td isNumeric>+$4</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      -$112
                    </Text>
                    .00
                  </Td>
                </Tr>
                {display === "show" && (
                  <>
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar size="sm" mr={2} src="amazon.jpeg" />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">
                              Amazon
                            </Heading>
                            <Text fontSize="sm" color="gray">
                              Apr 12, 2021 at 9:40pm
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
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar size="sm" mr={2} src="starbucks.png" />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">
                              Starbucks
                            </Heading>
                            <Text fontSize="sm" color="gray">
                              Apr 10, 2021 at 2:10pm
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Cafe and restaurant</Td>
                      <Td isNumeric>+$23</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          -$32
                        </Text>
                        .00
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar size="sm" mr={2} src="youtube.png" />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">
                              YouTube
                            </Heading>
                            <Text fontSize="sm" color="gray">
                              Apr 7, 2021 at 9:03am
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Social Media</Td>
                      <Td isNumeric>+$4</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          -$112
                        </Text>
                        .00
                      </Td>
                    </Tr>
                  </>
                )}
              </Tbody>
            </Table>
          </Flex>
          <Flex align="center">
            <Divider />
            <IconButton
              icon={display === "show" ? <FiChevronUp /> : <FiChevronDown />}
              onClick={handleShow}
            />
            <Divider />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
