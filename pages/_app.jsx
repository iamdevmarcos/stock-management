import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

function myApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default myApp;
