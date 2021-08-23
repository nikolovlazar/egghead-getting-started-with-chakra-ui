import {
  Heading,
  HStack,
  VStack,
  Image,
  AspectRatio,
  Text,
  Divider,
  Stack,
  useColorMode,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      align="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,{' '}
          <Button variant="link" colorScheme="black" onClick={toggleColorMode}>
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack
        spacing={{ base: 3, md: 6 }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        w="full"
      >
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/skateboard.jpg" alt="Skateboard" />
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
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign={{ base: 'start', md: 'end' }}>
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={6} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size="lg">$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
