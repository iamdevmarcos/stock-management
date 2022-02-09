import { Container, LeftSide, RightSide } from "./styles";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NextJS - Crud</title>
      </Head>
      <Container>
        <LeftSide>MENU</LeftSide>
        <RightSide>{children}</RightSide>
      </Container>
    </>
  );
}
