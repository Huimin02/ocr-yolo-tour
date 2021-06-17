import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Krpano from './Krpano';


function App() {
  return (
    <ChakraProvider theme={theme}>

        <Krpano/>

    </ChakraProvider>
  );
}

export default App;
