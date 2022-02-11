import React, { useState } from "react";
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
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
} from "react-icons/fi";
import MyChart from "../components/MyChart";

export default function Dashboard() {
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
      <Flex
        w="15%"
        flexDir="column"
        alignItems="center"
        backgroundColor="#020202"
        color="#fff"
      >
        <Flex flexDir="column" justifyContent="space-between" h="100vh">
          <Flex flexDir="column" as="nav">
            <Heading
              mt={50}
              mb={100}
              fontSize="4xl"
              alignSelf="center"
              letterSpacing="tight"
            >
              Rise.
            </Heading>
            <Flex flexDir="column" align="flex-start" justifyContent="center">
              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                </Link>
                <Link _hover={{ textDecor: "none" }}>
                  <Text className="active">Home</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiPieChart} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecor: "none" }}>
                  <Text>Credit</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiDollarSign} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecor: "none" }}>
                  <Text>Wallet</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiBox} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecor: "none" }}>
                  <Text>Services</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src="avatar-1.jpg" />
            <Text textAlign="center">Marcos Andre</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Column 2 */}
      <Flex
        w="85%"
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
        background="#fff"
      >
        <Heading fontWeight="normal" mb={10} letterSpacing="tight">
          Bem-vindo de volta,{" "}
          <Flex fontWeight="bold" display="inline-flex">
            Marcos
          </Flex>
        </Heading>
        <Text color="gray" fontSize="sm">
          My Balance
        </Text>
        <Text fontWeight="bold" fontSize="2xl" mb={7}>
          $5,750.20
        </Text>
        <MyChart />
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
