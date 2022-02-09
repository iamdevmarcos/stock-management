import { Container, LeftSide, RightSide } from "./styles";
import Head from "next/head";

import Menu from "../Menu";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NextJS - Crud</title>
      </Head>
      <Container>
        <LeftSide>
          <Menu />
        </LeftSide>
        <RightSide>{children}</RightSide>
      </Container>
    </>
  );
}
