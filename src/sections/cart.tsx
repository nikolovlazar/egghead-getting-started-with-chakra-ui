import { Heading, HStack, VStack, Image, AspectRatio, Text, Divider, Stack } from "@chakra-ui/react"

const Cart = () => {
  return (
    <VStack
      w="full"
      h="full"
      padding={10}
      spacing={10}
      alignItems="flex-start"
      bg="gray.50"
    >
      <Heading size="2xl">Your cart</Heading>
      <HStack
        spacing={{ base: 3, md: 6 }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        w="full"
      >
        <AspectRatio ratio={1} w={24}>
          <Image
            src="/images/skateboard.jpg"
            alt="Skateboard"
          />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          <VStack spacing={0} alignItems="flex-start">
            <Heading size="md">Penny board</Heading>
            <Text color="gray.600">PNYCOMP27541</Text>
          </VStack>
          <Heading
            size="sm"
            textAlign={{ base: 'start', md: 'end' }}
          >
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={6} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color="gray.600">Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.600">Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.600">Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <Text color="gray.600">Total</Text>
          <Heading size="lg">$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default Cart;
