import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({});

export function Provider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}