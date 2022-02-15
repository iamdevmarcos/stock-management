import React from "react";
import Head from "next/head";

import Menu from "../components/Menu";

import { Flex, Heading, Stack, Text, Box, Image } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Head>
        <title>Stock Management</title>
      </Head>
      <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
        {/* Column 1 - Menu */}
        <Menu />

        {/* Column 2 - ContentArea */}
        <Flex
          w="85%"
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
          background="#fff"
        >
          <Heading
            textAlign={"center"}
            align={"center"}
            fontWeight="normal"
            mb={12}
            letterSpacing="tight"
          >
            Sobre este projeto 🚀
          </Heading>
          <Stack textAlign={"center"} align={"center"} mt={30}>
            <Text fontSize={18} color={"gray.500"} maxW={"3xl"}>
              Sistema de estoque de produtos criado com <strong>Next.js</strong>{" "}
              e <strong>Redux</strong>. <br />
              Projeto criado para estudos, então sinta-se a vontade para baixar
              o código no Github e usá-lo da melhor maneira que encontrar 😄
            </Text>
            <Flex w={"full"} alignItems="center" justifyContent="center">
              <Box boxSize="sm" mt={30}>
                <Image src="about.svg" alt="Project Image" />
              </Box>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
