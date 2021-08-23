import { Flex, Container, VStack } from '@chakra-ui/react';

const IndexPage = () => (
  <Container maxW="container.xl" p={0}>
    <Flex h="100vh" py={20}>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
      ></VStack>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg="gray.50"
      ></VStack>
    </Flex>
  </Container>
);

export default IndexPage;
