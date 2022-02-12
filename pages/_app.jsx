import "../styles/globals.css";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import store from "../store/configureStore";

function myApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default myApp;
