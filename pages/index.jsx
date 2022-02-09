import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: tomato;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Customer Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>Hello World!</Title>
      </main>
    </div>
  );
}
