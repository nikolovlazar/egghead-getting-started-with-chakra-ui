import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Link,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

const Details = () => {
  return (
    <VStack w='full' h='full' padding={10} spacing={10} alignItems='flex-start'>
      <VStack alignItems='flex-start' spacing={3}>
        <Heading size='2xl'>Your details</Heading>
        <Text>
          If you already have an account,{' '}
          <Link href='#'>click here to log in.</Link>
        </Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder='John' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder='Doe' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder='Blvd. Broken Dreams 21' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder='San Francisco' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value='usa'>United States of America</option>
              <option value='uae'>United Arab Emirates</option>
              <option value='nmk'>North Macedonia</option>
              <option value='de'>Germany</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2} display='flex'>
          <Button variant="primary" size='lg' flex={1}>
            Place order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
