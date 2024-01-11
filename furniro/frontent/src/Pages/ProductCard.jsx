import { Box, Card, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({ name, image, price, description, category }) => {
  // console.log(image)
  return (
    <Card w="285px" h="446px" pb="10px" background="rgba(244, 245, 247, 1)">
      <Image src={require(`../image/${image}`)} alt="image" h="301px" />
      <Box h="99px">
        <Box w="224px" m="auto">
          <Heading h="29px" fontFamily="poppins" fontWeight={"600"} fontSize="24px" lineHeight="28.8px" color="rgba(58,58,58,1)" letterSpacing="0em" textAlign="left">{name}</Heading>
          <Heading h="24px" fontFamily="poppins" fontSize="16px" fontWeight={"500"}
            lineHeight="24px" color="rgba(137,137,137,1)" letterSpacing="0em" textAlign="left" >{description}</Heading>
          <Heading h="24px" fontFamily="poppins" fontWeight={"600"} fontSize="20px" lineHeight="30px" color="rgba(58,58,58,1)" letterSpacing="0em" textAlign="left" >Rp {price}.000</Heading>
        </Box>

      </Box>
    </Card>
  )
}

export default ProductCard