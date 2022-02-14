import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { get } from "../store/slices/financeSlice";
import { insert, order } from "../store/slices/productSlice";

import { getCurrentDate, formatCurrentMonth } from "../utils/dateUtil";

import TableArea from "./TableArea";
import { Flex, Heading, Text, IconButton, Button } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

export default function ContentArea() {
  const list = useSelector((state) => state.product);
  const finance = useSelector((state) => state.finance);
  const dispatch = useDispatch();

  const currentDate = getCurrentDate();

  const handleAddProduct = () => {
    dispatch(
      insert({
        productName: "inserido manual",
        category: "venda",
        totalValue: 129,
        dateMade: currentDate,
      })
    );
  };

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
            R$ 1
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
            R$ 2
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
            R$ 3
          </Text>
        </Flex>
      </Flex>

      <Flex justifyContent="space-between" mt={8}>
        <Flex align="flex-end">
          <Heading as="h2" size="lg" letterSpacing="tight">
            Transações
          </Heading>
          <Text fontSize="small" color="gray" ml={4}>
            {formatCurrentMonth(currentDate)}
          </Text>
        </Flex>
        <Flex gap={10}>
          <Button onClick={() => dispatch(order())}>
            <Text fontWeight="normal" fontSize="16">
              ORDENAR [A-Z]
            </Text>
          </Button>
          <IconButton icon={<FiPlus />} onClick={handleAddProduct} />
        </Flex>
      </Flex>
      <Flex flexDir="column">
        <Flex overflow="auto">
          <TableArea />
        </Flex>
      </Flex>
    </Flex>
  );
}
