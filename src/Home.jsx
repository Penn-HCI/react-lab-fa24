import React from 'react';
import {
    Heading,
    Text,
    Box, Flex, Image, Center, VStack, Button, Link
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Home(props) {

    const navigate = useNavigate();


    return (
        <Box
  backgroundImage="latte.jpg" // Replace with your desired image URL
  backgroundSize="cover" // Ensures the background image covers the entire Box area
  backgroundPosition="center" // Centers the background image
  minHeight="100vh" // Ensures the Box covers the full viewport height
  width="100vw" // Ensures the Box covers the full viewport width
  overflow="hidden" // Prevents any content overflow
>
  <VStack align="right" textAlign="left" spacing="4" mt={100}>
    <Text fontSize="9xl" mt="150px" color="white" align="right" mr={40}>
      Cold Brew
    </Text>
    <Text fontSize="3xl" color="white" align="right"  mr="220px">
      Drink Cold Brew with Penn HCI group
    </Text>
    <Button
      as={Link}
      href="https://pennhci.com/"
      variant="solid"
      textColor="black"
      bgColor="white"
      mt="25px"
      alignSelf="flex-end"
      isExternal
      maxWidth="200px"
      mr="530px"
    >
      Go to our Website
    </Button>
  </VStack>
</Box>

    );
}

export default Home;