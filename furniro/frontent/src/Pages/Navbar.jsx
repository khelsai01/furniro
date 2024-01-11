import React from 'react'
import { Container, Box, Flex, Image, Heading, HStack, Text } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <Container w="1440px" h="100px" bg="rgba(255, 255, 255, 1)" m="auto">
            <Flex  h="41px" m="auto" mt="27px" left="54px" justifyContent="space-between" >

                <Box>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <HStack w="185px" h="41px" top="29px" left="54px" gap="5px" >
                            <Image src='logo.png' w="50px" h="32px" alt="furniro" />
                            <Heading fontWeight={700} fontSize="34px" lineHeight="41.45px" w="130px" h="41px" color="rgba(0, 0, 0, 1)"  >Furniro</Heading>

                        </HStack>
                    </Link>
                </Box>
                <Flex w="430px" h="24px" top="38px" left="505px" justifyContent="space-between">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Heading w="48px" h="24px" fontFamily="poppins" fontWeight={500} fontSize="16px" lineHeight="24px" color="rgba(0, 0, 0, 1)">Home</Heading>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <Heading w="48px" h="24px" fontFamily="poppins" fontWeight={500} fontSize="16px" lineHeight="24px" color="rgba(0, 0, 0, 1)">Shop</Heading>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Heading w="48px" h="24px" fontFamily="poppins" fontWeight={500} fontSize="16px" lineHeight="24px" color="rgba(0, 0, 0, 1)">Abouts</Heading>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Heading w="48px" h="24px" fontFamily="poppins" fontWeight={500} fontSize="16px" lineHeight="24px" color="rgba(0, 0, 0, 1)">Contact</Heading>
                    </Link>
                </Flex>
                <Box w="430px" h="24px" top="28px" >

                <Flex w="430px" h="24px" mt="18px" justifyContent="space-evenly">

                    <Image src="Vector.png" w="23.33px" h="18.67px"  top="38px" left="2.33px" alt="vector" />
                    <Image src="akar-icons_search.png" w="23.33px" h="18.67px"  top="38px" left="2.33px" alt="vector" />
                    <Image src="akar-icons_heart.png" w="23.33px" h="18.67px"  top="38px" left="2.33px" alt="vector" />
                    <Image src="ant-design_shopping-cart-outlined.png" w="23.33px" h="18.67px"  top="38px"left="2.33px" alt="vector" />

                </Flex>
                </Box>
            </Flex>
        </Container>
    )
}

export default Navbar