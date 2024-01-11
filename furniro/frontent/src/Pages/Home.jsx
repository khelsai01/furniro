import { Box, Button, Card, Container, Divider, Flex, GridItem, Heading, Image, SimpleGrid, Spacer, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../ProductRedux/action';
import ProductCard from './ProductCard';

const Home = () => {
    const dispatch = useDispatch();
    const product = useSelector((store) => store.product)



    useEffect(() => {
        dispatch(getProduct())
    }, [])
    // console.log(product)
    return (
        <Container w="1440px" m="auto">
            <VStack m="auto">
                <Box w="1440px" h="716.83px" m="auto" backgroundImage="url('background.svg')">
                    <Box w="643px" h="443px" mt="253px" ml="739px" bg="rgba(255, 243, 227, 1)">
                        <Box w="562px" h="344px" >
                            <Heading w="123px" h="24px" fontFamily="poppins" fontWeight="600" fontSize="16px" lineHeight="24px" color="rgba(51, 51, 51, 1)"
                            >New Arrival</Heading>
                            <Heading w="559px" h="127px" ml="30px" fontFamily="poppins" fontWeight="700" fontSize="52px" lineHeight="65px" textAlign="start" color="rgba(184, 142, 47, 1)">Discover Our New Collection</Heading>
                            <Heading w="546px" h="52px" fontFamily="poppins" fontWeight={"1000"} fontSize="18px" lineHeight="24px" color="#000000" textAlign="start"
                                ml="32px"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</Heading>
                            <br />
                            <Button w="222px" h="74px" p="25px 72px 25px 72px" fontFamily="poppins" fontWeight="700" fontSize="16px" lineHeight="24px" color="rgba(255, 255, 255, 1)" gap="10px" bg="rgba(184, 142, 47, 1)" border="none">BUY NOW</Button>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Divider />
                <Box w="1183px" h="685px">
                    <Box w="559px" h="76.71px" textAlign="center" m="auto" >
                        <Heading w="300px" h="48px" fontFamily="poppins" fontWeight="700" fontSize="32px" lineHeight="48px" color="rgba(51,51,51,1)" alignItems="center" m="auto">Browse The Range</Heading>
                        <Heading w="559px" h="28.71px" fontFamily="poppins" fontWeight="400" fontSize="20px" lineHeight="30px" textAlign="center" color="rgba(102, 102, 102, 1)">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Heading>
                    </Box>
                    <Divider />
                    <Divider />

                    <Flex gap="15px" m="auto" justifyContent="space-evenly">
                        <Box w="381px" h="480px" textAlign="center">
                            <Image src="dinig.svg" alt="dinig" />
                            <Heading w="79px" h="36px" fontFamily="poppins" fontWeight="600" fontSize="24px" lineHeight="36px" >Dinig</Heading>
                        </Box>
                        <Box w="381px" h="480px" textAlign="center">
                            <Image src="living.svg" alt="dinig" />
                            <Heading w="79px" h="36px" fontFamily="poppins" fontWeight="600" fontSize="24px" lineHeight="36px" >Living</Heading>
                        </Box>
                        <Box w="381px" h="480px" textAlign="center">
                            <Image src="bedroom.svg" alt="dinig" />
                            <Heading w="79px" h="36px" fontFamily="poppins" fontWeight="600" fontSize="24px" lineHeight="36px" >Bedroom</Heading>
                        </Box>
                    </Flex>
                </Box>
                <Divider />
                <Divider />
                <SimpleGrid >
                    {/* {product?.map((el) => (
                        <GridItem key={el._id}>
                            <ProductCard {...el} />
                        </GridItem>
                    ))} */}
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

export default Home