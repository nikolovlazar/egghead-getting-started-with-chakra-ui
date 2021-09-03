import { Flex, Container } from '@chakra-ui/react';

import Cart from '../src/sections/cart';
import Details from '../src/sections/details';

const IndexPage = () => (
  <Container maxW="container.xl" p={0}>
    <Flex
      h={{ base: 'auto', md: '100vh' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      py={[0, 10, 20]}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
