import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text
} from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Flex as='nav' p='10px' alignItems='center'>
      <Heading as='h1'>Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing='20px'>
        <Box bg='gray.200' padding='10px'>
          M
        </Box>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme='purple'>Logout</Button>
      </HStack>
    </Flex>

    // <Flex bg='gray.200' justifyContent='space-between' wrap='wrap' gap='2'>
    //   <Box w='150px' height='50px' bg='red'>
    //     1
    //   </Box>
    //   <Box w='150px' height='50px' bg='blue'>
    //     2
    //   </Box>
    //   <Box w='150px' height='50px' flexGrow='1' bg='green'>
    //     3
    //   </Box>
    //   <Box w='150px' height='50px' flexGrow='2' bg='yellow'>
    //     4
    //   </Box>
    // </Flex>
  )
}
