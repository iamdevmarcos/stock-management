import React from "react";

import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import Menu from "../components/Menu";
import ContentArea from "../components/ContentArea";

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
