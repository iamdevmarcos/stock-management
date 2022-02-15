import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../../store/slices/productSlice";

import Head from "next/head";
import { useRouter } from "next/router";

import Menu from "../../components/Menu";

import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Button,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

export default function Product() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productValue, setProductValue] = useState("");

  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const router = useRouter();
  const { query } = useRouter();

  useEffect(() => {
    // loop to check if the id passed as a parameter exists in the list. Then fill in the data
    for (let i in state) {
      if (state[i].id === query.productId) {
        setProductName(state[i].productName);
        setProductCategory(state[i].category);
        setProductValue(state[i].totalValue);
      }
    }
  }, []);

  const handleEditProduct = () => {
    if (productName !== "" && productCategory !== "" && productValue !== "") {
      dispatch(
        edit({
          id: query.productId,
          productName,
          category: productCategory,
          totalValue: parseInt(productValue),
        })
      );
      router.push("/");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <>
      <Head>
        <title>Stock Management</title>
      </Head>
      <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
        {/* Column 1 - Menu */}
        <Menu />

        {/* Column 2 - AddArea */}
        <Flex
          w="85%"
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
          background="#fff"
        >
          <Heading fontWeight="normal" mb={12} letterSpacing="tight">
            Editar Transação
          </Heading>

          <FormControl>
            <FormLabel htmlFor="product-name">Nome do Produto:</FormLabel>
            <Input
              id="product-name"
              placeholder="ex: Macbook Pro M1"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </FormControl>
          <br />

          <FormControl>
            <FormLabel htmlFor="category">Categoria:</FormLabel>
            <Select
              id="category"
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option></option>
              <option selected={productCategory === "Venda" ? "selected" : ""}>
                Venda
              </option>
              <option selected={productCategory === "Compra" ? "selected" : ""}>
                Compra
              </option>
            </Select>
          </FormControl>
          <br />

          <FormControl>
            <FormLabel htmlFor="product-price">Valor:</FormLabel>
            <NumberInput max={99999} min={1} value={productValue}>
              <NumberInputField
                id="product-price"
                placeholder="Valor total da transação"
                onChange={(e) => setProductValue(e.target.value)}
              />
            </NumberInput>
          </FormControl>
          <br />

          <Button
            mt={4}
            background="#000"
            color="#fff"
            _hover={false}
            type="submit"
            onClick={handleEditProduct}
          >
            Editar Transação
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
