import React from "react";
import Head from "next/head";

import Menu from "../components/Menu";
import ContentArea from "../components/ContentArea";

import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stock Management</title>
      </Head>
      <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
        {/* Column 1 - Menu */}
        <Menu />

        {/* Column 2 - ContentArea */}
        <ContentArea />
      </Flex>
    </>
  );
}
