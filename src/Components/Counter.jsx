import React, { useState } from 'react';
import { Box, Button, Text, VStack, HStack } from '@chakra-ui/react';

function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  const getCountColor = () => {
    if (count === 0) return '#2c2c2c'; 
    if (count > 0) return 'rgb(0, 253, 0)'; 
    return 'red'; 
  };

  return (
    <Box
      bg="beige" 
      borderRadius="50"
      boxShadow="lg"
      p={5}
      w="500px"
      h="500px"  
       mt={50}
       ml={450}
       mr={400}
       mb={50}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <VStack spacing={6}>
        <Text fontSize="2xl" fontWeight="bold" color={getCountColor()} >
          Count: {count }
        </Text>
        <HStack spacing={4}>
          <Button onClick={decrement} colorScheme="teal" size="md" bg={'red'} borderRadius={10} ml={10} w={100} h={30}>
            Decrement
          </Button>
          <Button onClick={reset} colorScheme="orange" size="md" bg={'#2c2c2c'} borderRadius={10} ml={10}w={100} h={30}>
            Reset
          </Button>
          <Button onClick={increment} colorScheme="blue" size="md" bg={'rgb(0, 253, 0)'} borderRadius={10}ml={10}w={100} h={30}>
            Increment
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Counter;
